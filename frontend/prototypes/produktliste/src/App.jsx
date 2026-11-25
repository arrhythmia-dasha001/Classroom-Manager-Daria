import { useCallback, useEffect, useState } from 'react'
import ProductList from './components/ProductList.jsx'
import { products } from './data/products.js'

function App() {
  // State: React merkt sich die Favoriten und zeichnet bei Änderung neu
  // beim Start laden: die Funktion läuft nur beim ersten Rendern
  // (mit useEffect + [] hat der Speicher-Effekt die Favoriten vorher mit [] überschrieben)
  const [favs, setFavs] = useState(() => JSON.parse(localStorage.getItem('favs') ?? '[]'))

  // bei Änderung speichern
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [favs])

  // useCallback: dieselbe Funktion bei jedem Rendern, sonst hilft memo nicht
  const toggleFav = useCallback((id) => {
    // nicht favs.push(...): immer ein neues Array an den Setter geben
    setFavs((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    )
  }, [])

  return (
    <main className="page">
      <h1>Frau Lehmanns Shop</h1>
      <p>Favoriten: {favs.length}</p>
      <ProductList products={products} favs={favs} onToggleFav={toggleFav} />
    </main>
  )
}

export default App
