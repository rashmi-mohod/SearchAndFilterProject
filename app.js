var app = angular.module('myApp', ['ngProgress']);
app.controller('myCtrl', function($scope, $http,$timeout, ngProgressFactory) {
    $scope.arr= [];
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.options = [
        { value: 'Default' },
        { value: 'firstName' },
        { value: 'LastName' },
        { value: 'Both' }
    ];
    $scope.filterValue = $scope.options[0];

    $scope.performSearch = function(){
        
        if($scope.filterValue.value == 'firstName'){
            $scope.progressbar.start();
            var url = "https://data.cityofnewyork.us/resource/5scm-b38n.json?first_name="+$scope.searchText;
            $http.get(url).then(function(response) {
                $scope.arr = response.data;
                console.log($scope.arr);
                $scope.progressbar.complete();
            });
        }
        else if($scope.filterValue.value == 'LastName'){
            $scope.progressbar.start();
            var url = "https://data.cityofnewyork.us/resource/5scm-b38n.json?last_name="+$scope.searchText;
            $http.get(url).then(function(response) {
                $scope.arr = response.data;
                console.log($scope.arr);
                $scope.progressbar.complete();
            });
        }
        else if($scope.filterValue.value == 'Both'){
            $scope.progressbar.start();
            var res = $scope.searchText.split(" ");
            var url = "https://data.cityofnewyork.us/resource/5scm-b38n.json?first_name="+res[0]+"&last_name="+res[1];
            $http.get(url).then(function(response) {
                $scope.arr = response.data;
                console.log($scope.arr);
                $scope.progressbar.complete();
            });
        }
        else{
                $scope.progressbar.start();
                $http.get("https://data.cityofnewyork.us/resource/5scm-b38n.json").then(function(response) {
                    $scope.arr = response.data;
                    console.log($scope.arr);
                    $scope.progressbar.complete();
                });
        }
    }
 
});