const getCurrencies = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';

  const response = await fetch(url);
  const currencies = await response.json();
  // console.log(currencies);
  return (currencies);
};

// getCurrencies();

export default getCurrencies;
