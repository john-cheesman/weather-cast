(function() {
    'use strict';

    angular
        .module('app.forecast')
        .factory('forecastService', forecastService);

    forecastService.$inject = ['$resource'];

    function forecastService($resource) {
        return $resource(
            'http://api.openweathermap.org/data/2.5/forecast/daily?q=:location,uk&cnt=7',
            {
                location: '@location'
            },
            {
                get: {
                    method: 'GET',
                    params: {
                        location: ''
                    }
                }
            }
        );
    }
})();
