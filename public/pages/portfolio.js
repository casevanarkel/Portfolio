
angular.module('portfolioApp', ['ngAnimate'])

.controller('portfolioCtrl', function($timeout, $scope) {

  portfolioCtrl = this;

  //States: loading, about, work
  this.appState = 'loading';

  this.initializeApp = function(){
    
      //After the window has loaded completely
      window.addEventListener("load", function(){

          //Set the app state to 'about'
          $scope.$apply(function(){ 
              portfolioCtrl.setAppState('about'); 
          });

      });
    
  }

  this.setAppState = function(state){
    this.appState = state;
  }

  this.getAppState = function(){
    return this.appState;
  }

  //Run on page load
  this.initializeApp();

})

.directive('portfolioDirective', function() {
  return {
    templateUrl: './pages/portfolio.html'
  };
});
