import Card from './Card.jsx'


function Home(props) {
    console.log('recipesInfo', props.recipesInfo)
    console.log('data', props.data)
    const cardElements = props.recipesInfo.map((recipeInfo) => (
        <Card
            key={recipeInfo.id}
            title={recipeInfo.title}
            subtitle={recipeInfo.subtitle}
            tags={recipeInfo.tags}
            img={recipeInfo.image}
        />
    ))
    return (
        <>
            <h1 className="title">Recipe List</h1>
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


        </>
    )
}

export default Home
