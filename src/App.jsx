import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import Form from './components/Form.jsx'
import Confirmation from './components/Confirmation.jsx'

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
        isSelected: false,
        id: item.id
      }))
      setRecipesInfo(relevantDataArray);
    }
  }, [data]);

  if (loading) {
    return <p className='small_padding'>Loading...</p>;
  }

  function handleSelectRecipe(cardInfo, id) {
    if (cardInfo.isSelected === true) { // Checks if that card is already selected
      const updatedArray = recipesInfo.map((obj) => {
        if (obj.id === id) {
          return { ...obj, isSelected: !obj.isSelected }; // Updates the value of isSelected to false 
        }
        return obj; // Return the unchanged object for other elements
      });
      setRecipesInfo(updatedArray) // Updates the whole recipesInfo state
      const result = selectedRecipes.filter(obj => obj.id !== id)
      setSelectedRecipes(result) // Saves that card in the selectedRecipes state
      return;
    }
    if (selectedRecipes.length === 2) { // Prevents more than recipes from being selected
      return;
    }
    const updatedArray = recipesInfo.map((obj) => { // Saves that card in the selectedRecipes state and changes its isSelected key to true
      if (obj.id === id) {
        return { ...obj, isSelected: !obj.isSelected };
      }
      return obj; // Return the unchanged object for other elements
    });
    setRecipesInfo(updatedArray) // Updates the whole recipesInfo state
    setSelectedRecipes(prevSelectedRecipes => [
      ...prevSelectedRecipes, { ...cardInfo, isSelected: !cardInfo.isSelected } // Saves that card in the selectedRecipes state
    ])
  }

  return (
    <>
      <div className='wrapper'>
        <nav></nav>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home recipesInfo={recipesInfo} selectedRecipes={selectedRecipes} handleSelectRecipe={handleSelectRecipe} />} />
            <Route path="/user-details" element={<Form selectedRecipes={selectedRecipes} />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer></footer>
    </>
  )
}

export default App
