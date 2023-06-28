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
                {/* <div className="card">
                    <p>title</p>
                    <p>subtitle</p>
                    <p>tags</p>
                    <p>img</p>
                </div> */}
                {/* {props.recipesInfo && cardElements} */}

                {/* <div className="card">
                    <p>title</p>
                    <p>subtitle</p>
                    <p>tags</p>
                    <p>img</p>
                </div>

                <div className="card">
                    <p>title</p>
                    <p>subtitle</p>
                    <p>tags</p>
                    <p>img</p>
                </div>
                <div className="card">
                    <p>title</p>
                    <p>subtitle</p>
                    <p>tags</p>
                    <p>img</p>
                </div>
                <div className="card">
                    <p>title</p>
                    <p>subtitle</p>
                    <p>tags</p>
                    <p>img</p>
                </div>
                <div className="card">
                    <p>title</p>
                    <p>subtitle</p>
                    <p>tags</p>
                    <p>img</p>
                </div>

                <div className="card">
                    <p>title</p>
                    <p>subtitle</p>
                    <p>tags</p>
                    <p>img</p>
                </div>
                <div className="card">
                    <p>title</p>
                    <p>subtitle</p>
                    <p>tags</p>
                    <p>img</p>
                </div>
                <div className="card">
                    <p>title</p>
                    <p>subtitle</p>
                    <p>tags</p>
                    <p>img</p>
                </div> */}
            </div>
            <Link to="/user-details" style={{ textDecoration: 'none' }}>
                <button>NEXT</button>
            </Link>


        </>
    )
}

export default Home
