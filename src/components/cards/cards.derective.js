angular.module('myProject').directive('jbCarousel',function($parse){
  return {
    priority: 11,
    restrict: 'E',

    controller: function ($scope) {

    },
    template: [
    '<div ng-repeat="item in items track by $index" ng-click="action({item:item})" class="cards card{{item.id}}">',
      '<div class="card_main">',
        '<div class="card_photo">',
          '<img align="absmiddle" ng-src="{{item.image}}"/>',
        '</div>',
        '<div class="card_title">',
          '{{item.name}}',
        '</div>',
      '</div>',
      '<div class="card_bottom">',
        '<div class="card_tel">{{item.phone}}</div>',
      '</div>',
    '</div>'
    ].join(''),
    scope: {
      items: "=jbItems"
      ,action: "&jbAction"
    },
    link: function($scope, $element, $attr, mainCtrl){

      setInterval(function(){

        changeID();

      },4500);

      function changeID2(){
        $scope.items.unshift($scope.items.pop);
        delete $scope.items[$scope.items.length-1];
        console.log(1);
      }

      function changeID(){
        var itemsLen = $scope.items.length;

        for(var i=0; i< itemsLen; i++){
          var current = angular.element(document.querySelector('.card'+$scope.items[i].id));
          current.removeClass('card'+$scope.items[i].id);
          if ($scope.items[i].id >= itemsLen){
            $scope.items[i].id = 1;
          }else{
            $scope.items[i].id += 1;
          }
          current.addClass('card'+$scope.items[i].id);
          console.log(i);
        }
        setTimeout(0);
      }

    }
  };
});