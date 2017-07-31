let invoice1 = angular.module('invoice1', []);

invoice1.controller('InvoiceController', function() {
    this.qty = 1;
    this.cost = 2;
    this.inCurrency = 'EUR';
    this.currencies = ['USD', 'EUR', 'CNY'];
    this.usdToForeignRates = {
        USD: 1,
        EUR: 0.74,
        CNY: 6.09
    };
    
    this.total = function(outCurrency) {
        return this.convertCurrency(this.qty * this.cost, this.inCurrency, outCurrency);
    };
    this.convertCurrency = function(amount, inCurrency, outCurrency) {
        return amount * this.usdToForeignRates[outCurrency] / this.usdToForeignRates[inCurrency];
    };
    this.pay = function pay() {
        window.alert('Thanks!');
    };
});