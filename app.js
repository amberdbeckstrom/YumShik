 var yumShik = angular.module('yumShik', ["ui.router"])
    yumShik.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/home")
      
      $stateProvider
        .state('kimchi', {
            url: "/kimchi",
            templateUrl: "kimchi.html"
        })
          // .state('route1.list', {
          //     url: "/list",
          //     templateUrl: "route1.list.html",
          //     controller: function($scope){
          //       $scope.items = ["A", "List", "Of", "Items"];
          //     }
          // })
          
        .state('kalbi', {
            url: "/kalbi",
            templateUrl: "kalbi.html"
        })
          // .state('route2.list', {
          //     url: "/list",
          //     templateUrl: "route2.list.html",
          //     controller: function($scope){
          //       $scope.things = ["A", "Set", "Of", "Things"];
          //     }
          // })

          .state('home', {
              url: "/home",
              templateUrl: "home.html"
          })




    })