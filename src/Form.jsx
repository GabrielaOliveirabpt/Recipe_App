import { Link } from 'react-router-dom';

function Form(props) {
    console.log('props', props.selectedRecipes)
    const recipeNamesElement = props.selectedRecipes.map((recipe, index) => (< p key={index} > {recipe.title}</p >))
    return (
        <>
            (Form)

            <div className="selected-recipes-container">
                <h2>You have selected the following recipes:</h2>
                {recipeNamesElement}
                <h2>Please fill in the form to proceed:</h2>
                <p>name</p>
                <p>email</p>

                <Link to="/confirmation" style={{ textDecoration: 'none' }}>
                    <button>CONFIRM</button>
                </Link>
            </div>

        </>
    )
}

export default Form
