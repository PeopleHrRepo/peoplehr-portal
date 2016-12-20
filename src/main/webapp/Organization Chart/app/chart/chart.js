
angular.module("chart",[]);
angular.module("chart",[])
.controller("ctrl",function($scope,$http){
   
     
    
    

         $http({
                method :"GET",
                url : "employees.json"
                }).then(function mySucces(response) {
                $scope.employees = response.data.employees;
              
                }, function myError(response) {
                $scope.employees = response.statusText;
              
                }); 
     $http({
                method :"GET",
                url : "images.json"
                }).then(function mySucces(response) {
                $scope.profile = response.data.profile;
              
                }, function myError(response) {
                $scope.profile= response.statusText;
              
                });
    
     $http({
                method :"GET",
                url : "data.json"
                }).then(function mySucces(response) {
                $scope.pics = response.data.pics;
              
                }, function myError(response) {
                $scope.pics= response.statusText;
              
                });
    var jsondata = null;
     $http({
                method :"GET",
                url : "json/data1.json"
                }).then(function mySucces(response) {
                jsondata = response.data;
                $scope.cart1 = jsondata.back5;
       
             
                }, function myError(response) {
                $scope.pics= response.statusText;
              
                });

    
    $scope.showimage1=false;
 
   
    
    $scope.getdata5=function(){
       if(jsondata.back5!=null){
              $scope.cart1 = jsondata.back5;
       
             $scope.showimage1=true;
        
    }
    }
  
 
    $scope.getdata2=function(){
        
        if(jsondata.back2!=null){
        $scope.cart1 =jsondata.back2;
           
            
         $scope.showimage1=true;
        }
        else{
           $scope.pics= response.statusText;  
        }
    }
     
    $scope.getdata3=function(){
        
       
          $scope.cart1 =jsondata.back3;
       
         $scope.showimage1=true;  
           
        
    }
    
    $scope.getdata4=function(){
           
             $scope.cart1 =jsondata.back4;
             $scope.showimage1=true; 
        
    }
     $scope.getdata1=function(){
           
             $scope.cart1 =jsondata.back1;
             $scope.showimage1=true; 
        
    }
    
    
    
      $scope.getdata6=function(){
           
             $scope.cart1 =jsondata.back6;
             $scope.showimage1=true; 
        
    }
    
    
    
       $scope.getdata7=function(){
           
             $scope.cart1 =jsondata.back7;
             $scope.showimage1=true; 
        
    }
    
    
    
        $scope.getdata8=function(){
           
             $scope.cart1 =jsondata.back8;
             $scope.showimage1=true; 
        
    }
    
    
     $scope.getdata9=function(){
           
             $scope.cart1 =jsondata.back9;
             $scope.showimage1=true; 
        
    }
    
    

 
    $scope.viewAllEmployees=function() {
        window.location="../landingPage/landingPage.html";
    }
    
    $scope.viewPersonal=function() {
        window.location="../workinfo/employee_info.html";
    }
    
    $scope.viewWorkInfo=function() {
        window.location="../workinfo/workInfo.html";
    }
    
        
     
    
});










