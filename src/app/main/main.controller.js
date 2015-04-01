'use strict';

angular.module('myProject')
  .controller('MainCtrl', function ($scope) {
    $scope.cards = [
      {
        'id': 1,
        'name': 'name1',
        'image': 'assets/images/gulp.png',
        'phone': '111 11 11'
      },
      {
        'id': 2,
        'name': 'name2',
        'image': 'assets/images/gulp.png',
        'phone': '222 22 22'
      },
      {
        'id': 3,
        'name': 'name3',
        'image': 'assets/images/gulp.png',
        'phone': '333 33 33'
      },
      {
        'id': 4,
        'name': 'name4',
        'image': 'assets/images/gulp.png',
        'phone': '444 44 44'
      },
      {
        'id': 5,
        'name': 'name5',
        'image': 'assets/images/gulp.png',
        'phone': '555 55 55'
      },
      {
        'id': 6,
        'name': 'name6',
        'image': 'assets/images/gulp.png',
        'phone': '666 66 66'
      },
      {
        'id': 7,
        'name': 'name7',
        'image': 'assets/images/gulp.png',
        'phone': '777 77 77'
      },
    ];

    $scope.getItems = function(){
      return $scope.cards;
    }

    $scope.selectCard = function(item){
      console.log(item);
    }

  });
