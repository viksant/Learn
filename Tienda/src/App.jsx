import { useState } from 'react'
import './App.css'
import { /* DropdownMenu, */ Products } from './Products.jsx'
import { products as initialProducts } from '../mocks/products.json'
import { Filters } from './Filters.jsx'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' || product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  console.log(filteredProducts)

  return (
    <>
    <h1>React Shop</h1>
      <Filters changeFilters={setFilters} />
      <Products products={filteredProducts}/>
    </>
      
  )
}

export default App
