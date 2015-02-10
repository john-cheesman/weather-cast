(function() {
    'use strict';

    angular
        .module('app.forecast')
        .controller('ForecastController', ForecastController);

    ForecastController.$inject = ['forecastService'];

    function ForecastController(forecastService) {
        var vm = this;

        vm.date = new Date();
        vm.query = null;
        vm.location = null;
        vm.forecasts = null;

        vm.getForecast = function() {
            forecastService.get({location: vm.query})
                .$promise.then(function(data) {
                    vm.location = data.city;
                    vm.forecasts = data.list;
                });
        };
    }
})();
