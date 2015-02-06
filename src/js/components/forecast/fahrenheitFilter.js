(function() {
    'use strict';

    angular
        .module('app.forecast')
        .filter('fahrenheit', fahrenheit);

    function fahrenheit() {
        return function(kelvin) {
            return Math.round(parseFloat(kelvin - 273.15) * 1.8 + 32);
        }
    }
})();

