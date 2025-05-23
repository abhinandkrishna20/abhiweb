
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header2'
import MainLayout from './Layout/MainLayout'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

import Blog from './components/Blog'


function App() {


  return (
    <Router>
    {/* <div className='bg-white dark:bg-gray-800 w-full min-h-screen  flex flex-col'>
     <Header />
     <main className="flex-grow m-3 text-white">
      
          
        this ithe main content
      </main>
     <Footer />
  
    </div> */}
    <Routes>
      <Route path="/" element={<MainLayout />} >
      <Route index   element={<Hero />}/>
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact/>} />
      </Route>
    </Routes>
    </Router>
  )
}

export default App
