const convertCurrency = (currency: number) =>
  currency.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

export default convertCurrency;
