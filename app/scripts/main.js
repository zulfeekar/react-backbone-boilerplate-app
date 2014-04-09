'use strict';
var Model = require('./models/default'),
    model = new Model({ title: 'Title displayed with React' }),
    React = require('react'),
    Title = require('./components/title.jsx');

React.renderComponent(new Title(model.toJSON()), document.body);
console.log('app started');
