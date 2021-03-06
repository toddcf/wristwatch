$( document ).ready( function() {

	// NAVIGATION VARIABLES:
	var beeps = true; /* Can be set to false to silence beeps. */
	var next = true;

	// CLOCK VARIABLES:
	var clock = true;
	var t1 = true; /* If false, t2 is active. */
	var t1military = false; /* If true, display T1 in 24-hour mode. */
	var t2military = false; /* If true, display T2 in 24-hour mode. */

	// CHRONO VARIABLES:
	var chrono = false;
	var chronoValue = 000000;
	var splits = [];

	// TIMER VARIABLES:
	var timer = false;
	var timerActive = false;
	var timerStartPoint = 000000;

	// ALARM VARIABLES:
	var alarm = false;
	var alarmArmed = false;
	var alarmActive = false;

	// INDIGLO VARIABLES:
	var indiglo = false;
	var nightMode = false;

	// GLOBAL BUTTON BEHAVIOR:
	$( "button" ).click( function() {

		if ( beeps ) {

			var casioBeep = $( "#beep" )[ 0 ];
		
			casioBeep.play();

		}
		
		if ( nightMode ) {

			indiglo();

		}
		
	});

	// INDIGLO FUNCTIONS:
	function indiglo() {

		// Change bg to indiglo color.
		// Start 3-second countdown.
		// After 3 seconds, change bg back to normal.
	}

	function nightMode() {

		if ( nightMode ) {

			nightMode = false;
			
			// Change bg to normal.

		}

		else {

			nightMode = true;

			indiglo();

		}
	
	}

	$( "#indigloBtn" ).click( function() {

		indiglo();
	
	}

	$( "#indigloBtn" ).mousedown( function() {

		indiglo();

		// Start 3-second countdown.

		// If button held for 3 seconds:
		// nightMode();
	
	}

});