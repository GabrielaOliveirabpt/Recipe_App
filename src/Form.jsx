import { useState } from 'react'
import { Link } from 'react-router-dom';

function Form(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")


  // console.log('props', props.selectedRecipes)
  const recipeNamesElement = props.selectedRecipes.map((recipe, index) => (< p key={index} > {recipe.title}</p >))

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object with the form values
    const formData = {
      name: name,
      email: email,
      selectedRecipes: props.selectedRecipes
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
      } else {
        // Handle errors if the request was not successful
        console.log('Error sending form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  }



  return (
    <>
      <div className="selected-recipes-container">
        <h2>You have selected the following recipes:</h2>
        {recipeNamesElement}
        <h2>Please fill in the form to proceed:</h2>

        <form
          onSubmit={() => handleSubmit}
        >
          <label>
            First Name:
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <br />

          <label>
            Email:
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <br />
          <Link to="/confirmation" style={{ textDecoration: 'none' }}>
            <button type="submit">CONFIRM</button>
          </Link>
        </form>
        <br />

      </div>

    </>
  )
}

export default Form
