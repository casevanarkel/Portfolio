
angular.module('portfolioApp', ['ngAnimate'])

.controller('portfolioCtrl', function($timeout, $scope) {

  portfolioCtrl = this;

  this.appInitialized = false;

  this.initializeApp = function(){
    
    $timeout(function() {  
      portfolioCtrl.setAppInitialized(true);
    }, 1000);
    
  }

  this.setAppInitialized = function(boolean){
    this.appInitialized = boolean;
  }

  this.getAppInitialized = function(){
    return this.appInitialized;
  }

  //Run on page load
  this.initializeApp();

})

.directive('portfolioDirective', function() {
  return {
    templateUrl: './pages/portfolio.html'
  };
});
