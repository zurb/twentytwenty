angular.module('tt', ['ngTouch'])
  .directive('twentytwenty', ['$window', function($window) {
    return {
      restrict: 'E',
      scope: {
        before: '@',
        after: '@'
      },
      template: function() {
        return '<div class="twentytwenty-wrapper twentytwenty-horizontal">' +
          '<div class="twentytwenty-container" style="height:{{h}}px">' +
            '<img class="twentytwenty-before" src="{{before}}" style="clip: rect(0px, {{x}}px, {{h}}px, 0px)">' +
            '<img class="twentytwenty-after" src="{{after}}">' +
            '<div class="twentytwenty-overlay">' +
              '<div class="twentytwenty-before-label"></div>' +
              '<div class="twentytwenty-after-label"></div>' +
            '</div>' +
            '<div class="twentytwenty-handle" style="left:{{x}}px">' +
              '<span class="twentytwenty-left-arrow"></span>' +
              '<span class="twentytwenty-right-arrow"></span>' +
            '</div>' +
          '</div>' +
        '</div>';
      },

      controller: ['$scope', '$swipe', '$element', function($scope, $swipe, $element) {
        var beforeImg = angular.element($element.find('img')[0]);
        var adjustContainer = function(h, x) {
          $scope.h = h;
          $scope.x = x;
          $scope.$apply();
        };

        var adjustContainerOnSwipe = function(e) {
          adjustContainer($scope.h, getXOffset(e));
        };

        var isThrottled = false;
        var adjustContainerOnSwipeThrottled = function(e) {
          if (isThrottled) return;
          isThrottled = true;
          setTimeout(function() {
            adjustContainerOnSwipe(e);
            isThrottled = false;
          }, 30);
        };

        var getXOffset = function(e) {
          return e.x - Math.abs($element[0].getBoundingClientRect().left);
        };

        var setDimensions = function() {
          $scope.w = beforeImg[0].offsetWidth;
          var x = $scope.w / 2;
          var h = beforeImg[0].offsetHeight;
          adjustContainer(h, x);
        };

        var adjustDimensions = function() {
          var newW = beforeImg[0].offsetWidth;
          var x = (newW / $scope.w) * $scope.x;
          var h = beforeImg[0].offsetHeight;
          $scope.w = newW;
          adjustContainer(h, x);
        };

        // Set dimensions if image is loaded, otherwise wait
        if (beforeImg[0].offsetHeight === 0) {
          beforeImg.bind('load', setDimensions);
        } else {
          setDimensions();
        }

        $swipe.bind($element, {
          start: adjustContainerOnSwipe,
          move: adjustContainerOnSwipeThrottled,
          end: adjustContainerOnSwipe
        });

        angular.element($window).bind('resize', function() {
          adjustDimensions();
          $scope.$apply();
        });
      }]
    };
  }]);
