// GLOBAL
var offsetPct = 0;
var orientation = 'horizontal';
var $container;

var isHorizontal = function() {
  return orientation === 'horizontal';
};

module.exports.isHorizontal = isHorizontal;

/**
 * Sets the offset percentage
 * @param pct {Number} The percentage of the offset, between 0 and 1, i.e. 0.5
 */
module.exports.setOffsetPct = function(pct) {
  offsetPct = pct;
};

/**
 * Sets the offset percentage
 * @param ort {string} The orientation, `horizontal` or `vertical`
 */
module.exports.setOrientation = function(ort) {
  orientation = ort;
};

/**
 * Sets the offset percentage
 * @param $el {Object} The DOM element for the container
 */
module.exports.setContainer = function($el) {
  $container = $el;
};

/**
 * Find the offset of the mouse/touch event
 * @param e {Object} The mouse/touch event
 * @returns {Number} offset, in pixels
 */
module.exports.calcOffset = function(e) {
  var rect = $container.getBoundingClientRect();
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
module.exports.fireOnMovement = function(callback, e) {
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
module.exports.getDimensions = function($img) {
  var w = $img[0].offsetWidth;
  var h = $img[0].offsetHeight;
  return {
    w: w,
    h: h,
    xOffset: w * offsetPct,
    yOffset: h * offsetPct
  };
};
