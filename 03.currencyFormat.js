function currencyFormat(separator, symbol, symbolFirst, formatter){

return (value) => formatter(separator, symbol, symbolFirst, value);

}

function currencyFormatter(separator, symbol, symbolFirst, value) { 

    let result = Math.trunc(value) + separator; 

    result += value.toFixed(2).substr(-2,2); 

    if (symbolFirst) return symbol + ' ' + result; 

    else return result + ' ' + symbol; 

} 

console.log(currencyFormatter(5345));