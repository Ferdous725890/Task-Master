import { Outlet } from 'react-router'
import './App.css'
import Navbar from './pages/navbar'
import Footer from './pages/footer'

function App() {

  return (
    <div>

      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>

  )
}

export default App
