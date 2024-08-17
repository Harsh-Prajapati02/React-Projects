import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from './Routes/AllRoutes';
import  Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
