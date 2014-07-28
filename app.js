 var yumShik = angular.module('yumShik', ["ui.router"])
    yumShik.config(function($stateProvider, $urlRouterProvider){
      
     



      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("views/home")
      
      $stateProvider
        .state('kimchi', {
            url: "/kimchi",
            templateUrl: "views/kimchi.html"
        })
          .state('kimchi.more', {
              url: "/more",
              templateUrl: "views/kimchi.more.html",
              // controller: function($scope){
              //   $scope.items = ["A", "List", "Of", "Items"];
              // }
          })
          
        .state('kalbi', {
            url: "/kalbi",
            templateUrl: "views/kalbi.html"
        })
          .state('kalbi.more', {
              url: "/more",
              templateUrl: "views/kalbi.more.html",
          //     controller: function($scope){
          //       $scope.things = ["A", "Set", "Of", "Things"];
          //     }
          // })

          .state('home', {
              url: "/home",
              templateUrl: "views/home.html"
          })




    })