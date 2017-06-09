# Timex T53151 Ironman Watch
Reverse engineering the functions of my wristwatch. Just for fun.

- Set up basic wireframe.
- Add favicon.
- NOTE: Use soundsnap.com for the beep effects.
- NOTE: Figure out if it's better to:
  - Have one event handler per button that then runs an if/else or switch statement to determine which function to run if the button is pressed based on which state is currently active. Or:
  - Have all the posible states listed out, and inside each one, the event handler for each button.
  - For now, I am going to code it by button and list the possible states inside each event handler.