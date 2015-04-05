angular.module('myProject').directive('jbCarousel',function($compile){
  return {
    priority: 11,
    restrict: 'E',

    controller: function ($scope) {

      // Карусель крутится (true|false)
      $scope.do = true;

      $scope.stop = function(){
        $scope.do = false;
      };
      $scope.start = function(){
        $scope.do = true;
      };

    },
    scope: {
      items: "=jbItems"
      ,action: "&jbAction"

    },
    link: function($scope, $element, $attr, mainCtrl){

      var children = $element.children();
      var template = angular.element('<div  ng-repeat="item in items" ng-click="action({card:item})" ' +
      'ng-mouseover="stop()" ng-mouseleave="start()"></div>');
      template.append(children);
      $element.html('');
      $compile(template)($scope);
      $element.append(template);


      setInterval(function(){
        if ($scope.do){ // проверка, крутить ли дальше
          changeID();
        }
      },4500);

      function changeID(){
        $scope.$apply(function(){
          $scope.items.unshift($scope.items.pop());
        });

      }
    }
  };
});

