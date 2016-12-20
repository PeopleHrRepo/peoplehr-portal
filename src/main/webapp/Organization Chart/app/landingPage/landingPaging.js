app=angular.module("landingPage",[]);
app.controller("myCtrl",function($scope,$http) {
   
       
         $http({
                method :"GET",
                url : "employees.json"
                }).then(function mySucces(response) {
                $scope.employees = response.data.employees;
               
                }, function myError(response) {
                $scope.employees = response.statusText;
                });
     
    $scope.displayEmployee=function(current) {
//        console.log(current.EmpId)
//        alert("Hi, Your Employee ID is  "+current.EmpId);
         window.location = "../workinfo/employee_info.html";
    }
    
   $scope.displayEforms = function(){
//  window.location = "#/testing.html";
 // $location.url('/testing.html');     
       
 window.location = "#/test.html";
}
   
});