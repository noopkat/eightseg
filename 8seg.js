const chars = {
  ' ': [0,0,0,0,0,0,0],
  h: [0,0,1,0,1,1,1],
  e: [1,0,0,1,1,1,1],
  l: [0,0,0,1,1,1,0],
  o: [1,1,1,1,1,1,0],
  s: [1,0,1,1,0,1,1],
  c: [1,0,0,1,1,1,0],
  n: [1,1,1,0,1,1,0],
  a: [1,1,1,0,1,1,1],
  b: [0,0,1,1,1,1,1],
  d: [0,1,1,1,1,0,1],
  i: [0,0,0,1,1,1,0],
  j: [0,1,1,1,0,0,0],
  f: [1,0,0,0,1,1,1],
  r: [0,0,0,0,1,0,1],
  t: [0,0,0,1,1,1,1],
  g: [1,1,1,1,0,1,1],
  p: [1,1,0,0,1,1,1],
  q: [1,1,1,0,0,1,1],
  u: [0,1,1,1,1,1,0],
  y: [0,1,1,0,0,1,1],
  1: [0,0,0,0,1,1,0],
  2: [1,1,0,1,1,0,1],
  3: [1,1,1,1,0,0,1],
  4: [0,1,1,0,0,1,1],
  5: [1,0,1,1,0,1,1],
  6: [1,0,1,1,1,1,1],
  7: [1,1,1,0,0,0,0],
  8: [1,1,1,1,1,1,1],
  9: [1,1,1,1,0,1,1],
  0: [1,1,1,1,1,1,0]
};

const eightseg = function(five, pins) {
  const pinNos = [...pins];
  console.log(pinNos, pins.length);
  this.pins = pinNos.map((n) => new five.Pin(n));
  this.pins.forEach((pin, i) => pin.write(1));
  //console.log(this.pins);
}

eightseg.prototype.display = function(char) {
  // char map is not a very good name
  const charMap = chars[char];
  if (!Array.isArray(charMap)) return;
  this.pins.forEach((pin, i) => pin.write(1-charMap[i]));
};

eightseg.prototype.clear = function() {
  // the 1-0 is preparing for future compat with common cathode segments
  this.pins.forEach((pin) => pin.write(1-0));
}

module.exports = eightseg;
