(function() {
    'use strict';

    angular
        .module('app.forecast')
        .filter('celsius', celsius);

    function celsius() {
        return function(kelvin) {
            return Math.round(parseFloat(kelvin) - 273.15);
        }
    }
})();
