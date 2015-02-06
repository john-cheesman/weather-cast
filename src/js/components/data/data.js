(function() {
    'use strict';

    angular
        .module('app.data', ['ngResource'])
        .factory('dataSource', dataSource);

    dataSource.$inject = ['$resource'];

    function dataSource($resource) {
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
