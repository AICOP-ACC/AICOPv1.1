 function fixAutoOpen(){ 
         
   document.getElementById("sidemenu").innerHTML='<li id="home"  ><a ><i class="fa fa-home"></i> Home <span class="fa fa-chevron-down"></span></a><ul class="nav child_menu"><li><a href="">Business View</a></li><li><a href="">Executive View</a></li></ul></li><li><a id="Bussiness_Process"><i class="fa fa-sitemap"></i> Bussiness Process <span class="fa fa-chevron-down"></span></a><ul class="nav child_menu"><li><a href="#level1_1">Mobile Services</a></li<li><a>Port In<span class="fa fa-chevron-down"></span></a><ul class="nav child_menu"><li class="sub_menu"><a href="">Bussiness Process Flow</a></li><li><a href="#level2_1">Application Flow</a></li></ul></li><li><a>Port Out<span class="fa fa-chevron-down"></span></a><ul class="nav child_menu"><li class="sub_menu"><a href="">Bussiness Process Flow</a> </li><li><a href="#level2_1">Application Flow</a> </li></ul></li><li><a>Fixed Services<span class="fa fa-chevron-down"></span></a><ul class="nav child_menu"><li class="sub_menu"><a href="">Port In</a></li><li><a href="#level2_1">Port Out</a></li></ul></li><li><a>Order Management<span class="fa fa-chevron-down"></span></a><ul class="nav child_menu"><li class="sub_menu"><a href="">Mobile Services</a>  </li> <li><a href="#level2_1">Fixed Services</a>  </li></ul></li><li><a>Billing Management<span class="fa fa-chevron-down"></span></a><ul class="nav child_menu"><li class="sub_menu"><a href="">Mobile Services</a>  </li><li><a href="#level2_1">Fixed Services</a>  </li> </ul></li></ul></li>';
        }
      function hideImage()
      {
    	var html=document.getElementById('navtitle').innerHTML;
    	 if(html.includes("img"))
    	  document.getElementById('navtitle').innerHTML="";
    	 else
    		 document.getElementById('navtitle').innerHTML='<img  id="logo" src="resources/images/AICOP_LOGO.png" style="width:200px;"></img>';
      }
 function loadFlowChart()
		 {
		 var div=document.getElementById("x_content2");
		  var div=document.getElementById("x_content2");
		$("#basic-example").remove();
		$("#createflowchart").remove();
	//	alert(div.innerHTML);
		div.innerHTML=div.innerHTML+'<div id="canvas" style="width: 100%;height:200px;overflow-x:scroll;overflow-y:scroll;"></div>'+'<button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#myModal" id="createflowchart">Create Flow Chart</button>';
		alert(div.innerHTML);
	var btn = document.getElementById("run"),
                    cd = document.getElementById("code"),
                    chart;
          
                    var code = cd.value;
                    if (chart) {
                      chart.clean();
                    }
                    chart = flowchart.parse(code);
                    chart.drawSVG('canvas', {
                      // 'x': 30,
                      // 'y': 50,
                      'line-width': 1.5,
                      'maxWidth': 3,//ensures the flowcharts fits within a certian width
                      'line-length': 10,
                      'text-margin': 5,
                      'font-size': 8,
                      'font': 'normal',
                      'font-family': 'Helvetica',
                      'font-weight': 'normal',
                      'font-color': 'black',
                      'line-color': 'black',
                      'element-color': 'black',
                    
                      'yes-text': 'yes',
                      'no-text': 'no',
                      'arrow-end': 'block',
                      'scale': 1.5,
                      'symbols': {
                        'start': {
                          'font-color': 'red',
                          'element-color': 'green',
                          'fill': 'black'
                        },
                        'end':{
                          'class': 'end-element'
                         
                        },
                        'operation':{
                        	'font-color': 'white',
                        	'fill':'#62aa3b',
                        	'stroke':'red'
                        	
                        },
                        
                       'condition':
                    	   {
                    	   'font-color': 'white',
                       	'fill':'#62aa3b',
                       	'stroke':'red'
                    	   
                    	   }

                      },
                      'flowstate' : {
                       /*  'orderCapture' : { 'fill' : 'black', 'font-size' : 12},
                        'current' : {'fill' : 'black', 'font-color' : 'red', 'font-weight' : 'bold'},
                        'future' : { 'fill' : 'green'},
                        'request' : { 'fill' : 'blue'},
                        'invalid': {'fill' : 'green'},
                        'approved' : { 'fill' : 'green', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                        'rejected' : { 'fill' : 'green', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' } */
                      }
                    });
                    $('[id^=sub1]').click(function(){
                      alert('info here');
                    });
		 
		 }
         function click(id)
         {
        	 alert('going to click');
        	
        	 
         }
		 function changeTheme(theme)
		 {
		 if(theme=='gray'){
		 document.getElementById("navtitle").style.backgroundColor='dimgrey';
		 document.getElementById("navbar").style.backgroundColor='dimgrey';
		  document.getElementById("left-col").style.backgroundColor='dimgrey';
		  document.getElementById("nav-menu").style.backgroundColor='dimgrey';
		//  document.getElementById("menu1").style.backgroundColor='dimgrey';
			 document.getElementById("menu2").style.backgroundColor='dimgrey';
		 }
		else if(theme=='black')
{
 document.getElementById("navtitle").style.backgroundColor='black';
		 document.getElementById("navbar").style.backgroundColor='black';
		 document.getElementById("left-col").style.backgroundColor='black';
		 document.getElementById("nav-menu").style.backgroundColor='black';
		 //document.getElementById("menu1").style.backgroundColor='black';
		 document.getElementById("menu2").style.backgroundColor='black';


}
else
{
document.getElementById("navtitle").style.backgroundColor='#2A3F54';
		 document.getElementById("navbar").style.backgroundColor='#2A3F54';
		 document.getElementById("left-col").style.backgroundColor='#2A3F54';
		 document.getElementById("nav-menu").style.backgroundColor='#2A3F54';
		 //document.getElementById("menu1").style.backgroundColor='#2A3F54';
		 document.getElementById("menu2").style.backgroundColor='#2A3F54';
		 
}		
		 }
		 function generateFlowChart()
		 {
		 
		 var flowone=document.getElementById("flow").value;
		 var flowtwo=document.getElementById("flow1").value;
		 var flowthree=document.getElementById("flow2").value;
		 var flowfour=document.getElementById("flow3").value;
		 var flowfive=document.getElementById("flow4").value;
		 
		 var code=flowone+"=>operation: "+flowone+"\n"+flowtwo+"=>operation: "+flowtwo+"\n"+flowthree+"=>operation: "+flowthree+"\n"+flowfour+"=>operation: "+flowfour+"\n"+flowfive+"=>operation: "+flowfive;
var code1=flowone+"(right)->"+flowtwo+"(right)->"+flowthree+"(right)->"+flowfour+"(right)->"+flowfive;
var codefinal=code+"\n"+code1;
/* alert(codefinal); */



                 var   chart = flowchart.parse(codefinal);
				 var div=document.getElementById("canvas");
				 div.innerHTML="";
				/*  alert(chart); */
                    chart.drawSVG('canvas', {
                      // 'x': 30,
                      // 'y': 50,
                      'line-width': 3,
                      'maxWidth': 3,//ensures the flowcharts fits within a certian width
                      'line-length': 10,
                      'text-margin': 5,
                      'font-size': 8,
                      'font': 'normal',
                      'font-family': 'Helvetica',
                      'font-weight': 'normal',
                      'font-color': 'black',
                      'line-color': 'black',
                      'element-color': 'black',
                      'fill': 'white',
                      'yes-text': 'yes',
                      'no-text': 'no',
                      'arrow-end': 'block',
                      'scale': 1.5,
                      'symbols': {
                        'start': {
                          'font-color': 'red',
                          'element-color': 'green',
                          'fill': ''
                        },
                        'end':{
                          'class': 'end-element'
                        }
                      },
                      'flowstate' : {
                    /*    'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
                        'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
                        'future' : { 'fill' : 'green'},
                        'request' : { 'fill' : 'blue'},
                        'invalid': {'fill' : '#444444'},
                        'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                        'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }*/
                      }
                    });
                    $('[id^=sub1]').click(function(){
                     /*  alert('info here'); */
                    });

		 
		 }
 function replaceBell()
  {
	 var xmlhttp=new XMLHttpRequest();
	 var marquee1="";
	 xmlhttp.onreadystatechange=function(){
	 	alert(xmlhttp.status+" "+xmlhttp.readyState)
	 	if(xmlhttp.status==200&&xmlhttp.readyState==4){
	 		var a=xmlhttp.responseText;
	 	alert(a);
	 	var a1=$.parseJSON(a);
	 	 marquee1='<marquee scrollamount=2 onmouseout="this.start()" onmouseover="this.stop()"  behavior="scroll" direction="up" style="height:250px;">';
	 	for(var i=0;i<a.length;i++)
	 		{
	 		marquee1=marquee1+a1[i]+"<br><br>";
	 		}
		 marquee1='</marquee>'
	 	}
	 	}
alert(marquee1);
	 xmlhttp.open("POST", "notification.do", true);
	 xmlhttp.send();
	 
  document.getElementById("x_content1").innerHTML=marquee1;

  }
  

  function replaceexclamation()
  {
  document.getElementById("x_content1").innerHTML='<marquee scrollamount=2 onmouseout="this.start()" onmouseover="this.stop()"  behavior="scroll" direction="up" style="height:250px;color:black;font-size:12px">PN Sent from OPOM to MTS is Low - <b style="color:#FF6600;">Action Required</b><br><br>Active Connections in HELIX MOBILE Application Server is Increasing - <b style="color:#FF6600;">Action Required</b> <br><br>Pending Requests in Queue : EAI is above Threshold limit continuously for past 15 Minutes - <b style="color:#FF6600;">Action Required </b><br><br>Pending Requests in Queue : NFT is above Threshold limit continuously for past 15 Minutes -<b style="color:#FF6600;">Action Required</b></marquee>';

  }
  
  function replacesignal()
  {
  document.getElementById("x_content1").innerHTML='<canvas id="mybarChart" width="633" height="316" style="width: 633px; height: 316px;margin-top:10%;"></canvas>';
var f=document.getElementById("mybarChart");
new Chart(f,{type:"bar",data:{labels:["BCC","Helix","Helix Mobile","Helix Mobile","OPOM","POPI"],datasets:[{label:"# of Incidents",backgroundColor:"#26B99A",data:[51,30,40,28,92,50]}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})
  }
  
  function replaceBeat()
  {
  $('#x_content1').empty();
  document.getElementById("x_content1").innerHTML='	<div id="wrapper" style="width:100%;height:60px;overflow-y:scroll;"></div>';    
   var tagInput = $('<input />', {

});
tagInput.appendTo($('#wrapper'));
tagInput.tagsinput({
});
  
  
  
  }

  