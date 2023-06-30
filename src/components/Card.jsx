function Card(props) {

  const tagsElements = props.tags.map((tag, index) => <div key={index}>{tag}</div>)

  return (
    <>
      <div
        className={`card ${props.isSelected ? 'selected' : ''}`}
        onClick={() => props.handleSelectRecipe(props.recipeInfo, props.id)}>
        <img src={props.img} className="card-image" />
        <h4 className="title blue">{props.title}</h4>
        <p className="subtitle">{props.subtitle}</p>
        <div className="tags-container">{tagsElements}</div>
      </div>

    </>
  )
}

export default Card