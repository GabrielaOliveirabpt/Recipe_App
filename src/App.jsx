import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home.jsx'
import Form from './Form.jsx'
import Confirmation from './Confirmation.jsx'

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [recipesInfo, setRecipesInfo] = useState(null);
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://code-challenge-mid.vercel.app/api/recipes');
        const jsonData = await response.json();
        setData(jsonData.recipes);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Finish loading
        setLoading(false);
      }
    };



    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      // Extract the relevant information and save it to another object

      const relevantDataArray = data.map((item) => ({
        // Assign the relevant properties from data
        image: item.image && item.image.url,
        title: item.title,
        subtitle: item.subtitle,
        tags: item.attributes.map((tag) => (tag.key)),


        id: item.id
      }))

      setRecipesInfo(relevantDataArray);
    }
  }, [data]);


  if (loading) {
    return <p>Loading...</p>;
  }

  function handleSelectRecipe(cardInfo) {

    if (selectedRecipes.length === 2 || selectedRecipes.includes(cardInfo)) {
      return;
      // const hasSpecificValue = dataArray.some((obj) => obj.hasOwnProperty('name') && obj.name === 'John');

      // console.log(hasSpecificValue); // true

    }
    setSelectedRecipes(prevSelectedRecipes => [
      ...prevSelectedRecipes, cardInfo
    ])


  }
  console.log('selectedRecipes', selectedRecipes)

  return (
    <>
      <nav></nav>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home data={data} handleSelectRecipe={handleSelectRecipe} recipesInfo={recipesInfo} />} />
          <Route path="/user-details" element={<Form selectedRecipes={selectedRecipes} />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </>
  )
}

export default App
