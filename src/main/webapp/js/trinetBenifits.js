var t=angular.module("myApp",['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
t.controller("myCtrl",['$scope','$http', 'ngPopoverFactory', function($scope, $http, ngPopoverFactory){
	//Loading Json Data	
	$http.get("js/data.json").success(function(response){		
		//for headings		
		$scope.headings = response.headings;		
		angular.forEach($scope.headings,function(value){
			if(value.BenifitsPolicies != undefined){
				$scope.BenifitsPolicies = value.BenifitsPolicies;
			}
			if(value.BenifitsCarriers != undefined){
				$scope.BenifitsCarriers = value.BenifitsCarriers;
			}
			if(value.GeneralInformation != undefined){
				$scope.GeneralInformation = value.GeneralInformation;				
			}			
			if(value.OtherHealthPlans != undefined){
				$scope.OtherHealthPlans = value.OtherHealthPlans;				
			}
			if(value.OtherSupplementalPlans != undefined){
				$scope.OtherSupplementalPlans = value.OtherSupplementalPlans;
			}
			if(value.SummaryPlanDescription != undefined){
				$scope.SummaryPlanDescription = value.SummaryPlanDescription;
			}
			if(value.WhatsChangingMedicalSummary != undefined){
				$scope.WhatsChangingMedicalSummary = value.WhatsChangingMedicalSummary;
			}
			if(value.BenefitsAtAGlance != undefined){
				$scope.BenefitsAtAGlance = value.BenefitsAtAGlance;				
			}			
			if(value.CarrierCertificatesandSummaryofBenefitsandCoverages != undefined){
				$scope.CarrierCertificatesandSummaryofBenefitsandCoverages = value.CarrierCertificatesandSummaryofBenefitsandCoverages;				
			}
			if(value.Medical != undefined){
				$scope.Medical = value.Medical;
			}
			if(value.Dental != undefined){
				$scope.Dental = value.Dental;
			}
			if(value.Vision != undefined){
				$scope.Vision = value.Vision;
			}
			if(value.Life != undefined){
				$scope.Life = value.Life;				
			}			
			if(value.Disability != undefined){
				$scope.Disability = value.Disability;				
			}
			if(value.EmployeeAssistancePlan != undefined){
				$scope.EmployeeAssistancePlan = value.EmployeeAssistancePlan;
			}
			if(value.AnnualNotices != undefined){
				$scope.AnnualNotices = value.AnnualNotices;				
			}
			if(value.GeneralNotices != undefined){
				$scope.GeneralNotices = value.GeneralNotices;
			}
		});

		//for row1
		$scope.oneRow = response.rowOne;		
		angular.forEach($scope.oneRow,function(value){
			if(value.heading1 != undefined && value.para111 != undefined){
				$scope.heading1 = value.heading1;
				$scope.para111 = value.para111;
			}
			if(value.heading2 != undefined && value.para22 != undefined){
				$scope.heading2 = value.heading2;
				$scope.para22 = value.para22;
			}
			if(value.heading3 != undefined && value.para33 != undefined){
				$scope.heading3 = value.heading3;
				$scope.para33= value.para33;
			}
		});

		//for row2
		$scope.rowTwo = response.rowTwo;			
		angular.forEach($scope.rowTwo,function(value){
			if(value.heading4 != undefined && value.para44 != undefined){
				$scope.heading4 = value.heading4;
				$scope.para44 = value.para44;
			}
			if(value.heading5 != undefined && value.para55 != undefined){
				$scope.heading5 = value.heading5;
				$scope.para55 = value.para55;
			}
			if(value.heading6 != undefined && value.para66 != undefined){
				$scope.heading6 = value.heading6;
				$scope.para66 = value.para66;
			}
			if(value.heading7 != undefined && value.para77 != undefined){
				$scope.heading7 = value.heading7;
				$scope.para77 = value.para77;
			}
		});

		//for row3
		$scope.rowThree = response.rowThree;
		angular.forEach($scope.rowThree,function(value){
			if(value.heading8 != undefined && value.para88 != undefined){
				$scope.heading8 = value.heading8;
				$scope.para88 = value.para88;
			}
			if(value.heading9 != undefined && value.para99 != undefined){
				$scope.heading9 = value.heading9;
				$scope.para99 = value.para99;
			}
			if(value.heading10 != undefined && value.para100 != undefined){
				$scope.heading10 = value.heading10;
				$scope.para100 = value.para100;
			}			
		});

		//for images
		$scope.img = response.images;
		angular.forEach($scope.img,function(value){
			if(value.dest1 != undefined){
				$scope.one = value.dest1;				
			}
			if(value.dest2 != undefined){
				$scope.two = value.dest2;				
			}
			if(value.dest3 != undefined){
				$scope.three = value.dest3;				
			}
			if(value.dest4 != undefined){
				$scope.four = value.dest4;				
			}
			if(value.dest5 != undefined){
				$scope.five = value.dest5;				
			}
			if(value.dest6 != undefined){
				$scope.six = value.dest6;				
			}
			if(value.dest7 != undefined){
				$scope.seven = value.dest7;				
			}
			if(value.dest8 != undefined){
				$scope.eight = value.dest8;				
			}
			if(value.dest9 != undefined){
				$scope.nine = value.dest9;				
			}
			if(value.dest10 != undefined){
				$scope.ten = value.dest10;				
			}
			if(value.dest11 != undefined){
				$scope.eleven = value.dest11;				
			}
			if(value.dest12 != undefined){
				$scope.twelve = value.dest12;				
			}
			if(value.dest13 != undefined){
				$scope.thirteen = value.dest13;				
			}
			if(value.dest14 != undefined){
				$scope.fourteen = value.dest14;				
			}
			if(value.dest15 != undefined){
				$scope.fifteen = value.dest15;				
			}
			if(value.dest16 != undefined){
				$scope.sixteen = value.dest16;				
			}
			if(value.dest17 != undefined){
				$scope.seventeen = value.dest17;				
			}
			if(value.dest18 != undefined){
				$scope.eighteen = value.dest18;				
			}
			if(value.dest19 != undefined){
				$scope.ninteen = value.dest19;				
			}
			if(value.pdf != undefined){
				$scope.pdf = value.pdf;				
			}
		});
		
		//for paragraphs
		$scope.paragraph = response.paragraphs;
		angular.forEach($scope.paragraph,function(value){
			if(value.para1 != undefined){
				$scope.para1 = value.para1;				
			}
			if(value.para2 != undefined){
				$scope.para2 = value.para2;				
			}
			if(value.para3 != undefined){
				$scope.para3 = value.para3;				
			}
			if(value.para4 != undefined){
				$scope.para4 = value.para4;				
			}
			if(value.para5 != undefined){
				$scope.para5 = value.para5;				
			}
			if(value.para6 != undefined){
				$scope.para6 = value.para6;				
			}
			if(value.para7 != undefined){
				$scope.para7 = value.para7;				
			}
			if(value.para8 != undefined){
				$scope.para8 = value.para8;				
			}
			if(value.para9 != undefined){
				$scope.para9 = value.para9;				
			}
			if(value.para10 != undefined){
				$scope.para10 = value.para10;				
			}
			if(value.para11 != undefined){
				$scope.para11 = value.para11;				
			}
			if(value.para12 != undefined){
				$scope.para12 = value.para12;				
			}
			if(value.para13 != undefined){
				$scope.para13 = value.para13;				
			}
			if(value.para14 != undefined){
				$scope.para14 = value.dest14;				
			}			
		});
		
		//for Benifits Guide Book
		$scope.bgb = response.BGB;
		angular.forEach($scope.bgb,function(value){
			if(value.title1 != undefined){
				$scope.title1 = value.title1;				
			}
			if(value.title2 != undefined){
				$scope.title2 = value.title2;				
			}
			if(value.title3 != undefined){
				$scope.title3 = value.title3;				
			}
			if(value.list1 != undefined){
				$scope.list1 = value.list1;				
			}
			if(value.list2 != undefined){
				$scope.list2 = value.list2;				
			}
			if(value.list3 != undefined){
				$scope.list3 = value.list3;				
			}
			if(value.list4 != undefined){
				$scope.list4 = value.list4;				
			}
			if(value.list5 != undefined){
				$scope.list5 = value.list5;				
			}
			if(value.list6 != undefined){
				$scope.list6 = value.list6;				
			}
			if(value.list7 != undefined){
				$scope.list7 = value.list7;				
			}
			if(value.list8 != undefined){
				$scope.list8 = value.list8;				
			}
			if(value.list9 != undefined){
				$scope.list9 = value.list9;				
			}						
		});
		
        //json data for alfac benifits        
        
        $scope.alfacheadings = response.Aflacheadings;
		angular.forEach($scope.alfacheadings,function(value){
			if(value.h1 != undefined && value.p1 !=undefined){
				$scope.h1 = value.h1;
                $scope.p1=value.p1;
			}
			if(value.h2 != undefined && value.p2!=undefined){
				$scope.h2 = value.h2;
                $scope.p2=value.p2;
			}
			if(value.h3 != undefined && value.p3!=undefined){
				$scope.h3 = value.h3;	
                $scope.p3=value.p3;
			}			
			if(value.h4 != undefined && value.p4!=undefined){
				$scope.h4 = value.h4;
                $scope.p4=value.p4;
			}
			if(value.h5 != undefined && value.p5!=undefined){
				$scope.h5 = value.h5;
                $scope.p5=value.p5;
			}
            
            if(value.h6 != undefined && value.p6!=undefined){
				$scope.h6 = value.h6;	
                $scope.p6=value.p6;
			}			
			if(value.h7!= undefined && value.p7!=undefined){
				$scope.h7 = value.h7;
                $scope.p7=value.p7;
			}
			if(value.h8 != undefined && value.p8!=undefined){
				$scope.h8 = value.h8;
                $scope.p8=value.p8;
			}
			if(value.h9 != undefined && value.p9!=undefined){
				$scope.h9 = value.h9;
                $scope.p9=value.p9;
			}
		});
	});
	
	$scope.slim=function(){

		$scope.less=true;
		/*  $(document).ready(function(){

            $("#second").click(function(){

                $("#panel").slideToggle("slow");
            });
        });*/
        $scope.more=false;

	}

	$scope.slim1=function(){
		$scope.less1=true;
        $scope.more1=false;

	}
	$scope.slim2=function(){
		$scope.less2=true;
        $scope.more2=false;

	}
	$scope.slim3=function(){
		$scope.less3=true;
        $scope.more3=false;

	}
	
    $http.get("js/data.json")
    .then(function(response) {    
       $scope.result=response.data;
		
		
       
        
        
});
	$scope.closePopover = function(trigger){		 
		ngPopoverFactory.closePopover(trigger);
		$scope.more=true;
		$scope.more1=true;
		$scope.more2=true;
		$scope.more3=true;
		$(document).ready(function(){
			$("#panel").slideUp("slow");
			$("#panel1").slideUp("slow");
			$("#panel2").slideUp("slow");
			$("#panel3").slideUp("slow");
		});
	}
	
	
	
	
    
    
    
    
    
    
    
    
    //modal
    
    
       
   $(document).on('show','.accordion', function (e) {
         //$('.accordion-heading i').toggleClass(' ');
         $(e.target).prev('.accordion-heading').addClass('accordion-opened');
    });
    
    $(document).on('hide','.accordion', function (e) {
        $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
        //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
    });


$http.get("js/titles.json")
    .then(function(response) {
        $scope.titles =response.data;    
       console.log($scope.titles);
         
    });
    
    
    $http.get("js/headings.json")
    .then(function(response) {
        $scope.headings =response.data;      
       console.log( $scope.headings);
      
    });
   
      
    $http.get("js/images.json")
    .then(function(response) {
        $scope.image =response.data; 
        console.log($scope.image);
   
        
    });
	
	/*$http.get("json/data.json")
    .then(function(response) {
      
       $scope.results=response.data;
        console.log($scope.results);
      
       
  });*/
	
   
    
    


    
    
    
	
	
	

}]);
/*popover directive*/
t.directive("ngPopover",function(){
	return{restrict:"EA",
		   scope:{direction:"@",trigger:"@",onClose:"&",onOpen:"&",popoverClass:"@"},replace:!0,transclude:!0,link:function(e,t,r,n){e.popoverClass=r.popoverClass,e.dropDirection=r.direction||"bottom";var i,s,c=document.querySelector("#"+e.trigger),l=document.querySelector('.ng-popover[trigger="'+e.trigger+'"]');c.addEventListener("click",function(t){var r=this,i=document.querySelector('.ng-popover[trigger="'+e.trigger+'"]');t.preventDefault(),a(r,i),o(r),i.classList.toggle("hide"),i.classList.contains("hide")?(n.unregisterBodyListener(),e.onClose(),e.$apply()):(n.registerBodyListener(),e.onOpen(),e.$apply())});var p=function(){var e=c.getBoundingClientRect();document.body.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},a=function(t,o){o.classList.toggle("hide");var r=o.offsetWidth,n=o.offsetHeight;o.classList.toggle("hide");var c=t.offsetWidth,l=t.offsetHeight;switch(e.dropDirection){case"left":i=p().left-r-10+"px",s=p().top+"px";break;case"right":i=p().left+c+10+"px",s=p().top+"px";break;case"top":i=p().left+"px",s=p().top-n-10+"px";break;default:i=p().left+"px",s=p().top+l+10+"px"}o.style.position="absolute",o.style.left=i,o.style.top=s};a(c,l)},controller:["$scope",function(e){var t=function(r){var n=r.target,i=!1;do if(n!=document&&n.classList&&(n.classList.contains("ng-popover")||n.classList.contains("ng-popover-trigger"))){i=!0;break}while(n=n.parentNode);i||(o(),document.body.removeEventListener("click",t),e.onClose(),e.$apply())};this.registerBodyListener=function(){document.body.addEventListener("click",t)},this.unregisterBodyListener=function(){document.body.removeEventListener("click",t)}}],template:'<div class="ng-popover hide"><div class="ng-popover-wrapper {{dropDirection}}"><div class="ng-popover-content" ng-class="popoverClass"><ng-transclude></ng-transclude></div></div></div>'}}),t.factory("ngPopoverFactory",function(){return{closePopover:function(e){document.querySelector(".ng-popover[trigger="+e+"]").classList.add("hide")},closeAll:function(){for(var e=document.querySelectorAll(".ng-popover"),t=0;t<e.length;t++)e[t].classList.contains("hide")||e[t].classList.add("hide")}}});var o=function(e){var t;e&&(t=e.getAttribute("id"));for(var o=void 0!=e?document.querySelectorAll('.ng-popover:not([trigger="'+t+'"])'):document.querySelectorAll(".ng-popover"),r=0;r<o.length;r++){var n=o[r];n.classList.contains("hide")||n.classList.add("hide")}};






