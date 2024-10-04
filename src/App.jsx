import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Knowledge, Projects, Contact } from './pages';

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/jason-whitby-3d-cv-adventure' element={ <Home/> } />
          <Route path='/jason-whitby-3d-cv-adventure/about' element={ <About/> } />
          <Route path='/jason-whitby-3d-cv-adventure/knowledge' element={ <Knowledge/> } />
          <Route path='/jason-whitby-3d-cv-adventure/projects' element={ <Projects/> } />
          <Route path='/jason-whitby-3d-cv-adventure/contact' element={ <Contact/> } />                    
        </Routes>
      </Router>
    </main>
  )
}

export default App