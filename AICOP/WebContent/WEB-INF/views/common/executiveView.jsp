 <script src="resources/js/custom/aicop_func.js"></script>
 <script src=https://cdnjs.cloudflare.com/ajax/libs/flowchart/1.11.3/flowchart.js></script>
 <script type="text/javascript" src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
 

 <div class="main-container container-fluid">   
 
          <!-- top tiles -->
		  <div class="row">


           <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="x_panel tile fixed_height_320">
                <div class="x_title">
                  <h2>Notifications</h2>
                  <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up" onclick="replaceBell()"></i></a>
					  <li><a class="collapse-link1" onclick="replaceexclamation()"><i class="fa fa-exclamation-circle"></i></a>
                    </li>
                    <li><a class="collapse-link11" onclick="replacesignal()"><i class="fa fa-signal"></i></a>
                     
                    </li>
                    
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="x_content" id="x_content1">

                      <marquee scrollamount=2 onmouseout="this.start()" onmouseover="this.stop()"  behavior="scroll" direction="up" style="height:250px;"><b>1801040252 - OPOM</b> - Unable to place porting orders - Stuck in Order Summary Page <br><br><b>1801040276 - MyOptus</b> - App crashes frequently  </marquee>
						
				  </div>
                       
                </div>
              </div>

            <div class="col-md-8 col-sm-8 col-xs-12">
              <div class="x_panel tile fixed_height_320 overflow_hidden">
                <div class="x_title">
                  <h2>Flowchart</h2>
                  
                  <div class="clearfix"></div>
                </div>
                <div class="x_content" id="x_content2">
				
    
		 <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js"></script>-->
             <div><textarea id="code" style="width: 100%;display:none;" rows="11">
st=>start: Start|past:>javascript:test()
			 orderCapture=>operation: Order Capture:>javascript:test()
sub1=>subroutine: My Subroutine
orderValidation=>operation: Order Validation
orderSubmission=>operation: Order Submission
op3=>operation: provisioning
PortingOrders=>operation: Porting Orders:>javascript:loadNewFlowChart()
NonPortingOrders=>operation: Non Porting Orders 
provisioning=>operation: Provisioning 
billing=>operation: Billing 
orderComp=>operation: Order Completion 
provcond=>condition: Porting?
e=>end: Into admin panel

orderCapture(right)->orderValidation(right)->orderSubmission(right)->provcond(up)
provcond(yes)->PortingOrders->provisioning->billing->orderComp
provcond(no)->NonPortingOrders->provisioning->billing->orderComp


</textarea>
<textarea id="code1" style="width: 100%;display:none;" rows="11">
PortINInitiatedinCRM=>operation: Port IN Initiated in CRM
CRMisNotified=>operation: CRM is Notified
IntimateNo.OfInventoryofAssignedCarrier=>operation: Intimate No.Of Inventory of Assigned Carrier
ActivationSystemCompletestheActivation=>operation: Activation System Completes the Activation
MiddlewarereceivetheRequest=>operation: Middleware receive the Request
NotifytheRejectionMessagetoCRM=>operation: Notify the Rejection Message to CRM
TriggertheCutoverNotification=>operation: Trigger the Cutover Notification
InitiateActivation=>operation: Initiate Activation
ReceivestheRequest=>operation: Receives the Request
ReceivestheResponseforNotifyRequest=>operation: Receives the Response for Notify Request
SendstheDisconnectRequest=>operation: Sends the Disconnect Request
BroadcasttheActivationCompletion=>operation: Broadcast the Activation Completion
NotifytheLosingCarrier=>operation: Notify the Losing Carrier
DisconnectionrequesttoLosingCarrier=>operation: Disconnection request to Losing Carrier
Losingcarrierisnotified=>operation: Losing carrier is notified
ReceivestheResponseforDisconnectRequest=>operation: Receives the Response for Disconnect Request
NotifiedtheRejectionMessagetoCRM=>operation: Notified the Rejection Message to CRM
Confirmed?=>condition: Confirmed?
DisconnectCompleted?=>condition: Disconnect Completed?
e=>end: Into admin panel
PortINInitiatedinCRM(right)->MiddlewarereceivetheRequest(right)->ReceivestheRequest(right)->NotifytheLosingCarrier->ReceivestheResponseforNotifyRequest->Confirmed?->ReceivestheResponseforDisconnectRequest->DisconnectCompleted?
Confirmed?(yes)->TriggertheCutoverNotification->SendstheDisconnectRequest->DisconnectionrequesttoLosingCarrier->ReceivestheResponseforDisconnectRequest
Confirmed?(no)->NotifytheRejectionMessagetoCRM->CRMisNotified
DisconnectCompleted?(yes)->InitiateActivation->ActivationSystemCompletestheActivation->BroadcasttheActivationCompletion->Losingcarrierisnotified
DisconnectCompleted?(no)->NotifiedtheRejectionMessagetoCRM->CRMisNotified



