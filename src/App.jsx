import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Resume from './sections/Resume';
import ProjectsPage from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <ProjectsPage />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
