app=angular.module("workinfo",[]);
app.controller("workinfoCtrl",function($scope,$http,$location) {
   
       
         $http({
                method :"GET",
                url : "employees.json"
                }).then(function mySucces(response) {
                $scope.employees = response.data.employees;
               
                }, function myError(response) {
                $scope.employees = response.statusText;
                });
    
    $scope.showPersonal=true;
    $scope.showWorkInfo=false;
    
     
    $scope.displayEmployee=function(current) {
        console.log(current.EmpId)
        alert("Hi, Your Employee ID is  "+current.EmpId);
        
    }
    
    
//    $scope.displayWorkInfo=function() {
//        $location.url("workinfo.html");
//    }
//    
    
    $scope.displayPersonal=function() {
        
          window.location="employee_info.html";
    }
    
    $scope.displayWorkInfo=function() {
//        $scope.showPersonal=false;
//        $scope.showWorkInfo=true;
        window.location="workInfo.html";
        
    }
    
    
    $scope.viewOrganizationChart=function() {
    window.location="../chart/chart.html";
    }
    
    $scope.viewPersonal=function() {
    window.location="../landingPage/landingPage.html";
    }
    
    
//    
//    $scope.displayPersonal=function() {
//        $scope.showPersonal=true;
//        $scope.showWorkInfo=false;
//        
//    
//    }
});
        
        
        
//        var employees=[
//      {
//      "EmpId":"0000123685",
//      "EmployeeName":"Abbott, Tony",
//      "Position":"Analyst",
//      "Status":"Active",
//      "Department":"Consultant",
//      "Locations":"Belmont,CA",
//      "ServiceDate":"02/06/2015",
//      "DirectManager":"Blaire, Jen"
//    },
//    {
//      "EmpId":"0000123247",
//      "EmployeeName":"Adam, Lynn",
//      "Position":"Sr. Admin Assistant",
//      "Status":"Active",
//      "Department":"IT",
//      "Locations":"Belmont,CA",
//      "ServiceDate":"02/06/2015",
//      "DirectManager":"Blaire, Jen"
//    },
//    {
//      "EmpId":"0000122158",
//      "EmployeeName":"Blaire, Jen",
//      "Position":"Sr. Director",
//      "Status":"Active",
//      "Department":"Consultant",
//      "Locations":"Belmont,CA",
//      "ServiceDate":"02/06/2015",
//      "DirectManager":"Clark, Paul"
//    },
//    {
//      "EmpId":"0000129653",
//      "EmployeeName":"Caly, Fred",
//      "Position":"Operation Manager",
//      "Status":"Active",
//      "Department":"Operation",
//      "Locations":"Belmont,CA",
//      "ServiceDate":"02/06/2015",
//      "DirectManager":"McDoland, Wim"
//    },
//    {
//      "EmpId":"0000127758",
//      "EmployeeName":"Cane, Mark",
//      "Position":"Sales Manager",
//      "Status":"Active",
//      "Department":"Sales",
//      "Locations":"Belmont,CA",
//      "ServiceDate":"02/06/2015",
//      "DirectManager":"Blaire, Jen"
//    },
//    {
//      "EmpId":"0000121269",
//      "EmployeeName":"Edwin, Stward",
//      "Position":"Sales",
//      "Status":"Active",
//      "Department":"Sales",
//      "Locations":"Belmont,CA",
//      "ServiceDate":"02/06/2015",
//      "DirectManager":"Blaire, Jen"
//    },
//    {
//      "EmpId":"0000123685",
//      "EmployeeName":"Jeffery, Kim",
//      "Position":"Marketing",
//      "Status":"Active",
//      "Department":"Marketing",
//      "Locations":"Belmont,CA",
//      "ServiceDate":"02/06/2015",
//      "DirectManager":"Blaire, Jen"
//    },
//    {
//      "EmpId":"0000123685",
//      "EmployeeName":"Krevin, Paul",
//      "Position":"Operations",
//      "Status":"Active",
//      "Department":"Operation",
//      "Locations":"Belmont,CA",
//      "ServiceDate":"02/06/2015",
//      "DirectManager":"Blaire, Jen"
//    },
//    {
//      "EmpId":"0000123685",
//      "EmployeeName":"Lynn, Martin",
//      "Position":"Operations",
//      "Status":"Active",
//      "Department":"Customer Service",
//      "Locations":"Belmont,CA",
//      "ServiceDate":"02/06/2015",
//      "DirectManager":"Blaire, Jen"
//    }
//
//  ];
//    
//    $scope.employees=employees;
//        
//        
//        
//        //console.log(employees[1].EmployeeName);
//    });