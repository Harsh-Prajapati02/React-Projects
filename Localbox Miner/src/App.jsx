import './App.css'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='col-10'>
          <ThemeBtn />
          <Card />
        </div>
      </div>

    </>
  )
}

export default App
