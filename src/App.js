import './App.css';
import React, { useRef } from 'react';
import Yemek from './Yemek';
import yemekListesi from './data.js'

function App() {
  let select = useRef(null)
  const [tur, setTur] = React.useState("aksam")
  const [yemek, setYemek] = React.useState(null)

  function Random() {
    const liste = yemekListesi.filter(el => el.tur===tur)
    const randomIndex = Math.floor(Math.random()*liste.length)
    setYemek(liste[randomIndex])
  }

  return (
    <div className="App flex flex-col text-center gap-5 pt-8 p-5 w-100 max-w-[640px] m-auto bg-slate-100">
      <h1 className='text-4xl'>Bugün Ne Yesem?</h1>
      <select ref={select} onChange={() => setTur(select.current.value)} className='text-center rounded-full p-2 bg-slate-200'>
        <option value={"aksam"}>Akşam Yemeği</option>
        <option value={"tatli"}>Tatlı</option>
        <option value={"cay"}>Çayın yanında</option>
      </select>
      <button className='border-2 rounded-full p-2 bg-background bg-orange-500 text-white' onClick={Random}>Rastgele Getir</button>
      {yemek && <Yemek yemek={yemek}/>}
    </div>
  );
}

export default App;
