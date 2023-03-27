import { Routes, Route } from 'react-router-dom'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Homepage from './pages/Homepage/Homepage'
import About from './pages/About/About'
import Prices from './pages/Prices/Prices'
import FAQ from './pages/FAQ/FAQ'
import Contact from './pages/Contact/Contact'
function App() {

  return (
    <div className='app'>
      <Navbar />
      <div className='content'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/prices' element={<Prices/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
