angular.module('app.services', [])

	.factory('Settings', function () {
        var Settings = {
            units: 'us'
        };
        return Settings;
    })

    .factory('Weather', function($http, $log, Settings, FORECASTIO_KEY) {
        $log.info('Weather Factory');
        var url = 'https://api.darksky.net/forecast/' + FORECASTIO_KEY + '/';

        return {
            getWeatherAtLocation: function(lat, lng) {
                return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK&units='+Settings.units);
            }
        }
    });
