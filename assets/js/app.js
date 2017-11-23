$( document ).ready( function() {

	$( "button" ).click( function() {
		var casioBeep = $( "#beep" )[ 0 ];
		casioBeep.play();
		
	});
	
});