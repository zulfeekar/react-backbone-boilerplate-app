'use strict';
var Model = require('./models/model'),
    jq = require('jquery');
window.model = new Model();
console.log('Started', jq('h1'));
