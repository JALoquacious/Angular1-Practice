let finance2 = angular.module('finance2', []);

finance2.factory('currencyConverter', function() {
    let currencies = ['USD', 'EUR', 'CNY'];
    let usdToForeignRates = {
        USD: 1,
        EUR: 0.74,
        CNY: 6.09
    };
    
    function convert(amount, inCurrency, outCurrency) {
        return amount * usdToForeignRates[outCurrency] / usdToForeignRates[inCurrency];
    }
    return {
        currencies: currencies,
        convert: convert
    };
});