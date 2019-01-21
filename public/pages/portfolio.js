
angular.module('portfolioApp', ['ngAnimate'])

.controller('portfolioCtrl', function($timeout, $scope) {

  portfolioCtrl = this;

  //States: loading, about, work
  this.appState = 'loading';

  this.initializeApp = function(){
    
      alert('made it in initializeApp');

      //After the window has loaded completely
      window.addEventListener("load", function(){

        alert('made it in window.load');

          //Set the app state to 'about'
          $scope.$apply(function(){ 

            alert('made it in $scope.apply');

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

  alert('made it here!');

  //Run on page load
  this.initializeApp();

});

.directive('portfolioDirective', function() {
  return {
    templateUrl: './pages/portfolio.html'
  };
});
