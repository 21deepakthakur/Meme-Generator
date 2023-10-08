import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Meme from '../components/Meme'

function App() {

  const[meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: "http://i.imgflip.com/1bij.jpg" 
  })

  const[allMemes, SetAllMemes] = useState([])

  useEffect(function(){
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => SetAllMemes(data.data.memes))
  },[])

  function saveText(event){
    const {name, value} = event.target
    setMeme(function(prevData){
      return{
        ...prevData,
        [name]: value
      }
    })
  }

  function changeImage(){
    const randomNumer = Math.floor(Math.random() * allMemes.length)
    const newURL = allMemes[randomNumer].url

    setMeme(function(prevState){
      return{
        ...prevState,
        url: newURL
      }
    })
  }

  return (
    <>
      <Navbar />  
      <Meme
        handleTextChange = {saveText}
        handleImageChange = {changeImage}
        topText = {meme.topText}
        bottomText = {meme.bottomText}
      />
      <div className = "meme--container">
        <h2 className = "toptext">{meme.topText}</h2>
        <img src = {meme.url} className = "meme--image"/>
        <h2 className = "bottomtext">{meme.bottomText}</h2>
      </div>
    </>
  )
}

export default App
