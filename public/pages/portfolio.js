
(function() {

  var portfolioApp = angular.module('portfolioApp', ['ngAnimate'])

  ///////////////////////ALL OBJECT ELEMENTS (Model in MVC)/////////////////////////
  //Portfolio objects and items management
  portfolioApp.directive ('portfolioDirective', function ($timeout){
    return {
      restrict: 'A',
        controller: function($scope, $http) {

            portfolioCtrl = this;

            //States: loading, about, work
            this.appState = 'loading';

            this.setAppState = function(state){
              this.appState = state;
            }

            this.getAppState = function(){
              return this.appState;
            }

        },
        controllerAs: "portfolioCtrl"// end controller
    };
  });

  ///////////////////////ALL HTML ELEMENTS (View in MVC)/////////////////////////
  //About view
  portfolioApp.directive ('aboutDirective', function (){
      return {
          restrict: 'E',
          templateUrl: './pages/about.html',
          controller: function($scope, $timeout) {
              aboutCtrl = this;
              
              /*
              //Show the modal after the window has loaded
              this.show = function(){
                  
                window.addEventListener("load", function(){;

                    //Set the app state to 'about'
                    $scope.$apply(function(){ 

                        portfolioCtrl.setAppState('about'); 
                    });

                });
                      
              }*/

              this.show = function(){
                  
                  $timeout(function() {
                    portfolioCtrl.setAppState('about');
                  }, 2000);
                      
              }

              //Run on page load
              this.show();

          },
          controllerAs: "aboutCtrl"// end controller
      };
  });


})(); 
