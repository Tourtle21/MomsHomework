'use strict';

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Main = require("./components/main.js");

var routes = (
	<Route path="/" component={Main}>
	</Route>
);

module.exports = routes;
{/*<Route path="/about-page" component={AboutPage} />*/}
