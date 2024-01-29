// Here i will be invoking the sayHi() function from utils.js
const sayHi = require('./utils.js')
const names = require('./names.js')

sayHi('Suzanne');
sayHi(names.peter)
sayHi(names.john)

