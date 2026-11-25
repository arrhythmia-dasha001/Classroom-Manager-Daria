import ProductCard from './ProductCard.jsx'

// map macht aus jedem Produkt eine ProductCard,
// key (die id) hilft React, die Einträge auseinanderzuhalten.
function ProductList({ products, favs, onToggleFav }) {
  return (
    <div className="liste">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          isFav={favs.includes(product.id)}
          onToggleFav={onToggleFav}
        />
      ))}
    </div>
  )
}

export default ProductList
