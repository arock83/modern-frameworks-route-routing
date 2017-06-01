"use strict";

var app = angular.module("RouteApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "partials/greeting.html"
	})
	.when("/interstate40", {
		templateUrl: "partials/highway1.html",
		controller: "routeCtrlOne"
	})
	.when("/route66", {
		templateUrl: "partials/highway1.html",
		controller: "routeCtrlTwo"

	}).otherwise("/");
});