
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
              
              if(this.appState != state){

                this.appState = null;

                var newState = state;

                //Delay correspondences with CSS transition time for Work and About containers hiding and showing, so container showing doesn't overlap
                $timeout(function() {
                  portfolioCtrl.appState = newState;
                }, 250);

              } else {
                //Do nothing
              }

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
          controller: function($scope, $timeout, $document) {
              navCtrl = this;


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

              this.show = function(){
                //When the about element in the document has loaded, hide the loading animation and show the nav, then about
                angular.element(document).ready(function () {
                    portfolioCtrl.setAppState('nav'); 
                     //Using timeout corresponding to css transition time for nav container because for page load jQuery .on transitionEnd is unreliable
                    $timeout(function() {
                      portfolioCtrl.setAppState('about');
                    }, 1500);
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

              ////// Vimeo player /////
              var video = $('#video-mobile');
              var player = new Vimeo.Player(video);

              player.on('play', function() {
                  //console.log('Played the video');
              });

              player.on('ended', function() {
                  //console.log('Finished the video');
              });

              player.on('loaded', function() {
                  //console.log('Loaded the video');
              });

              player.on('bufferstart', function() {
                  console.log('bufferstart the video');
                  //$('#loading').show();
                  
              });

              player.on('bufferend', function() {
                  console.log('bufferend the video');
                  $//('#loading').hide();              
              });

              this.hoverPlay = function() {
                video.hover(this.playVideo, this.pauseVideo);
              }

              this.playVideo = function() {
                player.play();
              }
              
              this.pauseVideo = function() {
                player.pause();
              }

          },
          controllerAs: "workCtrl"// end controller
      };
  });

})(); 
