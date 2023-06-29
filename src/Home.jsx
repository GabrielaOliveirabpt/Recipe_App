import Card from './Card.jsx'
import { Link } from 'react-router-dom';



function Home(props) {
  // console.log('recipesInfo', props.recipesInfo)
  // console.log('data', props.data)
  const cardElements = props.recipesInfo.map((recipeInfo) => (
    <Card
      key={recipeInfo.id}
      recipeInfo={recipeInfo}
      id={recipeInfo.id}
      title={recipeInfo.title}
      subtitle={recipeInfo.subtitle}
      tags={recipeInfo.tags}
      img={recipeInfo.image}
      handleSelectRecipe={props.handleSelectRecipe}
    />
  ))
  return (
    <>
      <h1 className="app-title">Recipe List</h1>
      <h2 className="app-title">Please select two recipes</h2>
      <div className="container-cards">
        {cardElements}
        <br /><br />

      </div >
      <div className="container-button">
        <Link to="/user-details" style={{ textDecoration: 'none' }}>
          <button className=''>NEXT</button>
        </Link>
      </div>


    </>
  )
}

export default Home
