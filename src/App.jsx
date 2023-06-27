import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home.jsx'
import Form from './Form.jsx'
import Confirmation from './Confirmation.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user-details" element={<Form />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div> */}

    </>
  )
}

export default App
