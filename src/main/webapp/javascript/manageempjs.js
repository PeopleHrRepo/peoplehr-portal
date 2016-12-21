// /**
//  * Created by J user on 12/13/2016.
//  */
//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
var modal1=document.getElementById('myModal1');
var btnmodal=document.getElementById('sub');
var span1=document.getElementsByClassName("close1")[0];
btnmodal.onclick = function() {
    modal1.style.display = "block";
}
span1.onclick = function() {
    modal1.style.display = "none";
}

var endpay=document.getElementById('endpay');
var span4=document.getElementsByClassName("close4")[0];
span4.onclick = function() {
    endpay.style.display = "none";
}

var endpay1=document.getElementById('endpay1');
var span5=document.getElementsByClassName("close5")[0];
span5.onclick = function() {
    endpay1.style.display = "none";
}
var endpaysucess=document.getElementById("endpaysucess");
var span5=document.getElementsByClassName("endclose")[0];
span5.onclick = function() {
    endpaysucess.style.display = "none";
}
var es=document.getElementById("endpaysucess");
var modal = document.getElementById('myModal');
var btn = document.getElementById("alignright");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
var modal2=document.getElementById('myModal2');
var span2=document.getElementsByClassName("close2")[0];
span2.onclick = function() {
    modal2.style.display = "none";
}
var ce=document.getElementById("clickend");
var spanend = document.getElementsByClassName("closeend")[0];
spanend.onclick = function() {
    ce.style.display = "none";
}
var modalret = document.getElementById('myModalret');

// Get the button that opens the modal
var btn = document.getElementById("myBtn_ret");
var enroll=document.getElementById("enr");
var cancel=document.getElementById("cancel");
console.log(btn);

// Get the <span> element that closes the modal
var spanret = document.getElementsByClassName("closeret")[0];
// When the user clicks the button, open the modal
function display(){
    modalret.style.display = "block";
}
spanret.onclick = function() {
    modalret.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modalret.style.display = "none";
    }
}

enr.onclick=function(){
    modalret.style.display = "none";
}
cancel.onclick=function(){
    modalret.style.display = "none";
}




