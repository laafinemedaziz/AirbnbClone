import './App.css'
import { Navbar } from './assets/Components/Navbar'
import {ImagesArea} from './assets/Components/ImagesArea'
import {About} from './assets/Components/About'
import {Contacts} from './assets/Components/Contacts'
function App() {

  return (
    <div className='app'>
      <Navbar />
      <ImagesArea />
      <About />
      <Contacts />
    </div>
  )
}

export default App
