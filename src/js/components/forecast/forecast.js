(function() {
    'use strict';

    angular
        .module('app.forecast')
        .controller('Forecast', Forecast);

    Forecast.$inject = ['dataSource'];

    function Forecast(dataSource) {
        var vm = this;

        vm.date = new Date();
        vm.location = null;
        vm.forecasts = null;

        vm.getForecast = function() {
            dataSource.get({location: 'derby'})
                .$promise.then(function(data) {
                    vm.location = data.city;
                    vm.forecasts = data.list;
                });
        };

        vm.getForecast();
    }
})();
