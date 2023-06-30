import { useState } from 'react'
import { Link } from 'react-router-dom';

function Form(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  window.scrollTo(0, 0);

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
    } finally {
      props.setSelectedRecipes([])
      props.setRecipesInfo(null)
    }



  }

  const recipeNamesElement = props.selectedRecipes.map((recipe, index) => (< h2 className="blue" key={index} >- {recipe.title}</h2 >))


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
        <br />

        <form
          onSubmit={() => handleSubmit}
        >
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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="left" type="submit">BACK</button>
          </Link>
          <Link to="/confirmation" style={{ textDecoration: 'none' }}>
            <button className="btn-confirm" disabled={!(name && email)} type="submit">CONFIRM</button>
          </Link>
        </form>
        <br />

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Form
