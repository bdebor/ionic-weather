angular.module('app.controllers', ['app.services'])

	.controller('AppCtrl', function ($scope, $log, Settings) {
		$log.info('AppCtrl Created');
		$scope.settings = Settings;
	})

	.controller('WeatherCtrl', function ($scope, $log, Settings, Weather) {
		$log.info('WeatherCtrl Created');

		Weather.getWeatherAtLocation(32.42, -117).then(function (resp) {
			$log.info(resp);
		}, function (error) {
			alert('Unable to get current conditions');
			$log.error(error);
		});
	});