</textarea>




</div>
        <div><button id="run" type="button" style="width: 100%;display:none;">Run</button></div>
       <!-- <div id="canvas" style="width: 100%;height:200px;overflow-x:scroll;overflow-y:scroll;"></div>-->
	 <div class="container">
  <!-- Trigger the modal with a button -->
<!-- <link rel="stylesheet" href="resources/css/Treant.css">
    <link rel="stylesheet" href="resources/css/basic-example.css" > -->
	<div class="chart" id="basic-example" style="width:100%;height:200px;"></div>
    <!-- <script src="resources/js/raphael-min.js"></script>
    <script src="resources/js/Treant.js"></script>
    
    <script src="resources/js/basic-example1.js"></script> -->
    <script>
        new Treant( chart_config );
    </script>
  <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#myModal" id="createflowchart">Create Flow Chart</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Flow chart input</h4>
        </div>
        <div class="modal-body">
		<div class="controls" id="profs"> 
		<form class="input-append">
	<div><input type="text" class="form-control" id="flow" placeholder="Enter second flow" style="width:50%;"><button id="b1" class="btn add-more" type="button">+</button></div>
	</form>
	</div>
		  <br>
		  <input type="text" class="form-control" id="flow1" placeholder="Enter second flow">  
		  <br>
		  <input type="text" class="form-control" id="flow2" placeholder="Enter third flow"> 
		  <br>
		  <input type="text" class="form-control" id="flow3" placeholder="Enter fourth flow">  
		  <br>
		  <input type="text" class="form-control" id="flow4" placeholder="Enter fifth flow"> 
		  <br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" onclick="generateFlowChart()">Generate Flow Chart</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
        
                </div>
              </div>
            </div>


          

          </div>
			
			
            </div>
			<div class="row">
 <div class="col-md-12 col-sm-12 col-xs-12">

            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="x_panel tile fixed_height_320 overflow_hidden">
                <div class="x_title">
                  <h2>Order Activation - Port In</h2>
                 
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                 <canvas class="canvasDoughnut"  style=" width: 100%; height: 250px;margin-top:10%;"></canvas>
                
                      </td>
                    </tr>
                  </tbody></table>
                </div>
              </div>
            </div>


<div class="col-md-4 col-sm-4 col-xs-12">
              <div class="x_panel tile fixed_height_320 overflow_hidden">
                <div class="x_title">
                  <h2>Order Provisioning -  Mobile</h2>
                  
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                  <div  id="chartContainer" style="height: 250px; width: 100%;"></div>
                    <script>loadOrder()</script> 
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="x_panel tile fixed_height_320 overflow_hidden">
                <div class="x_title">
                  <h2>Billing Management -  Mobile</h2>
                  
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                <div  id="chartContainer1" style="height: 250px; width: 100%;"></div>
                <script>loadBilling()</script> 
                </div>
              </div>
            </div>


           </div>
              </div>
        
 	
 </div>