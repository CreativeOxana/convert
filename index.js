const amount = prompt('Zadejte množství: ');
const currency = prompt('Zadejte kód měny (EUR, GBP, USD, BTC): ');

const convertToCZK = (amount, currency) => {
  let rate;

  if (currency === 'EUR') {
    rate = 24.47;
  } else if (currency === 'GBP') {
    rate = 28.09;
  } else if (currency === 'USD') {
    rate = 24.81;
  } else if (currency === 'BTC') {
    rate = 478637;
  } else {
    return null;
  }
  return Math.round(rate * amount);
};

const conversionResult = convertToCZK(amount, currency);

document.body.innerHTML += `Váš směnný kurz je ${conversionResult} Kč`;

// document.body.innerHTML += `100 € je ${convertToCZK(100, 'EUR')} Kč<br>`;
// document.body.innerHTML += `£ 100 je ${convertToCZK(100, 'GBP')} Kč<br>`;
// document.body.innerHTML += `$ 100 je ${convertToCZK(100, 'USD')} Kč<br>`;
// document.body.innerHTML += `100 bitcoinů je ${convertToCZK(100, 'BTC')} Kč<br>`;
