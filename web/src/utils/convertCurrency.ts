const convertCurrency = (currency: number) =>
  Number(currency).toLocaleString("pt-br", { style: "currency", currency: "BRL" });

export default convertCurrency;
