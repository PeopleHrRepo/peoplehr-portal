







var myapp=angular.module("EmployeeApp",[]);
myapp.controller("EmployeeController",function($scope,$http){
    $scope.names = [ "2016","2015", "2014", "2013"];
    
 
    $http({
        
        method : "GET",
        url : "statement.json"
    }).then(function mySucces(response) {
        $scope.statement = response.data.statement;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});





