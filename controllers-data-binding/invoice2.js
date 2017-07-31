let invoice2 = angular.module('invoice2', ['finance2']);

invoice2.controller('InvoiceController', ['currencyConverter', function(currencyConverter) {
    this.qty = 1;
    this.cost = 2;
    this.inCurrency = 'EUR';
    this.currencies = currencyConverter.currencies;
    
    this.total = function(outCurrency) {
        return currencyConverter.convert(this.qty * this.cost, this.inCurrency, outCurrency);
    };
    this.pay = function() {
        window.alert('Thanks!');
    };
}]);