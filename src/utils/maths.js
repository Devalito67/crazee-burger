export function formatPrice(priceToFormat) {
  let price = priceToFormat

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €"
  price = replaceFrenchCommaWithDot(price)

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))
  return price
}

export function basketAmount(basket) {
  const basketProductsAmount = basket.map((product) => product.price * product.quantity);
  const basketTotal = basketProductsAmount.reduce((total, productAmount) => { return total + productAmount }, 0);
  return basketTotal
}
