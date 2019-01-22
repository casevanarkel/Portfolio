
(function() {

  var portfolioApp = angular.module('portfolioApp', ['ngAnimate'])

  ///////////////////////ALL OBJECT ELEMENTS (Model in MVC)/////////////////////////
  //Portfolio objects and items management
  portfolioApp.directive ('portfolioDirective', function ($timeout){
    return {
      restrict: 'A',
        controller: function($scope, $http) {

            portfolioCtrl = this;

            //States: loading, nav, about, work, null
            this.appState = 'loading';

            this.setAppState = function(state){
              
              this.appState = null;

              var newState = state;

              //Delay correspondences with CSS transition time for Work and About containers hiding and showing, so container showing doesn't overlap
              $timeout(function() {
                portfolioCtrl.appState = newState;
              }, 250);

            }

            this.getAppState = function(){
              return this.appState;
            }

        },
        controllerAs: "portfolioCtrl"// end controller
    };
  });

  ///////////////////////ALL HTML ELEMENTS (View in MVC)/////////////////////////
  //Nav
  portfolioApp.directive ('nav', function (){
      return {
          restrict: 'E',
          templateUrl: './pages/angular/nav.html',
          controller: function($scope, $timeout) {
              navCtrl = this;

              this.show = function(){
                  angular.element(function () {
                    $scope.$apply(function(){ 
                        portfolioCtrl.setAppState('nav'); 
                    });
                  });
              }

              //Run on page load
              this.show();   

          },
          controllerAs: "navCtrl"// end controller
      };
  });

  //About view
  portfolioApp.directive ('about', function (){
      return {
          restrict: 'E',
          templateUrl: './pages/angular/about.html',
          controller: function($scope, $timeout) {
              aboutCtrl = this;

              this.show = function() {
                //Case's code to play the intro video and inject the first two middle videos
                $(".nav-container").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    
                    alert('nav transition has ended!');
                    
                });
              }

              //Run on page load
              this.show();

          },
          controllerAs: "aboutCtrl"// end controller
      };
  });

  //Work view
  portfolioApp.directive ('work', function (){
      return {
          restrict: 'E',
          templateUrl: './pages/angular/work.html',
          controller: function($scope, $timeout) {
              workCtrl = this;

              //Sub states to control Work view
              //Possible states: overview, adaptedmind, rocketlawyer
              this.workState = 'overview';

              this.setWorkState = function(state){
                this.workState = state;
              }

              this.getWorkState = function(){
                return this.workState;
              }        

          },
          controllerAs: "workCtrl"// end controller
      };
  });

})(); 
