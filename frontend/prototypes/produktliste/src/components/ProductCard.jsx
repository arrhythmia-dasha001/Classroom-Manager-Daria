import { memo } from 'react'

// Eine Kachel – wird für jedes Produkt wiederverwendet.
// Alle Werte kommen als Props von außen und werden nur gelesen.
function ProductCard({ id, name, price, isFav, onToggleFav }) {
  const formattedPrice = price.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  })

  return (
    <div className="kachel">
      <div className="kachel-kopf">
        <h3>{name}</h3>
        <button
          type="button"
          className="herz"
          aria-pressed={isFav}
          aria-label={`${name} als Favorit`}
          onClick={() => onToggleFav(id)}
        >
          {isFav ? '♥' : '♡'}
        </button>
      </div>
      <p>{formattedPrice}</p>
    </div>
  )
}

// memo: Kachel wird nur neu gezeichnet, wenn sich ihre Props ändern
export default memo(ProductCard)
