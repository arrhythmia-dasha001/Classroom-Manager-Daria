import ProductCard from './ProductCard.jsx'

// map macht aus jedem Produkt eine ProductCard,
// key (die id) hilft React, die Einträge auseinanderzuhalten.
function ProductList({ products }) {
  return (
    <div className="liste">
      {products.map((product) => (
        <ProductCard key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  )
}

export default ProductList
