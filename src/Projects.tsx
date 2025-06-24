//import { useState, useEffect, useRef} from "react"
import Card from './Card.tsx'
import plankton from './assets/plankton-game.gif'
import quickcash from './assets/quickcash.gif'
import portfolio from './assets/portfolio.gif'

function Projects() {


  return (
    <>
      <div className='bg-neutral-100 w-99vw'> 
        <p className='text-black text-center p-5 text-5xl'>Some Projects</p>
        <div className='flex justify-center'>
            <Card img={plankton} desc="An interactive game developed in a group of 5 for the NASA Space Apps Challenge in order to educate others on phytoplankton." langs={["JavaScript","HTML", "CSS", "React"]}/>
            <Card img={quickcash} desc="An on-going in-class group project to create a job finding mobile app. Has user management and will integrate PayPal in the future." langs={["Java", "Android Studio", "JUnit Testing", "Espresso Testing", "Firebase Realtime DB", "Firebase Authentication"]}/>
            <Card img={portfolio} desc="A portfolio website to showcase information about myself." langs={["JavaScript", "HTML", "CSS", "React", "Typescript", "Tailwind"]}/>
        </div>
      </div>
    </>
  );
}

export default Projects;