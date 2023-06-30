import { Link } from 'react-router-dom';
import Card from './Card.jsx'

function Home(props) {
  const cardElements = props.recipesInfo.map((recipeInfo) => (
    <Card
      key={recipeInfo.id}
      recipeInfo={recipeInfo}
      isSelected={recipeInfo.isSelected}
      id={recipeInfo.id}
      title={recipeInfo.title}
      subtitle={recipeInfo.subtitle}
      tags={recipeInfo.tags}
      img={recipeInfo.image}
      handleSelectRecipe={props.handleSelectRecipe}
      selectedRecipes={props.selectedRecipes}
    />
  ))

  return (
    <>
      <h1 className="app-title blue">Recipe List</h1>
      <h2 className="app-title">Please select two recipes:</h2>
      <div className="container-cards">
        {cardElements}
      </div >
      <div className="container-button">
        <Link to="/user-details" style={{ textDecoration: 'none' }}>
          <button className='btn-next' disabled={!(props.selectedRecipes.length === 2)}>NEXT</button>
        </Link>
      </div>
    </>
  )
}

export default Home
