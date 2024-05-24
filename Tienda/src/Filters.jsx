import './Filters.css'
import { useState } from 'react'

export function Filters ( onChange ) {
    const [minPrice, setMinPrice] = useState(0)
    onChange(prevState => ({
        ...prevState,
        minPrice: event.target.value
    }))
    return (
        <section className='filters'>
            <div>
                <label htmlFor='price'>Precio mínimo</label>
                <input 
                    type='range'
                    id='price'
                    min='0'
                    max='1000'
                    onChange={() => setMinPrice(event.target.value)}
                /> 
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor='category'>Categoría</label>
                <select id='category'>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smarthphones'>Móviles</option>
                </select>
            </div>
        </section>
    )
}