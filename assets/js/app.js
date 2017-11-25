$( document ).ready( function() {

	var beeps = true;

	$( "button" ).click( function() {

		if ( beeps ) {

			var casioBeep = $( "#beep" )[ 0 ];
		
			casioBeep.play();

		}
		
		if ( nightMode ) {

			// Call indiglo();
		}
		
	});
	
});