var app=angular.module("myApp",['ngMaterial','ngMessages']);
app.controller("myCtrl",function($scope,$http,$filter,$timeout) {
    $http.get("javascript/moneyinfo").then(function (response) {
        $scope.empdetails = response.data.transaction;

    });
    $http({
        method : "GET",
        url : 'javascript/employees.json'
    }).then(function mySucces(response) {
        $scope.employees = response.data.employees;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
    $scope.names = [ "2016","2015", "2014", "2013"];


    $http({

        method : "GET",
        url : "javascript/statement.json"
    }).then(function mySucces(response) {
        $scope.statement = response.data.statement;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });

    // Home Page

    $scope.main=true;
    $scope.emps=true;
    $scope.person = false;
    $scope.location= false;
    $scope.deptinf = false;
    $scope.isPersonal=false;
    $scope.mainpage = function(){
        $scope.main=true;
        $scope.emps=true;
        $scope.person = false;
        $scope.location= false;
        $scope.deptinf = false;
        $scope.isPersonal=false;
        $scope.payment= false;
        $scope.isMoney=false;
    }
    $scope.employee=function(){
        $scope.emps=true;
        $scope.deptinf = false;
        $scope.location= false;
        $scope.person = false;
        $scope.isPersonal = false;
    }
    $scope.deptinfo = function(){
        $scope.deptinf = true;
        $scope.emps=false;
        $scope.location = false;
    }
    $scope.locations = function(){
        $scope.location = true;
        $scope.emps = false;
        $scope.deptinf = false;
    }
    $scope.eforms = function(){
        $scope.location = false;
        $scope.emps = false;
        $scope.deptinf = false;
    }
    $scope.empinfo=function(){
        $scope.main = false;
        $scope.person =true;
        $scope.emps = false;
        $scope.isPersonal = true;

    }
    $scope.personal=function(){
        $scope.main = false;
        $scope.person=true;
        $scope.isPersonal =true;
        $scope.emps = false;
        $scope.payment= false;

    }
    $scope.enddate=new Date();

    $scope.onChange=function(index,emp) {
        ce.style.display="none";
        endpay.style.display = "block";
        emp.goalAmount = "N/A";
        $scope.emp1 = emp;
    }
    $scope.clickChange=function(index,emp) {
        ce.style.display="none";
        endpay1.style.display = "block";
        emp.goalAmount = "N/A";
        $scope.emp2 = emp;
    }


    $scope.personal = function () {
        $scope.isPersonal=true;
        $scope.isWork=false;
        $scope.isMoney=false;
        $scope.isTimeoff=false;
        $scope.isBenefits=false;
        $scope.isRoles=false;
        $scope.isEform=false;
    }
    $scope.workinfo=function() {
        $scope.isPersonal=false;
        $scope.isWork=true;
        $scope.isMoney=false;
        $scope.isTimeoff=false;
        $scope.isBenefits=false;
        $scope.isRoles=false;
        $scope.isEform=false;
    }
    $scope.money=function() {
        $scope.isPersonal=false;
        $scope.isWork=false;
        $scope.isMoney=true;
        $scope.isTimeoff=false;
        $scope.isBenefits=false;
        $scope.isRoles=false;
        $scope.isEform=false;
    }
    $scope.timeoff=function() {
        $scope.isPersonal=false;
        $scope.isWork=false;
        $scope.isMoney=false;
        $scope.isTimeoff=true;
        $scope.isBenefits=false;
        $scope.isRoles=false;
        $scope.isEform=false;
    }
    $scope.benefits=function() {
        $scope.isPersonal=false;
        $scope.isWork=false;
        $scope.isMoney=false;
        $scope.isTimeoff=false;
        $scope.isBenefits=true;
        $scope.isRoles=false;
        $scope.isEform=false;
    }
    $scope.roles=function() {
        $scope.isPersonal=false;
        $scope.isWork=false;
        $scope.isMoney=false;
        $scope.isTimeoff=false;
        $scope.isBenefits=false;
        $scope.isRoles=true;
        $scope.isEform=false;
    }
    $scope.eform=function() {
        $scope.isPersonal = false;
        $scope.isWork = false;
        $scope.isMoney = false;
        $scope.isTimeoff = false;
        $scope.isBenefits = false;
        $scope.isRoles = false;
        $scope.isEform = true;
    }
    $scope.newpay=function(emp) {
        modal.style.display = "none";
        $scope.emp.status="On Going";
        $scope.emp.begindate= $filter('date')(emp.begindate, 'MM/dd/yyyy');
        $scope.emp.enddate=$filter('date')(emp.enddate, 'MM/dd/yyyy');
        if(!$scope.emp.enddate) {
            $scope.emp.enddate="NoEndDate";
        }
        $scope.emp.earnamount=$filter('currency')(emp.earnamount,'$');
        $scope.empdetails.splice(0,0,emp);
        $scope.emp="";

    }

    $scope.enddate=new Date();
    $scope.endpayment=function(emp1,index) {
        endpaysucess.style.display="block";
        endpay.style.display = "none";
        $scope.emp1.status="Ended";
        if($scope.enddate=='NoEndDate') {
            $scope.enddate=$filter('date')(new Date(), 'MM/dd/yyyy');
        }
        else {
            $scope.enddate=$filter('date')($scope.enddate, 'MM/dd/yyyy');
        }
        $scope.emp1.enddate=$scope.enddate;
        $scope.empdetails[index].push(emp1);
        $scope.enddate=new Date();
    }
    $scope.endpayment1=function(emp2,index) {
        endpaysucess.style.display="block";
        endpay1.style.display = "none";
        $scope.emp2.status="Ended";
        if($scope.enddate=='NoEndDate') {
            $scope.enddate=$filter('date')(new Date(), 'MM/dd/yyyy');
        }
        else {
            $scope.enddate=$filter('date')($scope.enddate, 'MM/dd/yyyy');
        }
        $scope.emp2.enddate=$scope.enddate;
        $scope.empdetails[$scope.rowno].status= $scope.emp2.status;
        $scope.empdetails[$scope.rowno].enddate= $scope.enddate;
        $scope.enddate=new Date();
    }

    $scope.showdetails=function(emp,index) {
        $scope.rowno=index;
        $scope.datesubmitted=emp.enddate;
        $scope.submittedby="Y.N.Here";
        $scope.subject="Jen Blaire";
        $scope.action="End";
        $scope.goalAmount="N/A";

        $scope.company="31T";
        $scope.PFClient="0417";
        $scope.begindate=emp.begindate;
        $scope.earnamount=emp.earnamount;
        $scope.payfrequency=emp.payfrequency;
        $scope.earntype=emp.earntype;
        $scope.enddate=emp.enddate;

        if(emp.status=='Ended') {
            modal2.style.display = "block";
        }
        else if(emp.status=='On Going'){
            $scope.emp2={};
            $scope.emp2.begindate=emp.begindate;
            $scope.emp2.earnamount=emp.earnamount;
            $scope.emp2.payfrequency=emp.payfrequency;
            $scope.emp2.earntype=emp.earntype;
            $scope.emp2.enddate=emp.enddate;
                ce.style.display="block";
                $scope.rowno=index;
        }

    }


    //taxwith holding
    $scope.date = new Date();
    $scope.register=true;
    $scope.checker1=true;
    $scope.checker2=true;
    $scope.checker3=true;
    $scope.checker4=true;
    $scope.check1=false;
    $scope.check2=false;
    $scope.check3=false;
    $scope.check4=false;
    $scope.agreement=true;
    $scope.radio=true;
    $scope.radio1= true;
    $http.get("javascript/data.json").then(function(response){
        $scope.values1=response.data;

    });
    $scope.init=function(){
        $scope.count=0;
    }
    $scope.warning=function(){
        $scope.count=$scope.count+1;
        if($scope.count==1){
            $scope.error=true;
        }
        else{
            $scope.count= 0;
        }

    }
    $scope.ok=function(){
        $scope.error=false;
    }
    $scope.pass=function(e){
        if(e.target.value=="one"){
            $scope.radio=false;
            console.log("hello");
            $scope.checker1=false;
            $scope.checker3=false;
            $scope.checker2=true;
            $scope.checker4=true;
            $scope.check1=true;
            $scope.check3=true;
            $scope.check4=false;
            $scope.check2=false;

        }
        if(e.target.value=="two"){
            $scope.radio=false;
            $scope.checker2=false;
            $scope.checker4=false;
            $scope.checker1=true;
            $scope.checker3=true;
            $scope.check1=false;
            $scope.check3=false;
            $scope.check4=true;
            $scope.check2=true;
        }
    }
    $scope.pass1=function(e){
        if(e.target.value=="three"){
            $scope.radio1=false;
            console.log("hello");
            $scope.checker3=false;
            $scope.checker1=false;
            $scope.checker2=true;
            $scope.checker4=true;
            $scope.check1=true;
            $scope.check3=true;
            $scope.check4=false;
            $scope.check2=false;

        }
        if(e.target.value=="four"){
            $scope.radio1=false;
            $scope.checker2=false;
            $scope.checker4=false;
            $scope.checker3=true;
            $scope.checker1=true;
            $scope.check1=false;
            $scope.check3=false;
            $scope.check4=true;
            $scope.check2=true;
        }
    }
    $scope.calc=function(){

        $scope.prior1=$scope.amount-$scope.prior;
    }


    $scope.retire_reg=function(e){


        if($scope.agree==true){
            $scope.check();
        }
        else{
            $scope.register=true;
        }

    }
    $scope.check=function(){
        if(($scope.one==null && $scope.two==null && $scope.agree==false ) || ($scope.three==null && $scope.prior==null )){

            $scope.register=true;
        }
        else{
            $scope.register=false;
        }
    }
    $scope.enroll=function(){

        $timeout(function() {
            $scope.success = true;
        }, 2000);

    }

    $scope.close=function(){
        $scope.success=false;
    }
    $scope.viewdetails=function() {
        modalreceipt.style.display = "block";
    }


});
var modalreceipt=document.getElementById('myModalreceipt');
var btnmodalrec=document.getElementById('btnrec');
var spanreceipt=document.getElementsByClassName("closereceipt")[0];
btnmodalrec.onclick = function() {
    alert("sdnk");
    modalreceipt.style.display = "block";
}
spanreceipt.onclick = function() {
    modalreceipt.style.display = "none";
}
