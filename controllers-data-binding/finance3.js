let finance3 = angular.module('finance3', []);

finance3.factory('currencyConverter', ['$http', function($http) {
    let YAHOO_FINANCE_URL_PATTERN =
        '//query.yahooapis.com/v1/public/yql?q=select * from ' +
        'yahoo.finance.xchange where pair in ("PAIRS")&format=json&' +
        'env=store://datatables.org/alltableswithkeys';
    let currencies = ['USD', 'EUR', 'CNY', 'RUB', 'JPY', 'KRW', 'MXN'];
    let usdToForeignRates = {};
    
    function convert(amount, inCurrency, outCurrency) {
        return amount * usdToForeignRates[outCurrency] / usdToForeignRates[inCurrency];
    }
    function refresh() {
        let url = YAHOO_FINANCE_URL_PATTERN
            .replace('PAIRS', 'USD' + currencies.join('","USD'));
        return $http.get(url).then(function(response) {
            let updatedRates = {};
            angular.forEach(response.data.query.results.rate, function(rate) {
                let currency = rate.id.substring(3,6);
                updatedRates[currency] = window.parseFloat(rate.Rate);
            });
            usdToForeignRates = updatedRates;
        });
    }
    refresh();
    
    return {
        currencies: currencies,
        convert: convert
    };
}]);