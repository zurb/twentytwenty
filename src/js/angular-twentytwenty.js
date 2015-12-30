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
        $scope.offsetPct = parseFloat($scope.offset) || 0.5;
        var $beforeImg = angular.element($element.find('img')[0]);
        $scope.isActive = false;

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
          $scope.isActive = true;
          adjustContainerOnSwipe(e);
        });

        $element.bind('mousemove touchmove', function(e) {
          if ($scope.isActive)
            TT.fireOnMovement(adjustContainerOnSwipe, e);
        });

        $element.bind('mouseup touchend', function(e) {
          $scope.isActive = false;
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
