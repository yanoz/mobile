function NavCtrl ($scope, $location, $http) {
  $http.defaults.useXDomain = true;

  $scope.loadSlots = function () {
        $location.url('/slots');
  };
    
  $scope.loadClubs = function () {
        $location.url('/clubs');
   };
    
   $scope.loadAccount = function () {
        $location.url('/account');
   };
    
};



function SlotsCtrl ($scope, $location, $http) {
	 $http.defaults.useXDomain = true;
    
};

function ClubsCtrl ($scope, $http) {
	 $http.defaults.useXDomain = true;
};

function AccountCtrl ($scope, $http) {
	 $http.defaults.useXDomain = true;
};