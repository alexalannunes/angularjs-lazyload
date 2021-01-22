const app = angular.module("app", ["ngRoute", "oc.lazyLoad"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      controller: "homeCtrl",
      templateUrl: "./views/home.html",
      resolve: {
        // Any property in resolve should return a promise and is executed before the view is loaded
        loadMyCtrl: [
          "$ocLazyLoad",
          function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load("./views/home.js");
          },
        ],
      },
    })
    .when("/", {
      controller: "mainCtrl",
      templateUrl: "./views/main.html",
    });
});

app.controller("main", function ($scope) {
  $scope.title = "Usando $ocLazyLoad";
});
