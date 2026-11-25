import ProductList from './components/ProductList.jsx'
import { products } from './data/products.js'

function App() {
  return (
    <main className="page">
      <h1>Frau Lehmanns Shop</h1>
      <ProductList products={products} />
    </main>
  )
}

export default App
