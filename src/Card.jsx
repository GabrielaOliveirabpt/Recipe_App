function Card(props) {
  // console.log('card', props)
  const tagsElements = props.tags.map((tag, index) => <div key={index}>{tag}</div>)

  return (
    <>
      <div className="card" onClick={() => props.handleSelectRecipe(props.recipeInfo)}>
        <img src={props.img} className="card-image" />
        <p className="title">{props.title}</p>
        <p className="subtitle">{props.subtitle}</p>
        <div className="tags-container">{tagsElements}</div>
      </div>

    </>
  )
}

export default Card