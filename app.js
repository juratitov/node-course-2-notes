console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

// console.log(_.isString(true));
// console.log(_.isString('Jura'));

var filteredArray = _.uniq(['Jura', 1, 'Jura', 1, 2, 3, 4]);
console.log(filteredArray);


// var res = notes.addNote();
// console.log(res);

// console.log('Result:', notes.add(3, -4));

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);