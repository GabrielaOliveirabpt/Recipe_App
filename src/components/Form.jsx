import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Form(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top
  }, []);

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('callingggg')

    // Create a data object with the form values
    const formData = {
      firstName: name,
      email: email,
      recipes: props.selectedRecipes.map((recipe) => recipe.id)
    };

    try {
      // Send a POST request to the server
      const response = await fetch('https://code-challenge-mid.vercel.app/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Form data successfully sent
        console.log('Form data sent successfully');
        // Reset the form fields
        setName('');
        setEmail('');
        navigate('/confirmation')
      } else {
        // Handle errors if the request was not successful
        console.log('Error sending form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const recipeNamesElement = props.selectedRecipes.map((recipe, index) => (<h2 className="blue" key={index} >- {recipe.title}</h2>))


  return (
    <>
      <div className="selected-recipes-container">
        <br />
        <br />
        <h2>You have selected the following recipes:</h2>
        <br />
        {recipeNamesElement}
        <br />
        <h3>Please fill in the form to proceed:</h3>

        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <br />
            <input type="text" id="name" autoFocus name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <br />

          <label>
            Email:
            <br />
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <br />
          <br />
          <br />
          <div className="btns-container">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <button className="left" type="submit">BACK</button>
            </Link>
            <button className="btn-confirm" disabled={!(name && email)} type="submit">CONFIRM</button>
          </div>

        </form>
        <br />
      </div>

    </>
  )
}

export default Form
