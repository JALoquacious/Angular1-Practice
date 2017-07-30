let invoice3 = angular.module('invoice3', ['finance3']);

invoice3.controller('InvoiceController', ['currencyConverter', InvoiceController]);

function InvoiceController(currencyConverter) {
    let qty        = 1,
        cost       = 2,
        inCurrency = 'EUR',
        currencies = currencyConverter.currencies;
    
    function total(outCurrency) {
        return currencyConverter.convert(this.qty * this.cost, this.inCurrency, outCurrency);
    };

    function pay() {
        window.alert('Thanks!');
    };

    angular.extend(this, {
        qty        : qty,
        cost       : cost,
        inCurrency : inCurrency,
        currencies : currencies,
        total      : total,
        pay        : pay
    });
};
