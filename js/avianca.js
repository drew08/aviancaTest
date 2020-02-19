
// initialize variables
var isshow= true;		

var modalTest = {
	
	init: function () {
		debugger;	
			
		$("#w33").click(function(){				
			modalTest.sentAncillariesModal();			
		});	
		
		$("#btnContinue").click(function(){
			modalTest.continueflow();
		});		
	},
	sentAncillariesModal: function () {
		debugger;
				
		if(isshow){
			isshow= false;	
			$('#ancillariesModal').modal('show');	
			debugger;	
		}else{
			modalTest.continueflow();
		}	
	},
	continueflow: function () {
		debugger;
		// url example
		var url = 'https://sales.avianca.com/B2C/Formularios/RVLInfo.aspx';											
		window.open(url);		
	},	
};

modalTest.init();

