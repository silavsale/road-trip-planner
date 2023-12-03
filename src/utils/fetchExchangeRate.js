async function fetchExchangeRate(apiKey, baseCurrency, targetCurrency) {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${baseCurrency}?apiKey=${apiKey}`
    );
    const data = await response.json();
    return data.rates[targetCurrency];
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return null;
  }
}

// Usage example
const apiKey = 'YOUR_API_KEY'; // Replace with your API key
fetchExchangeRate(apiKey, 'USD', 'CAD').then((rate) => {
  console.log('Exchange rate from USD to CAD:', rate);
});
