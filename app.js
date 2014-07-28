 var yumShik = angular.module('yumShik', ["ui.router"])
    yumShik.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/home")
      
      $stateProvider
        .state('kimchi', {
            url: "/kimchi",
            templateUrl: "kimchi.html"
        })
          .state('kimchi.more', {
              url: "/more",
              templateUrl: "kimchi.more.html",
              // controller: function($scope){
              //   $scope.items = ["A", "List", "Of", "Items"];
              // }
          })
          
        .state('kalbi', {
            url: "/kalbi",
            templateUrl: "kalbi.html"
        })
          .state('kalbi.more', {
              url: "/more",
              templateUrl: "kalbi.more.html",
              // controller: function($scope){
              //   $scope.things = ["A", "Set", "Of", "Things"];
              // }
          })

            .state('jjamppong', {
            url: "/jjamppong",
            templateUrl: "jjamppong.html"
        })
          .state('jjamppong.more', {
              url: "/more",
              templateUrl: "jjamppong.more.html",
              // controller: function($scope){
              //   $scope.items = ["A", "List", "Of", "Items"];
              // }
          })

            .state('jjajangmeon', {
            url: "/jjajangmeon",
            templateUrl: "jjajangmeon.html"
        })
          .state('jjajangmeon.more', {
              url: "/more",
              templateUrl: "jjajangmeon.more.html",
              // controller: function($scope){
              //   $scope.items = ["A", "List", "Of", "Items"];
              // }
          })


          .state('home', {
              url: "/home",
              templateUrl: "home.html"
          })




    })


