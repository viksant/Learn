import '../components/Products.css'

import { AddToCartIcon } from '../components/Icons'
export function Products ({ products, category }) {
    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button><AddToCartIcon /></button>
                        </div>
                        <div>
                            <strong>Category - {product.category}</strong>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

/* export function DropdownMenu ( {onChange} ) {
    return (
    <div className="categoryFilter">
        <h2>Category Filter</h2>
        <select  className="categoryMenu" onChange={(e) => onChange(e.target.value)}>
            <option value="all">All</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="groceries">Groceries</option>
        </select>
    </div>
    )
} */