import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
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
    return <p>Loading...</p>;
  }

  function handleSelectRecipe(cardInfo, id) {

    // se a array tiver mais que duas receitas ou se essa receita ja foi selecionada pare de executar essa funcao
    if (cardInfo.isSelected === true) {
      // cardInfo.isSelected = false;

      const updatedArray = recipesInfo.map((obj) => {
        if (obj.id === id) {
          return { ...obj, isSelected: !obj.isSelected }; // Update the name property of the desired object
        }
        return obj; // Return the unchanged object for other elements
      });

      setRecipesInfo(updatedArray)


      const result = selectedRecipes.filter(obj => obj.id !== id)
      setSelectedRecipes(result)

      return;
    }

    if (selectedRecipes.length === 2) {
      return;
    }


    const updatedArray = recipesInfo.map((obj) => {
      if (obj.id === id) {
        return { ...obj, isSelected: !obj.isSelected }; // Update the name property of the desired object
      }
      return obj; // Return the unchanged object for other elements
    });

    setRecipesInfo(updatedArray)

    setSelectedRecipes(prevSelectedRecipes => [
      ...prevSelectedRecipes, { ...cardInfo, isSelected: !cardInfo.isSelected }
    ])


  }

  return (
    <>
      <nav></nav>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home data={data} selectedRecipes={selectedRecipes} handleSelectRecipe={handleSelectRecipe} recipesInfo={recipesInfo} />} />
          <Route path="/user-details" element={<Form selectedRecipes={selectedRecipes} />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
      <footer></footer>
    </>
  )
}

export default App
