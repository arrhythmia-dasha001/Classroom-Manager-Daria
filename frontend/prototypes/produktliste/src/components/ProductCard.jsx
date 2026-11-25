// Eine Kachel – wird für jedes Produkt wiederverwendet.
// name und price kommen als Props von außen und werden nur gelesen.
function ProductCard({ name, price }) {
  const formattedPrice = price.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  })

  return (
    <div className="kachel">
      <h3>{name}</h3>
      <p>{formattedPrice}</p>
    </div>
  )
}

export default ProductCard
