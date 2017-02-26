// SET/RECALL button:
	// If Chrono = Stopped && 00:00:00: Set format.
		// Option 1: Top Field = currentLap, Bottom Field = grandTotal.
		// Option 2: Top Field = grandTotal, Bottom Field = currentLap.
	// If Chrono = Stopped && !00:00:00: Recall all lap splits (if applicable).
		// Start/Split: View lapNumber++
		// Stop/Reset: View lapNumber--
	// If Chrono = Active: (I don't know . . . )

// MODE button:
	// If < X seconds: Goto: TIMER.
	// If > X seconds: Goto: CLOCK.

// START/SPLIT button:
	// If Chrono = Stopped: Start chrono.
	// If Chrono = Active:
		// Save currentLap's time into LAP. (Whatever lap number you are on.)
		// currentLap++
		// Continue counting time for the new current lap and the grandTotal, but display previous lap data for 10 seconds.
		// After 10 seconds:
			// Display currentLap time in one field, grandTotal time in the other (depending on set format).
			// In the seconds field, alternate between displaying seconds, and displaying the current lap number.

// STOP/RESET button:
	// If Chrono = Active: Press to stop.
	// If Chrono = Stopped: HOLD to reset to 00:00:00.

// INDIGLO button:
	// Link to indiglo.js.