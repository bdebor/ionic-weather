angular.module('app.controllers', [])

	.controller('AppCtrl', function ($scope, $log) {
		$log.info('AppCtrl Created');
	})

	.controller('WeatherCtrl', function ($scope, $log) {
		$log.info('WeatherCtrl Created');
	});