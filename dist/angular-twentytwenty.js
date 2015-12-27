/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var TT = __webpack_require__(5);
	
	angular.module('tt', [])
	  .directive('twentytwenty', ['$window', function($window) {
	    return {
	      restrict: 'E',
	      scope: {
	        before: '@',
	        after: '@',
	        offset: '@',
	        orientation: '@'
	      },
	      template: function() {
	        return __webpack_require__(6);
	      },
	
	      controller: ['$scope', '$element', function($scope, $element) {
	        $scope.orientation = $scope.orientation || 'horizontal';
	        $scope.offsetPct = parseFloat($scope.offset) || 0.5;
	        var $beforeImg = angular.element($element.find('img')[0]);
	        var isActive = false;
	
	        var adjustContainer = function(w, h, xOffset, yOffset) {
	          var offsetPct = TT.isHorizontal($scope.orientation) ?
	            (xOffset / $scope.w) : (yOffset / $scope.h);
	          $scope.w = w;
	          $scope.h = h;
	          $scope.offset = TT.isHorizontal($scope.orientation) ? xOffset : yOffset;
	          $scope.$apply();
	        };
	
	        var adjustContainerOnSwipe = function(e) {
	          var offset = TT.calcOffset($element, e);
	          var offsetPct = TT.isHorizontal($scope.orientation) ?
	            (offset.x / $scope.w) : (offset.y / $scope.h);
	          $scope.offsetPct = offsetPct;
	          $scope.offset = TT.isHorizontal($scope.orientation) ? offset.x : offset.y;
	          $scope.$apply();
	        };
	
	        var setDimensions = function() {
	          var d = TT.getDimensions($beforeImg, $scope.offsetPct);
	          adjustContainer(d.w, d.h, d.xOffset, d.yOffset);
	        };
	
	        // Set dimensions if image is loaded, otherwise wait
	        if ($beforeImg[0].offsetHeight === 0) {
	          $beforeImg.bind('load', setDimensions);
	        } else {
	          setDimensions();
	        }
	
	        $element.bind('mousedown touchstart', function(e) {
	          isActive = true;
	          adjustContainerOnSwipe(e);
	        });
	
	        $element.bind('mousemove touchmove', function(e) {
	          if (isActive)
	            TT.fireOnMovement(adjustContainerOnSwipe, e);
	        });
	
	        $element.bind('mouseup touchend', function(e) {
	          isActive = false;
	          adjustContainerOnSwipe(e);
	        });
	
	        angular.element($window).bind('resize', function() {
	          setDimensions();
	          $scope.$apply();
	        });
	
	        $scope.isHorizontal = TT.isHorizontal($scope.orientation);
	      }]
	    };
	  }]);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./../../node_modules/sass-loader/index.js?sourceMap!./twentytwenty.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./../../node_modules/sass-loader/index.js?sourceMap!./twentytwenty.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".twentytwenty-horizontal .twentytwenty-handle:after,.twentytwenty-horizontal .twentytwenty-handle:before,.twentytwenty-vertical .twentytwenty-handle:after,.twentytwenty-vertical .twentytwenty-handle:before{content:\" \";display:block;background:#fff;position:absolute;z-index:30;box-shadow:0 0 12px rgba(51,51,51,.5)}.twentytwenty-horizontal .twentytwenty-handle:after,.twentytwenty-horizontal .twentytwenty-handle:before{width:3px;height:9999px;left:50%;margin-left:-1.5px}.twentytwenty-vertical .twentytwenty-handle:after,.twentytwenty-vertical .twentytwenty-handle:before{width:9999px;height:3px;top:50%;margin-top:-1.5px}.twentytwenty-after-label,.twentytwenty-before-label,.twentytwenty-overlay{position:absolute;top:0;width:100%;height:100%;transition-duration:.5s}.twentytwenty-after-label,.twentytwenty-before-label{transition-property:opacity}.twentytwenty-after-label:before,.twentytwenty-before-label:before{color:#fff;font-size:13px;letter-spacing:.1em;position:absolute;background:hsla(0,0%,100%,.2);line-height:38px;padding:0 20px;border-radius:2px}.twentytwenty-horizontal .twentytwenty-after-label:before,.twentytwenty-horizontal .twentytwenty-before-label:before{top:50%;margin-top:-19px}.twentytwenty-vertical .twentytwenty-after-label:before,.twentytwenty-vertical .twentytwenty-before-label:before{left:50%;margin-left:-45px;text-align:center;width:90px}.twentytwenty-down-arrow,.twentytwenty-left-arrow,.twentytwenty-right-arrow,.twentytwenty-up-arrow{width:0;height:0;border:6px inset transparent;position:absolute}.twentytwenty-left-arrow,.twentytwenty-right-arrow{top:50%;margin-top:-6px}.twentytwenty-down-arrow,.twentytwenty-up-arrow{left:50%;margin-left:-6px}.twentytwenty-container{box-sizing:content-box;z-index:0;overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none}.twentytwenty-container img{max-width:100%;position:absolute;top:0;display:block}.twentytwenty-container.active .twentytwenty-overlay,.twentytwenty-container.active :hover.twentytwenty-overlay{background:transparent}.twentytwenty-container.active .twentytwenty-overlay .twentytwenty-after-label,.twentytwenty-container.active .twentytwenty-overlay .twentytwenty-before-label,.twentytwenty-container.active :hover.twentytwenty-overlay .twentytwenty-after-label,.twentytwenty-container.active :hover.twentytwenty-overlay .twentytwenty-before-label{opacity:0}.twentytwenty-container *{box-sizing:content-box}.twentytwenty-before-label{opacity:0}.twentytwenty-before-label:before{content:\"Before\"}.twentytwenty-after-label{opacity:0}.twentytwenty-after-label:before{content:\"After\"}.twentytwenty-horizontal .twentytwenty-before-label:before{left:10px}.twentytwenty-horizontal .twentytwenty-after-label:before{right:10px}.twentytwenty-vertical .twentytwenty-before-label:before{top:10px}.twentytwenty-vertical .twentytwenty-after-label:before{bottom:10px}.twentytwenty-overlay{transition-property:background;background:transparent;z-index:25}.twentytwenty-overlay:hover{background:rgba(0,0,0,.5)}.twentytwenty-overlay:hover .twentytwenty-after-label,.twentytwenty-overlay:hover .twentytwenty-before-label{opacity:1}.twentytwenty-before{z-index:20}.twentytwenty-after{z-index:10}.twentytwenty-handle{height:38px;width:38px;position:absolute;left:50%;top:50%;margin-left:-22px;margin-top:-22px;border:3px solid #fff;border-radius:1000px;box-shadow:0 0 12px rgba(51,51,51,.5);z-index:40;cursor:pointer}.twentytwenty-horizontal .twentytwenty-handle:before{bottom:50%;margin-bottom:22px;box-shadow:0 3px 0 #fff,0 0 12px rgba(51,51,51,.5)}.twentytwenty-horizontal .twentytwenty-handle:after{top:50%;margin-top:22px;box-shadow:0 -3px 0 #fff,0 0 12px rgba(51,51,51,.5)}.twentytwenty-vertical .twentytwenty-handle:before{left:50%;margin-left:22px;box-shadow:3px 0 0 #fff,0 0 12px rgba(51,51,51,.5)}.twentytwenty-vertical .twentytwenty-handle:after{right:50%;margin-right:22px;box-shadow:-3px 0 0 #fff,0 0 12px rgba(51,51,51,.5)}.twentytwenty-left-arrow{border-right:6px solid #fff;left:50%;margin-left:-17px}.twentytwenty-right-arrow{border-left:6px solid #fff;right:50%;margin-right:-17px}.twentytwenty-up-arrow{border-bottom:6px solid #fff;top:50%;margin-top:-17px}.twentytwenty-down-arrow{border-top:6px solid #fff;bottom:50%;margin-bottom:-17px}", "", {"version":3,"sources":["/./src/scss/src/src/scss/twentytwenty.scss"],"names":[],"mappings":"AAgOA,8MAtME,YACA,cACA,gBACA,kBACA,WACA,qCAxBiD,CAyBlD,yGAGC,UACA,cACA,SACA,kBAAsC,CACvC,qGAGC,aACA,WACA,QACA,iBAAqC,CACtC,2EAGC,kBACA,MACA,WACA,YAAa,AAGgB,uBAA0B,CAFxD,AAE4D,qDAEhC,2BAA6B,CAAI,mEAG5D,WACA,eACA,oBAzC2C,AA6C3C,kBACA,8BACA,iBACA,eACA,iBAhDyB,CAyC1B,AAQA,qHAGC,QACA,gBAA4C,CAC7C,iHAGC,SACA,kBACA,kBACA,UAhEiC,CAiElC,mGAGC,QACA,SACA,6BACA,iBAAmB,CACpB,mDAIC,QACA,eAtFiC,CAuFlC,gDAIC,SACA,gBA5FiC,CA6FlC,wBAIC,uBACA,UACA,gBACA,kBACA,yBACA,qBAAuB,CANzB,4BASI,eACA,kBACA,MACA,aAAe,CAZnB,gHAeI,sBAAqB,CAfzB,0UAiBM,SAAW,CAjBjB,0BAmBM,sBAAwB,CAAI,2BAQhC,SAAW,CAJb,kCASI,gBAAkB,CACnB,0BAQD,SAAW,CAJb,iCASI,eAAiB,CAClB,2DAQE,SAAW,CACb,0DAOE,UAAY,CACd,yDAQE,QAAU,CACZ,wDAOE,WAAa,CACf,sBAOD,+BACA,uBACA,UAAY,CALd,4BAOY,yBAvLmB,CAgL/B,6GAUM,SAAW,CAAI,qBAInB,UAAY,CAAI,oBAChB,UAAY,CAAI,qBAIhB,YACA,WACA,kBACA,SACA,QACA,kBACA,iBACA,sBACA,qBACA,sCACA,WACA,cAAgB,CACjB,qDAQG,WACA,mBACA,kDAhO+C,CAyNnD,oDAaI,QACA,gBACA,mDAxO+C,CAyOhD,mDASC,SACA,iBACA,kDApP+C,CA6OnD,kDAaI,UACA,kBACA,mDA5P+C,CA6PhD,yBAKD,4BACA,SACA,iBAAc,CAEf,0BAIC,2BACA,UACA,kBAAe,CAEhB,uBAIC,6BACA,QACA,gBAAa,CAEd,yBAIC,0BACA,WACA,mBAAgB,CAEjB","file":"twentytwenty.scss","sourcesContent":["// 20/20 Class Prefix\n$pluginPrefix: \"twentytwenty\" !default;\n\n// 20/20 Handle Styles\n$twenty20-handle-color: #fff !default;\n$twenty20-handle-stroke: 3px !default;\n$twenty20-handle-circle-width: 38px !default;\n$twenty20-handle-box-shadow: 0px 0px 12px rgba(#333,0.5) !default;\n$twenty20-handle-triangle-color: $twenty20-handle-color !default;\n$twenty20-handle-triangle-size: 6px !default;\n$twenty20-handle-triangle-position: 5px !default;\n$twenty20-handle-radius: 1000px !default;\n\n// 20/20 Overlay Styles\n$twenty20-overlay-bg: rgba(#000,0.5) !default;\n$twenty20-overlay-label-color: #fff !default;\n$twenty20-overlay-label-bg: rgba(#fff, .2) !default;\n$twenty20-overlay-label-height: 38px !default;\n$twenty20-overlay-label-width: 90px !default;\n$twenty20-overlay-label-padding: 20px !default;\n$twenty20-overlay-label-font-size: 13px !default;\n$twenty20-overlay-label-letter-spacing: 0.1em !default;\n$twenty20-label-radius: 2px !default;\n\n// 20/20 Placeholders\n%handle-content {\n  content: \" \";\n  display: block;\n  background: $twenty20-handle-color;\n  position: absolute;\n  z-index: 30;\n  box-shadow: $twenty20-handle-box-shadow;\n}\n\n%handle-position-horizontal {\n  width: $twenty20-handle-stroke;\n  height: 9999px;\n  left: 50%;\n  margin-left: -($twenty20-handle-stroke / 2);\n}\n\n%handle-position-vertical {\n  width: 9999px;\n  height: $twenty20-handle-stroke;\n  top: 50%;\n  margin-top: -($twenty20-handle-stroke / 2);\n}\n\n%absolute-wh-position {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n%overlay-transition-duration { transition-duration: 0.5s; }\n\n%label-transition-property { transition-property: opacity; }\n\n%label-text {\n  color: $twenty20-overlay-label-color;\n  font-size: $twenty20-overlay-label-font-size;\n  letter-spacing: $twenty20-overlay-label-letter-spacing;\n}\n\n%label-structure {\n  position: absolute;\n  background: $twenty20-overlay-label-bg;\n  line-height: $twenty20-overlay-label-height;\n  padding: 0 $twenty20-overlay-label-padding;\n  border-radius: $twenty20-label-radius;\n}\n\n%label-position-horizontal {\n  top: 50%;\n  margin-top: -($twenty20-overlay-label-height / 2);\n}\n\n%label-position-vertical {\n  left: 50%;\n  margin-left: -($twenty20-overlay-label-width / 2);\n  text-align: center;\n  width: $twenty20-overlay-label-width;\n}\n\n%css-triangle {\n  width: 0;\n  height: 0;\n  border: $twenty20-handle-triangle-size inset transparent;\n  position: absolute;\n}\n\n%css-triangle-horizontal {\n  @extend %css-triangle;\n  top: 50%;\n  margin-top: -$twenty20-handle-triangle-size;\n}\n\n%css-triangle-vertical {\n  @extend %css-triangle;\n  left: 50%;\n  margin-left: -$twenty20-handle-triangle-size;\n}\n\n// 20/20 Container\n.#{$pluginPrefix}-container {\n  box-sizing: content-box;\n  z-index: 0;\n  overflow: hidden;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n\n  img {\n    max-width: 100%;\n    position: absolute;\n    top: 0;\n    display: block;\n  }\n\n  &.active .#{$pluginPrefix}-overlay,\n  &.active :hover.#{$pluginPrefix}-overlay { background: rgba(#000,0);\n\n    .#{$pluginPrefix}-before-label,\n    .#{$pluginPrefix}-after-label { opacity: 0; }\n  }\n  * { box-sizing: content-box; }\n}\n\n// 20/20 Before Label\n.#{$pluginPrefix}-before-label {\n  @extend %absolute-wh-position;\n  @extend %label-transition-property;\n  @extend %overlay-transition-duration;\n  opacity: 0;\n\n  &:before {\n    @extend %label-structure;\n    @extend %label-text;\n    content: \"Before\";\n  }\n}\n\n// 20/20 After Label\n.#{$pluginPrefix}-after-label {\n  @extend %absolute-wh-position;\n  @extend %label-transition-property;\n  @extend %overlay-transition-duration;\n  opacity: 0;\n\n  &:before {\n    @extend %label-structure;\n    @extend %label-text;\n    content: \"After\";\n  }\n}\n\n// 20/20 Horizontal Labels\n.#{$pluginPrefix}-horizontal .#{$pluginPrefix}-before-label {\n\n  &:before {\n     @extend %label-position-horizontal;\n     left: 10px;\n  }\n}\n\n.#{$pluginPrefix}-horizontal .#{$pluginPrefix}-after-label {\n\n  &:before {\n     @extend %label-position-horizontal;\n     right: 10px;\n  }\n}\n\n// 20/20 Vertical Labels\n.#{$pluginPrefix}-vertical .#{$pluginPrefix}-before-label {\n\n  &:before {\n     @extend %label-position-vertical;\n     top: 10px;\n  }\n}\n\n.#{$pluginPrefix}-vertical .#{$pluginPrefix}-after-label {\n\n  &:before {\n     @extend %label-position-vertical;\n     bottom: 10px;\n  }\n}\n\n// 20/20 Overlay\n.#{$pluginPrefix}-overlay {\n  @extend %absolute-wh-position;\n  @extend %overlay-transition-duration;\n  transition-property: background;\n  background: rgba(#000,0);\n  z-index: 25;\n\n  &:hover { background: $twenty20-overlay-bg;\n\n    .#{$pluginPrefix}-after-label { opacity: 1; }\n    .#{$pluginPrefix}-before-label { opacity: 1; }\n  }\n}\n\n.#{$pluginPrefix}-before { z-index: 20; }\n.#{$pluginPrefix}-after { z-index: 10; }\n\n// 20/20 Handle Styles\n.#{$pluginPrefix}-handle {\n  height: $twenty20-handle-circle-width;\n  width: $twenty20-handle-circle-width;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -($twenty20-handle-circle-width/2) - $twenty20-handle-stroke;\n  margin-top: -($twenty20-handle-circle-width/2) - $twenty20-handle-stroke;\n  border: $twenty20-handle-stroke solid $twenty20-handle-color;\n  border-radius: $twenty20-handle-radius;\n  box-shadow: $twenty20-handle-box-shadow;\n  z-index: 40;\n  cursor: pointer;\n}\n\n// 20/20 Horizontal Handle Styles\n.#{$pluginPrefix}-horizontal .#{$pluginPrefix}-handle {\n\n  &:before {\n    @extend %handle-content;\n    @extend %handle-position-horizontal;\n    bottom: 50%;\n    margin-bottom: ($twenty20-handle-circle-width/2) + $twenty20-handle-stroke;\n    box-shadow: 0 $twenty20-handle-stroke 0 $twenty20-handle-color, $twenty20-handle-box-shadow;\n  }\n\n  &:after {\n    @extend %handle-content;\n    @extend %handle-position-horizontal;\n    top: 50%;\n    margin-top: ($twenty20-handle-circle-width/2) + $twenty20-handle-stroke;\n    box-shadow: 0 (-$twenty20-handle-stroke) 0 $twenty20-handle-color, $twenty20-handle-box-shadow;\n  }\n}\n\n// 20/20 Vertical Handle Styles\n.#{$pluginPrefix}-vertical .#{$pluginPrefix}-handle {\n\n  &:before {\n    @extend %handle-content;\n    @extend %handle-position-vertical;\n    left: 50%;\n    margin-left: ($twenty20-handle-circle-width/2) + $twenty20-handle-stroke;\n    box-shadow: $twenty20-handle-stroke 0 0 $twenty20-handle-color, $twenty20-handle-box-shadow;\n  }\n\n  &:after {\n    @extend %handle-content;\n    @extend %handle-position-vertical;\n    right: 50%;\n    margin-right: ($twenty20-handle-circle-width/2) + $twenty20-handle-stroke;\n    box-shadow: (-$twenty20-handle-stroke) 0 0 $twenty20-handle-color, $twenty20-handle-box-shadow;\n  }\n}\n\n// 20/20 Left Handle\n.#{$pluginPrefix}-left-arrow {\n  border-right: $twenty20-handle-triangle-size solid $twenty20-handle-triangle-color;\n  left: 50%;\n  margin-left: -($twenty20-handle-triangle-size * 2) - $twenty20-handle-triangle-position;\n  @extend %css-triangle-horizontal;\n}\n\n// 20/20 Right Handle\n.#{$pluginPrefix}-right-arrow {\n  border-left: $twenty20-handle-triangle-size solid $twenty20-handle-triangle-color;\n  right: 50%;\n  margin-right: -($twenty20-handle-triangle-size * 2) - $twenty20-handle-triangle-position;\n  @extend %css-triangle-horizontal;\n}\n\n// 20/20 Up Handle\n.#{$pluginPrefix}-up-arrow {\n  border-bottom: $twenty20-handle-triangle-size solid $twenty20-handle-triangle-color;\n  top: 50%;\n  margin-top: -($twenty20-handle-triangle-size * 2) - $twenty20-handle-triangle-position;\n  @extend %css-triangle-vertical;\n}\n\n// 20/20 Down Handle\n.#{$pluginPrefix}-down-arrow {\n  border-top: $twenty20-handle-triangle-size solid $twenty20-handle-triangle-color;\n  bottom: 50%;\n  margin-bottom: -($twenty20-handle-triangle-size * 2) - $twenty20-handle-triangle-position;\n  @extend %css-triangle-vertical;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"twentytwenty-wrapper twentytwenty-{{orientation}}\"><div class=twentytwenty-container style=height:{{h}}px><img class=twentytwenty-before ng-src={{before}} style=\"clip: rect(0px, {{offset}}px, {{h}}px, 0px)\" ng-if=isHorizontal> <img class=twentytwenty-before ng-src={{before}} style=\"clip: rect(0px, {{w}}px, {{offset}}px, 0px)\" ng-if=!isHorizontal> <img class=twentytwenty-after src={{after}}><div class=twentytwenty-overlay><div class=twentytwenty-before-label></div><div class=twentytwenty-after-label></div></div><div class=twentytwenty-handle style=left:{{offset}}px ng-if=isHorizontal><span class=twentytwenty-left-arrow></span> <span class=twentytwenty-right-arrow></span></div><div class=twentytwenty-handle style=top:{{offset}}px ng-if=!isHorizontal><span class=twentytwenty-down-arrow></span> <span class=twentytwenty-up-arrow></span></div></div></div>";

/***/ }
/******/ ]);
//# sourceMappingURL=angular-twentytwenty.js.map