// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minium)
const names = require('./2-names');
const sayHi = require('./3-utils');
const data = require('./4-alternative-flavors');
require('./5-mind-grenade');

sayHi(names.john);
sayHi(names.peter);
sayHi('Khang')
