const getCurrencies = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';

  const response = await fetch(url);
  const currencies = await response.json();
  return (currencies);
};

export default getCurrencies;
