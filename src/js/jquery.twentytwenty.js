require('../scss/twentytwenty.scss');
var TT = require('./core.js');

(function($) {

  $.fn.twentytwenty = function(options) {
    options = $.extend({defaultOffsetPct: 0.5, orientation: 'horizontal'}, options);
    return this.each(function() {
      var isActive = false;
      var sliderPct = options.defaultOffsetPct;
      var container = $(this);
      var sliderOrientation = options.orientation;
      var beforeDirection = (sliderOrientation === 'vertical') ? 'down' : 'left';
      var afterDirection = (sliderOrientation === 'vertical') ? 'up' : 'right';

      container.wrap('<div class="twentytwenty-wrapper twentytwenty-' + sliderOrientation + '"></div>');
      container.append('<div class="twentytwenty-overlay"></div>');
      var beforeImg = container.find('img:first');
      var afterImg = container.find('img:last');
      container.append('<div class="twentytwenty-handle"></div>');
      var slider = container.find('.twentytwenty-handle');
      slider.append('<span class="twentytwenty-' + beforeDirection + '-arrow"></span>');
      slider.append('<span class="twentytwenty-' + afterDirection + '-arrow"></span>');
      container.addClass('twentytwenty-container');
      beforeImg.addClass('twentytwenty-before');
      afterImg.addClass('twentytwenty-after');

      var overlay = container.find('.twentytwenty-overlay');
      overlay.append('<div class="twentytwenty-before-label"></div>');
      overlay.append('<div class="twentytwenty-after-label"></div>');

      var setDimensions = function(w, h, xOffset, yOffset) {
        container.css({
          width: w + 'px',
          height: h + 'px'
        });

        if (TT.isHorizontal(sliderOrientation)) {
          beforeImg.css('clip', 'rect(0,' + xOffset + 'px, ' + h + 'px, 0)');
          slider.css('left', xOffset + 'px');
        } else {
          beforeImg.css('clip', 'rect(0,' + w + 'px, ' + yOffset + 'px, 0)');
          slider.css('top', yOffset + 'px');
        }
      };

      var adjustContainerOnSwipe = function(e) {
        var w = beforeImg[0].offsetWidth;
        var h = beforeImg[0].offsetHeight;
        var offset = TT.calcOffset(container, e);
        var offsetPct = TT.isHorizontal(sliderOrientation) ? (offset.x / w) : (offset.y / h);
        var d = TT.getDimensions(beforeImg, offsetPct);
        if (TT.isHorizontal(sliderOrientation)) {
          beforeImg.css('clip', 'rect(0,' + offset.x + 'px, ' + d.h + 'px, 0)');
          slider.css('left', offset.x + 'px');
        } else {
          beforeImg.css('clip', 'rect(0,' + d.w + 'px, ' + offset.y + 'px, 0)');
          slider.css('top', offset.y + 'px');
        }

      };

      container
        .on('mousedown', function(e) {
          isActive = true;
          container.addClass('active');
          adjustContainerOnSwipe(e);
        })
        .on('mousemove', function(e) {
          if (isActive) {
            adjustContainerOnSwipe(e);
          }
        })
        .on('mouseup', function(e) {
          adjustContainerOnSwipe(e);
          container.removeClass('active');
          isActive = false;
        });

      // Set dimensions if image is loaded, otherwise wait
      if (beforeImg[0].offsetHeight === 0) {
        beforeImg.on('load', function() {
          var d = TT.getDimensions(beforeImg, sliderPct);
          setDimensions(d.w, d.h, d.xOffset, d.yOffset);
        });
      } else {
        var d = TT.getDimensions(beforeImg, sliderPct);
        setDimensions(d.w, d.h, d.xOffset, d.yOffset);
      }
    });
  };

})(jQuery);
