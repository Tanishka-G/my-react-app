import { useState} from "react"
import './Gallery.css'
import pic4 from './assets/pic-1.jpg'
import pic3 from './assets/pic-2.jpg'
import pic1 from './assets/pic-3.jpg'
import pic2 from './assets/pic-4.jpg'
import pic5 from './assets/pic-5.jpg'
import left from './assets/left-arrow.png'
import right from './assets/right-arrow.png'


function Gallery(){
    const [picIndex, setPicIndex] = useState(0);
    const imageArray = [pic1, pic2, pic3, pic4, pic5];

    return(
        <>
        <div className="h-screen">
            <p className="text-center text-5xl pt-10 pb-10">Some Pictures</p>
            <div className="gallery">
                <button className="arrow" onClick={() => setPicIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length)}>
                    <img src={left} alt="left arrow" className="h-32 w-32 m-5 p-3"/>
                </button>
                <img className="gallery-pic" alt="current gallery image" src={imageArray[picIndex]} />
                <button  className="arrow" onClick={() => setPicIndex((prev) => (prev + 1) % imageArray.length)}>
                    <img src={right} alt="right arrow" className="h-32 w-32 m-5 p-3"/>
                </button>
            </div>
        </div>
        </>
    );
}

export default Gallery;