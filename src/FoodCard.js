import React from 'react'


export default function FoodCard(props) {
    const {food, setYemek} = props
    return (
        <div className='flex flex-row w-full h-[100px] border-2 mt-2' onClick={() => setYemek(food)}>
            <img className="w-1/4" src={food.resim} alt={`a plate of ${food.ad}`}/>
            <div className='flex flex-col w-3/4 justify-center items-center'>
                <h1 className='text-3xl'>{food.ad}</h1>
            </div>
        </div>
    )
}