import { useState} from "react"
import './Gallery.css'
import eating from './assets/eating.gif'
import guitar from './assets/guitar.gif'
import f1 from './assets/f1.png'
import movies from './assets/movies.gif'
import left from './assets/left-arrow.png'
import right from './assets/right-arrow.png'


function Gallery(){
    const [picIndex, setPicIndex] = useState(0);
    const imageArray = [eating, guitar, f1, movies];

    return(
        <>
        <div className="h-screen">
            <p className="text-center text-7xl font-black pt-10 pb-10">Some Pictures</p>
            <div className="gallery">
                <button className="arrow" onClick={() => setPicIndex((prev) => prev - 1)} disabled= {picIndex > 0 ? false : true}>
                    <img src={left} alt="left arrow" style={{opacity: picIndex > 0 ? 1 : 0.5}} className="h-32 w-32"/>
                </button>
                <img className="gallery-pic" alt="current gallery image" src={imageArray[picIndex]} />
                <button  className="arrow" onClick={() => setPicIndex((prev) => prev + 1)} disabled= {picIndex < imageArray.length - 1 ? false : true}>
                    <img src={right} alt="right arrow" style={{opacity: picIndex < imageArray.length - 1 ? 1 : 0.5}} className="h-32 w-32"/>
                </button>
            </div>
        </div>
        </>
    );
}

export default Gallery;