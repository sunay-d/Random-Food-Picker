import React from 'react'
import useToggle from './useToggle.js'

export default function Yemek(props) {
    const {yemek} = props
    const malzemeler = yemek.malzeme.map(el => <li key={el.id}>{el}</li>)
    const [showIngredients, toggleIngredients] = useToggle(false)
    const [showRecipe, toggleRecipe] = useToggle(false)
    return(
        <div className='flex flex-col'>
            <img src={yemek.resim} className="rounded w-full" alt={`${yemek.ad} resmi`}/>
            <h1 className='text-2xl pt-2'>{yemek.ad}</h1>
            <button className='mt-5 border-2 rounded-full' onClick={toggleIngredients}>{showIngredients ? 'Malzemeleri Gizle' : 'Malzemeleri Göster'}</button>
            {showIngredients && 
            <ul className='text-left'>
                {malzemeler}
            </ul>
            }
            <button className='mt-5 border-2 rounded-full' onClick={toggleRecipe}>{showRecipe ? 'Tarifi Kapat' : 'Tarifi Aç'}</button>
            {showRecipe && <p>{yemek.tarif}</p>}
            
        </div>
    )
}