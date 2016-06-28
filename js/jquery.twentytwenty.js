(function($){

  $.fn.twentytwenty = function(options) {
      var options = $.extend({
          default_offset_pct: 0.5,
          orientation: 'horizontal',
          overlay: true,
          transition_in: false
      }, options);
    return this.each(function() {

      var sliderPct = options.default_offset_pct;
      var container = $(this);
      var sliderOrientation = options.orientation;
      var beforeDirection = (sliderOrientation === 'vertical') ? 'down' : 'left';
      var afterDirection = (sliderOrientation === 'vertical') ? 'up' : 'right';
      
      
      container.wrap("<div class='twentytwenty-wrapper twentytwenty-" + sliderOrientation + "'></div>");
      if (options.overlay) {
          container.append("<div class='twentytwenty-overlay'></div>");
      }
      var beforeImg = container.find("img:first");
      var afterImg = container.find("img:last");
      container.append("<div class='twentytwenty-handle'></div>");
      var slider = container.find(".twentytwenty-handle");
      slider.append("<span class='twentytwenty-" + beforeDirection + "-arrow'></span>");
      slider.append("<span class='twentytwenty-" + afterDirection + "-arrow'></span>");
      container.addClass("twentytwenty-container");
      beforeImg.addClass("twentytwenty-before");
      afterImg.addClass("twentytwenty-after");
      
      if (options.overlay) {
          var overlay = container.find(".twentytwenty-overlay");
          overlay.append("<div class='twentytwenty-before-label'></div>");
          overlay.append("<div class='twentytwenty-after-label'></div>");
      }

      var calcOffset = function(dimensionPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
          w: w+"px",
          h: h+"px",
          cw: (dimensionPct*w)+"px",
          ch: (dimensionPct*h)+"px"
        };
      };

      var adjustContainer = function(offset) {
      	if (sliderOrientation === 'vertical') {
      	  beforeImg.css("clip", "rect(0,"+offset.w+","+offset.ch+",0)");
      	}
      	else {
          beforeImg.css("clip", "rect(0,"+offset.cw+","+offset.h+",0)");
    	}
        container.css("height", offset.h);
      };

      var adjustSlider = function(pct) {
        var offset = calcOffset(pct);
        slider.css((sliderOrientation==="vertical") ? "top" : "left", (sliderOrientation==="vertical") ? offset.ch : offset.cw);
        adjustContainer(offset);
      }

      $(window).on("resize.twentytwenty", function(e) {
        adjustSlider(sliderPct);
      });

      var offsetX = 0;
      var imgWidth = 0;
      
      slider.on("movestart", function(e) {
        if (((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) && sliderOrientation !== 'vertical') {
          e.preventDefault();
        }
        else if (((e.distX < e.distY && e.distX < -e.distY) || (e.distX > e.distY && e.distX > -e.distY)) && sliderOrientation === 'vertical') {
          e.preventDefault();
        }
        container.addClass("active");
        offsetX = container.offset().left;
        offsetY = container.offset().top;
        imgWidth = beforeImg.width(); 
        imgHeight = beforeImg.height();          
      });

      slider.on("moveend", function(e) {
        container.removeClass("active");
      });

      slider.on("move", function(e) {
        if (container.hasClass("active")) {
          sliderPct = (sliderOrientation === 'vertical') ? (e.pageY-offsetY)/imgHeight : (e.pageX-offsetX)/imgWidth;
          if (sliderPct < 0) {
            sliderPct = 0;
          }
          if (sliderPct > 1) {
            sliderPct = 1;
          }
          adjustSlider(sliderPct);
        }
      });

      container.find("img").on("mousedown", function(event) {
        event.preventDefault();
      });

      container.on('goTo.twentytwenty', function (e, pos) {
                adjustSlider(pos);
            });

            if (options.transition_in) {
                var before = $('.twentytwenty-before').css('clip', 'rect(0px 0 ' + beforeImg.height() + 'px 0px)');
                var handle = container.find('.twentytwenty-handle').css('left', 0);

                setTimeout(function () {
                    before.add(handle)
                        .on('transitionEnd oTransitionEnd msTransitionEnd transitionend webkitTransitionEnd', function () {
                            container.find('.twentytwenty-handle,.twentytwenty-before').css({
                                'transition': 'none'
                            });
                        })
                    .css({
                        '-webkit-transition': 'all 1.5s ease',
                        '-moz-transition': 'all 1.5s ease',
                        'transition': 'all 1.5s ease'
                    });

                    $(window).trigger("resize.twentytwenty");
                });
            }
            else {
                $(window).trigger("resize.twentytwenty");
            }

            container.trigger('init.twentytwenty', [container]);
        });
    });
  };

})(jQuery);
