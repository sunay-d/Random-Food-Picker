import './App.css';
import React, { useRef } from 'react';
import Yemek from './Yemek';
import yemekListesi from './data.js'
import FoodCard from './FoodCard';

function App() {
  let select = useRef(null)
  let search = useRef(null)

  const [tur, setTur] = React.useState("hepsi")
  const [liste, setListe] = React.useState(yemekListesi.sort((a,b) => a.ad > b.ad) )
  const [yemek, setYemek] = React.useState(null)

  function Random() {
    let randomIndex
    let categoryList
    if (tur==="hepsi") {
      categoryList = yemekListesi
      randomIndex = Math.floor(Math.random()*yemekListesi.length)
    }else {
      categoryList = yemekListesi.filter(el => el.tur===tur)
      randomIndex = Math.floor(Math.random()*categoryList.length)
    }
    setYemek(categoryList[randomIndex])
  }

  function getSearchList(search) {
    setYemek(null)
    let searchValue = search.toLowerCase()
    if (searchValue){
      const liste = yemekListesi.filter(el => el.ad.toLowerCase()===searchValue)
      setListe(liste)
    }
  }

  function getCategoryList(tur) {
    setYemek(null)
    let liste
    if (tur === "hepsi"){
      liste = yemekListesi
    }else {
      liste = yemekListesi.filter(el => el.tur===tur)
    }

    setListe(liste)
  }

  const yemekler = liste.map(el => (<FoodCard key={el.id} food={el} setYemek={setYemek}/>))

  return (
    <div className="App flex flex-col text-center gap-5 pt-8 p-5 w-100 h-screen max-w-[640px] m-auto bg-slate-100">
      <h1 className='text-4xl'>Bugün Ne Yesem?</h1>
      <div className='flex flex-row w-full gap-1'>
        <input ref={search} type="text" placeholder='Ara' className='border-2 rounded-full ps-5 p-2 w-3/4'></input>
        <button className='w-1/4 border-2 rounded-full' onClick={() => getSearchList(search.current.value)}>Ara</button>
      </div>
      <select ref={select} onChange={() => setTur(select.current.value)} className='text-center rounded-full p-2 bg-slate-200'>
      <option value={"hepsi"}>Kategori Seç</option>
        <option value={"aksam"}>Akşam Yemeği</option>
        <option value={"tatli"}>Tatlı</option>
        <option value={"cay"}>Çayın yanında</option>
      </select>
      <div className='flex flex-row w-full'>
        <button className='border-2 rounded-full p-2 bg-background bg-orange-500 text-white w-1/2' onClick={Random}>Rastgele Getir</button>
        <button className='border-2 rounded-full p-2 bg-background bg-orange-300 text-black w-1/2' onClick={() => getCategoryList(select.current.value)}>Hepsini Getir</button>
      </div>
      {yemek ? <Yemek yemek={yemek}/> : <div>{yemekler}</div>}
      
    </div>
  );
}

export default App;
