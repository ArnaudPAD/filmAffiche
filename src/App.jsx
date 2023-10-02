import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Film from './components/Film'

function App() {
  let tableau = [
    {
      titre: "Film 1",
      resume: "Résumé du film 1",
      image: "image1.jpg",
      seance: "Séance 1"
    },
    {
      titre: "Film 2",
      resume: "Résumé du film 2",
      image: "image2.jpg",
      seance: "Séance 2"
    },
    {
      titre: "Film 3",
      resume: "Résumé du film 3",
      image: "image3.jpg",
      seance: "Séance 3"
    },
    {
      titre: "Film 4",
      resume: "Résumé du film 4",
      image: "image4.jpg",
      seance: "Séance 4"
    },
    {
      titre: "Film 5",
      resume: "Résumé du film 5",
      image: "image5.jpg",
      seance: "Séance 5"
    },
    {
      titre: "Film 6",
      resume: "Résumé du film 6",
      image: "image6.jpg",
      seance: "Séance 6"
    },
    {
      titre: "Film 7",
      resume: "Résumé du film 7",
      image: "image7.jpg",
      seance: "Séance 7"
    },
    {
      titre: "Film 8",
      resume: "Résumé du film 8",
      image: "image8.jpg",
      seance: "Séance 8"
    },
    {
      titre: "Film 9",
      resume: "Résumé du film 9",
      image: "image9.jpg",
      seance: "Séance 9"
    },
    {
      titre: "Film 10",
      resume: "Résumé du film 10",
      image: "image10.jpg",
      seance: "Séance 10"
    }
  ];

  const renderFilm = () => {
    return tableau.map((element, index) => {
      return (<Film titre={element.titre} resume={element.resume} image={element.image} seance={element.seance} index={index} />)
    })
  }

  return (
    <>
      {renderFilm()}
    </>
  )
}

export default App
