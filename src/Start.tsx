import './Start.css'
import aboutMe from './assets/about-me.png'
import hobby from './assets/hobbies.png'
import programmingKnowledge from './assets/programming-tools.png'
import pastExperience from './assets/experience.png'
import java from './assets/java.png'
import python from './assets/python.png'
import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/javascript.png'
import sql from './assets/sql.png'
import r from './assets/r.png'
import github from './assets/github.png'
//hobbies
import eating from './assets/eating.gif'
import guitar from './assets/guitar.gif'
import f1 from './assets/f1.png'
import movies from './assets/movies.gif'

import { useState, useEffect, useRef} from "react"

function Start() {
  const [text, setText] = useState("");
  const [aboutOpacity, setAboutOpacity] = useState(0);
  const [hobbyOpacity, setHobbyOpacity] = useState(0);
  const [programmingOpacity, setProgrammingOpacity] = useState(0);
  const [pastOpacity, setPastOpacity] = useState(0);
  const message = "Hello, welcome to my website! Hover around to find out more about me.";
  const idxRef = useRef(0);

  const handleAbout = () => {
    setAboutOpacity(() => 1);
  };

  const handleHobby = () => {
    setHobbyOpacity(() => 1);
  };

  const handleProgramming = () => {
    setProgrammingOpacity(() => 1)
  }

  const handlePast = () => {
    setPastOpacity(() => 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const index = idxRef.current;

      if (index < message.length) {
        setText((prev) => prev + message[index]);
        idxRef.current = index + 1; 
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='start'> 
          <p className="text-center text-7xl font-black">{text}</p>
          <div className='flex items-center justify-between londrina-solid-light'>
            <img src={aboutMe} className="w-1/4 h-1/4 component-image" alt="About me" onClick={handleAbout} style={{opacity : aboutOpacity}}/>
            <p className="component-text" style={{opacity : aboutOpacity}}>My name is Tanishka Ghosh and I'm currently a 4th-year Computer Science student at Dalhousie University. </p>
          </div>
          <div className='flex flex-row-reverse items-center justify-between londrina-solid-light' style={{opacity: hobbyOpacity}}>
            <img src={hobby} className="w-1/4 h-1/4 component-image" alt="Hobbies" onClick={handleHobby} style={{opacity : hobbyOpacity}}/>
            <div className='component-text'>
                <p>Some of my hobbies include... </p>
                <div className='pl-10 pt-5'>
                    <div className='flex flex-row items-center'>
                        <p>Watching movies and tv shows </p>
                        <img className='w-20 h-20' src={movies} alt="movie icon"/>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p>Listening to music and playing the guitar </p>
                        <img className='w-20 h-20' src={guitar} alt="guitar icon"/>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p>Watching F1 races </p>
                        <img className='w-20 h-20 car' src={f1} alt="f1 icon"/>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p>Trying out new food </p>
                        <img className='w-20 h-20' src={eating} alt="eating icon"/>
                    </div>
                </div>
            </div>
          </div>
          <div className='flex items-center justify-between londrina-solid-light'>
            <img src={programmingKnowledge} className="w-1/3 h-1/3 component-image" alt="Programming Tools" onClick={handleProgramming} style={{opacity : programmingOpacity}}/>
            <div className='flex flex-wrap' style={{opacity : programmingOpacity}}>
                <img src={java} alt="java icon" title="Java" className="programming-img" />
                <img src={python} alt="python icon" title="Python" className="programming-img"/>
                <img src={html} alt="html icon" title="HTML" className="programming-img"/>
                <img src={css} alt="css icon" title="CSS" className="programming-img"/>
                <img src={javascript} alt="javascript icon" title="JavaScript" className="programming-img"/>
                <img src={sql} alt="sql icon" title="SQL" className="programming-img"/>
                <img src={r} alt="r icon" title="R" className="programming-img"/>
                <img src={github} alt="github icon" title="Github" className="programming-img"/>
                <p className="component-text" style={{opacity : programmingOpacity}}>...and much more.</p>
            </div>
          </div>
          <div className='flex flex-row-reverse items-center justify-between'>
            <img src={pastExperience} className="w-1/4 h-1/4 component-image" alt="Past Experience" onClick={handlePast} style={{opacity : pastOpacity}}/>
            <div className='londrina-solid-light'  style={{opacity : pastOpacity}}>
                <p className="component-text">I've done a co-op term in the Biotoxin Metrology Team at the NRC where I collaborated 
                with a team of over 15 researchers and scientists to create a user friendly app using R, Shiny, HTML, JavaScript, CSS, and Application Programming 
                Interfaces (APIs). </p>
                <br/>
                <p className="component-text">I've also done co-op term as a Development Intern at Dash Social (formerly Dash Hudson) where 
                  I worked collaboaratively with a team of six, as well as designers and product managers, to maintain a user friendly and intuitive website using tools such 
                   as JavaScript, Vue.js, CSS, HTML, and Tailwind. </p>
            </div>
            
          </div>
      </div>
    </>
  );
}

export default Start;