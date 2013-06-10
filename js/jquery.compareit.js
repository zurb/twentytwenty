(function($){

  $.fn.compareit = function(options) {
    var offset = this.offset();
    var bar = this.find(".compareit-bar");
    var before = this.find(".compareit-image-before");
    var container = this;

    
    bar.on("mousedown", function(event){
      container.addClass("active");
      var leftOffset = event.pageX - offset.left;
      bar.css("left", leftOffset + "px");
      before.css("width", leftOffset + "px");
    });

    bar.on("mouseup", function(event){
      container.removeClass("active");
    });

    container.on("mousemove", function(event){
        if ($(this).hasClass("active")) {
          var leftOffset = event.pageX - offset.left;
          bar.css("left", leftOffset + "px");
          before.css("width", leftOffset + "px");
        }
    });


    return this;
  };

  $("#compare1").compareit();

})(jQuery);