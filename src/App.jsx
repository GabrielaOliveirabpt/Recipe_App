import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home.jsx'
import Form from './Form.jsx'
import Confirmation from './Confirmation.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://code-challenge-mid.vercel.app/api/recipes');
        const jsonData = await response.json();
        setData(jsonData.recipes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home data={data} />} />
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
