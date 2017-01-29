$(document).ready(function(){
	$("#btJoin").click(function(){
		var nf = $("#firstName").val();
		var nl = $("#lastName").val();
		var em = $("#email").val();
		var pn = $("#phoneNumber").val();
		var ad = $("#address").val();
		var isValid = true;
		
		//first email address
		if(nf == ""){
			$("#firstName").next().text("Enter your first name");
			isValid = false;
		}
		else{
			$("#firstName").next().text("");
		}
		
		if(nl == ""){
			$("#lastName").next().text("Enter your last name");
			isValid = false;
		}
		else{
			$("#lastName").next().text("");
		}

		if(em == ""){
			$("#email").next().text("Enter your eMail");
			isValid = false;
		}
		else{
			$("#email").next().text("");
		}
		
		if(pn == ""){
			$("#phoneNumber").next().text("Enter your phone number");
			isValid = false;
		}
		else{
			$("#phoneNumber").next().text("");
		}

		if(isValid){
			$.getScript('quizSystem.js')
			JJquiz.setUser(nf, nl, em, pn, ad)
			
			$("#mainf").submit();
		}
	}); // end of function click
	
}); //	end of function document.ready



