import React from 'react'
import useToggle from './useToggle.js'

export default function Yemek(props) {
    const {yemek} = props
    const malzemeler = yemek.malzeme.map(el => <li className="ml-4" key={el.id}>{el}</li>)
    const tarif = yemek.tarif.map(el => <li className="ml-4 mb-2" key={el.id}>{el}</li>)
    const [showIngredients, toggleIngredients] = useToggle(false)
    const [showRecipe, toggleRecipe] = useToggle(false)
    return(
        <div className='flex flex-col bg-white p-5 bg-slate-100'>
            <img src={yemek.resim} className="rounded w-full max-h-[20rem]" alt={`${yemek.ad} resmi`}/>
            <h1 className='text-2xl pt-2'>{yemek.ad}</h1>
            <button className='mt-5 border-2 rounded-full p-2 bg-orange-300' onClick={toggleIngredients}>{showIngredients ? 'Malzemeleri Gizle' : 'Malzemeleri Göster'}</button>
            {showIngredients && 
            <ul className='text-left list-disc mt-4'>
                {malzemeler}
            </ul>
            }
            <button className='mt-5 border-2 rounded-full mb-4 p-2 bg-orange-300' onClick={toggleRecipe}>{showRecipe ? 'Tarifi Kapat' : 'Tarifi Aç'}</button>
            {showRecipe && <ul className='text-left list-decimal'>{tarif}</ul>}
            
        </div>
    )
}