// var BT = {};
// BT.fbAppId = '559892864037339';
// var app = angular.module('tennis-me', ['$strap.directives']);
var app = angular.module('tennis-me', ['$strap.directives']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/slots', {templateUrl: 'partials/slots.html',   controller: 'SlotsCtrl'}).
      when('/clubs', {templateUrl: 'partials/clubs.html',   controller: 'ClubsCtrl'}).
      when('/account', {templateUrl: 'partials/account.html',   controller: 'AccountCtrl'}).
      otherwise({redirectTo: '/slots'});
}]);



// app.run(function($rootScope,Facebook) { 
//     (function(d){
//         var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
//         if (d.getElementById(id)) {
//             return;
//         }
//         js = d.createElement('script');js.id = id;js.async = true;
//         js.src = "http://connect.facebook.net/it_IT/all.js";
//         ref.parentNode.insertBefore(js, ref);
//     }(document));
//     window.fbAsyncInit = function() {
//         FB.init({
//             appId      : BT.fbAppId, // App ID
//             status     : true, // check login status
//             cookie     : true, // enable cookies to allow the server to access the session
//             xfbml      : true  // parse XFBML
//         });
//         $rootScope.fbLogin = Facebook.fbLogin;
//     };
    
// });
// app.factory('Facebook', function () {
//    function fbLogin(callback){
//        FB.login(function(response) {
//         if (response.status==='connected') {
//             var uid = response.authResponse.userID;
//             callback(response.authResponse);
//         }
//         },
//         {scope:'email'});
//    }
//    return {
//        fbLogin : fbLogin
//    }
// });




// Docs styles
//
$(function() {
  $("html").removeClass("no-js").addClass("js");
  var $window = $(window);
  new FastClick(document.body);
  $(document).ready(function($) {
    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault();
    });
    // Make code pretty
    window.prettyPrint && window.prettyPrint();
  });
});