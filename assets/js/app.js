$( document ).ready( function() {

	// Play Beep function:
	function beep() {
		$( "#beep" ).play();

	}

	$( "button" ).click( function() {
		// beep();
		alert( "Beep");
	});
	
});