(function($){

  $.fn.compareit = function(options) {
    return this.each(function() {

      var sliderPct = 0.5;
      var container = $(this);
      var beforeImg = container.find("img:first");
      var afterImg = container.find("img:last");
      container.append("<div class='compareit-slider-bar'></div>");
      var slider = container.find(".compareit-slider-bar");
      container.addClass("compareit-container");
      beforeImg.addClass("compareit-before");
      afterImg.addClass("compareit-after");


      var calcOffset = function(widthPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
          w: w+"px",
          h: h+"px",
          cw: (widthPct*w)+"px"
        };
      };

      var adjustContainer = function(offset) {
        beforeImg.css("clip", "rect(0,"+offset.cw+","+offset.h+",0)");
        container.css("height", offset.h);
      };

      var adjustSlider = function(pct) {
        var offset = calcOffset(pct);
        slider.css("height", offset.h);
        slider.css("left", offset.cw);
        adjustContainer(offset);
      }

      $(window).on("resize.compareit", function(e) {
        adjustSlider(sliderPct);
      });

      $(window).trigger("resize.compareit");

      var offsetX = 0;
      var imgWidth = 0;
      
      container.on("movestart", function(e) {
        if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
          e.preventDefault();
        }
        container.addClass("active");
        offsetX = container.offset().left;
        imgWidth = beforeImg.width();          
      });

      container.on("moveend", function(e) {
        container.removeClass("active");
      });

      container.on("move", function(event) {
        if (container.hasClass("active")) {
          sliderPct = (event.pageX-offsetX)/imgWidth;
          adjustSlider(sliderPct);
        }
      });

      container.find("img").on("mousedown", function(e) {
        event.preventDefault();
      });

    });

  };

  $(".compareit-container").compareit();

})(jQuery);