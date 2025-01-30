
import { StrictMode } from 'react'
import './App.css'
import Landingpg from './components/Landingpg'
import Cards from './components/Cards'
import cimg from './assets/cimg.avif'
import Navbaar from './components/Navbaar'
import Footer from './components/Footer'

function App() {


  return (
    <div>
      <Navbaar/>
      <Landingpg/>
      <h2 className='ml-45 text-4xl mb-5'>Events</h2>
      <div className='flex justify-center items-center'>
      
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      </div>

      <Landingpg/>
      <h2 className='ml-45 text-4xl mb-5'>Flatmates with similar interests</h2>
      <div className='flex justify-center items-center'>
      
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      </div>

      <Landingpg/>
      <h2 className='ml-45 text-4xl mb-5'>Communities</h2>
      <div className='flex justify-center items-center'>
      
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      <Cards heading="EVENTS" image={cimg} title="title" description="description"/>
      </div>

      <Footer/>
    </div>
     
  )
}

export default App
