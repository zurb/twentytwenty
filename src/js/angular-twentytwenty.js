require('../scss/twentytwenty.scss');
var TT = require('./core.js');

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
        return require('../template/angular.html');
      },

      controller: ['$scope', '$element', function($scope, $element) {
        $scope.orientation = $scope.orientation || 'horizontal';
        $scope.defaultOffsetPct = parseFloat($scope.offset) || 0.5;
        var $beforeImg = angular.element($element.find('img')[0]);
        var isActive = false;
        TT.setContainer($element[0]);
        TT.setOrientation($scope.orientation);
        TT.setOffsetPct($scope.defaultOffsetPct);

        var adjustContainer = function(w, h, xOffset, yOffset) {
          var offsetPct = TT.isHorizontal() ? (xOffset / $scope.w) : (yOffset / $scope.h);
          TT.setOffsetPct(offsetPct);
          $scope.w = w;
          $scope.h = h;
          $scope.offset = TT.isHorizontal() ? xOffset : yOffset;
          $scope.$apply();
        };

        var adjustContainerOnSwipe = function(e) {
          var offset = TT.calcOffset(e);
          var offsetPct = TT.isHorizontal() ? (offset.x / $scope.w) : (offset.y / $scope.h);
          TT.setOffsetPct(offsetPct);
          $scope.offset = TT.isHorizontal() ? offset.x : offset.y;
          $scope.$apply();
        };

        var setDimensions = function() {
          var d = TT.getDimensions($beforeImg);
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

        $scope.isHorizontal = TT.isHorizontal;
      }]
    };
  }]);
