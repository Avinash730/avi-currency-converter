import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_8aPNGDHbau55vZqUIvJ4X3VMjy1gbwf4G8u0LBql');

export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;
}
