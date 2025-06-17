import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Start from './Start.tsx'
import Projects from './Projects.tsx'
import Gallery from './Gallery.tsx'
import Contact from './Contact.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Start />
    <Projects/>
    <Gallery/>
    <Contact/>
  </StrictMode>,
)
