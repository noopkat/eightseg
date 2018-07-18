# eightseg
Johnny-Five compatible library to control a common anode eight segment display

Common cathode support coming soon!

## Usage
```javascript
const five = require('johnny-five');
const Eightseg = require('eightseg');

const board = new five.Board();
board.on('ready', function() {
 // pin array orders segments in clockwise fashion a-g, starting at top, enging at middle segment
 // see: https://en.wikipedia.org/wiki/Seven-segment_display for the a-g diagram of segment order
 const seggy = new Eightseg(five, [2,3,4,5,6,7,8]);
 seggy.display(2);
 setTimeout(() => seggy.clear(), 1000);
});
```
