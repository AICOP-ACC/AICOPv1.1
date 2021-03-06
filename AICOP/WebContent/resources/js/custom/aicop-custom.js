$(document).ready(function(){
	
	
$(".open-button").on("click", function() {
  $(this).closest('.collapse-group').find('.collapse').collapse('show');
});

$(".close-button").on("click", function() {
  $(this).closest('.collapse-group').find('.collapse').collapse('hide');
});

$('.aicop-collapse').on("click",function(){
	var eleId = "#"+$(this).attr('id');
	console.log("eleId-->"+eleId);
	if($(this).hasClass("fa fa-plus-circle")){
		
		$(eleId).removeClass("fa fa-plus-circle");
		$(eleId).addClass("fa fa-minus-circle");
	}
	else{
		$(eleId).removeClass("fa fa-minus-circle");
		$(eleId).addClass("fa fa-plus-circle");
	}
})

$('#confInit').on('click',function(){
	console.log("On click confInit");
	$('#confTerminate').removeClass("hidden");
	$('#shareBridge').removeClass("hidden");
	$('#confInit').prop('disabled',true);
	$.ajax({
			  "async": true,
			  "crossDomain": true,
			  "url": "https://dh.aiam.accenture.com/optusams-node/conference",
			  "method": "POST",
			  "headers": {
				"content-type": "application/x-www-form-urlencoded",
				"cache-control": "no-cache"   
			  },
			  "data": {
				"appName":"OPOM",
				"moderator": "+919994946535",
				"telNos": "+919840272090"
			  },
			  success:function(response){
				  console.log("Call made..");
			  }
			});
			
			
	})
	
	$('#addNewNumber').on('click',function(){
		$('#errorMsg').text("");
		console.log("New number added");
		var countryCode = $('#countryCode').val();
		var newNumToAdd = $('#newPhNum').val();
		//Validations for new number
		//India number
		if(countryCode=="+91" && newNumToAdd.length != 10){
			console.log("India number");
			//document.getElementById("errorMsg").innerHTML = "Phone number must be 10 digit!";
			//$('#errorMsg').removeClass("hidden");
			$('#errorMsg').text("Phone number must be 10 digit!");
			}
		
		//Singapore number
		else if(countryCode=="+65" && newNumToAdd.length != 8){
			console.log("Singapore Code");
			//document.getElementById("errorMsg").innerHTML = "Phone number must be 8 digit!";
			//$('#errorMsg').removeClass("hidden");
			$('#errorMsg').text("Phone number must be 8 digit!");
			}
		
		//Australia number
		else if(countryCode=="+61" && newNumToAdd.length != 9){
			console.log("Australia Code");
			//document.getElementById("errorMsg").innerHTML = "Phone number must be 9 digit!";
			//$('#errorMsg').removeClass("hidden");
			$('#errorMsg').text("Phone number must be 9 digit!");
			}
		
		//Validation Passed
		else{
			console.log("Validation passed");
			var conferenceContactsTable = $('#memDetTable').DataTable();
			conferenceContactsTable.row.add( [
	            'NA',
	            'Guest',
	            'NA',
	            'NA',
	            countryCode+newNumToAdd
	        ] ).draw( false );
			conferenceContactsTable.order([1, 'desc']).draw();
		}
	})
$('#confTerminate').on('click',function(){
	console.log("On click confTerminate");
	$('#confTerminate').addClass("hidden");
	$('#shareBridge').addClass("hidden");
	$('#confInit').prop('disabled',false);
	$.ajax({
			  "async": true,
			  "crossDomain": true,
			  "url": "https://dh.aiam.accenture.com/optusams-node/terminateCall", 
			  "method": "POST",
				  success:function(response){
					  console.log("Call teminated..");
				  }
			});
	
	var terminatedMsg = "Call has been terminated. Recordings of the call can be found in \"https://dh.aiam.accenture.com/optusams-node/terminateCall/Recordings\"";
	var dt = new Date();
	var utcDate = dt.toUTCString();
	$('#notesTxtId').append("\n"+utcDate+" : "+terminatedMsg);
	
})
$('#shareBridge').on('click',function(){
	console.log("On click shareBridge");
	$('#popUpModalEmail').modal('show');
	$('#emailModalLabeId').text("Share Bridge Details");
	
})

//Send email / Share Bridge details
$('#sendMail').on("click", function (e) {
	console.log("send mail clicked..");
	
	var toEmail = $('#toEmail').val();
	var ccEmail = $('#ccEmail').val();
	var subEmail = $('#subject').val();
	var content = $('#mailContent').val();
	console.log(content);
	
	$.ajax({
	  "async": true,
	  "crossDomain": true,
	  "url": "https://dh.aiam.accenture.com/optusams-node/sendMail",
	  "method": "POST",
	  "headers": {
		"content-type": "application/x-www-form-urlencoded",
		"cache-control": "no-cache"   
	  },
	  "data": {
		"to": toEmail,
		"cc": ccEmail,
		"subject":subEmail,
		"content":content
	  },
	  success: function(){
		  console.log("email sent..");
	  },
	  error: function(){
		  console.log("error while sending email..");
	  }
	  
	});

	

	});


$('#notesIcon').on('click',function(){
	console.log("On click notesIcon");
})

$('#impactedAppl').on('click',function(){
	console.log("On select");
	var selOpt = $(this).text();
	console.log("selected option::"+selOpt);
})
$( "#impactedAppl" ).change(function () {
	console.log("onchange");
    var str = ""; 
    var populateStr = "";
    $( "#impactedAppl option:selected" ).each(function() {
    	var eachOpt = $( this ).text()
    	populateStr += "<span class='tag'><span>"+eachOpt+"&nbsp;&nbsp;</span><a href='#' title='Removing tag'>x</a></span>";
      str += $( this ).text() + " ";
    });
   // $( "#divId" ).text( str );
    populateStr += '<div id="tags_1_addTag"><input id="tags_1_tag" value="" data-default="add a tag" style="color: rgb(102, 102, 102); width: 72px;"></div><div class="tags_clear"></div>';
    $('#tags_1_tagsinput').html(populateStr);
  })
  .change();


    $('[data-toggle="tooltip"]').tooltip(); 
    //var currentActionTable = $('#currActionTable').dataTable();
    
   var currActionTable = $('.currActionTable').dataTable({
        'bFilter': false,
        'bInfo': false,
        'bPaginate': false,
      });
  
   


$(".addRow").on("click", function() {
	var row = ['','','','','','<form><select><option>Not Started</option><option>In Progress</option><option>Completed</option></select></form>','','','','<form><select><option>--Please Select--</option><option>Success</option><option>Failure</option></select></form>','<div class="text-center"><a data-toggle="tooltip" title="Remove Actions"><span class="fa fa-minus-circle fa-lg  text-danger"></span></a></div>'];
	var table = $('.currActionTable').DataTable();
	table.row.add(row).draw();
	//table.order([0, 'asc']).draw();
    //table.page('first').draw(false);
	
});



$(".saveRow").on("click", function() {
	console.log("save Row");
	});



$("#popUpNotes").on("click",function(){
	console.log("Btn clciked.....");
	$('#popUpModal').modal('show').find('.modal-body').load($(this).attr('htpps://www.google.com'));
})

/**
 * Soundariya : Auto conferencing business logic starts
 */
/*
//Initiating Conference
$('#confInit').on("click",function(){
	$('#confTerminate').show();
	$('#shareBridge').show();
	$('#confInit').prop('disabled',true);
	
})

//Terminating Conference
$('#confTerminate').on("click",function(){
	$('#confTerminate').hide();
	$('#shareBridge').hide();
	$('#confInit').prop('disabled',false);
	
})*/


/**
 *  Soundariya : Auto conferencing business logic ends
 */

});