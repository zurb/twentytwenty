define([], function() {
  var TT = {};

  TT.isHorizontal = function(orientation) {
    return orientation === 'horizontal';
  };

  /**
   * Find the offset of the mouse/touch event
   * @param e {Object} The mouse/touch event
   * @returns {Number} offset, in pixels
   */
  TT.calcOffset = function($container, e) {
    var rect = $container[0].getBoundingClientRect();
    var coords = getCoords(e);

    return {
      x: coords.x - Math.abs(rect.left),
      y: coords.y - Math.abs(rect.top)
    };
  };

  /**
   * Provide a simple API to get the coordinates of a mouse/touch event
   * @param e {Object} The click/touch event
   * @returns {Object} Contains the x,y coordinates of the event
   */
  var getCoords = function(e) {
    if (typeof e.touches !== 'undefined') {
      return {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    }

    return {
      x: e.clientX,
      y: e.clientY
    };
  };

  var pendingAnimation = false;
  /**
   * Only fire callback when an animation frame is available to prevent
   * excessive DOM painting
   * @param callback {Function}
   * @param e {Object} The mouse/touch event
   */
  TT.fireOnMovement = function(callback, e) {
    if (!pendingAnimation) {
      pendingAnimation = true;
      requestAnimationFrame(function() {
        callback(e);
        pendingAnimation = false;
      });
    }
  };

  /**
   * @param $img {Object} The DOM object for the before image
   */
  TT.getDimensions = function($img, offsetPct) {
    var w = $img[0].offsetWidth;
    var h = $img[0].offsetHeight;
    return {
      w: w,
      h: h,
      xOffset: w * offsetPct,
      yOffset: h * offsetPct
    };
  };

  return TT;
});
