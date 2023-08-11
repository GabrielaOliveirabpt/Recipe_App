function Card(props) {

  const mealAttributeKeys = {
    no_gluten_ingredients: 'no gluten',
    under_30min: 'under 30 min.',
    poultry: 'poultry',
    kid_friendly: 'kid friendly',
    dairy_free: 'dairy free',
    meat: 'meat',
    optional_heat: 'optional heat',
    vegetarian: 'vegetarian',
  };

  const tagsElements = props.tags.map((tag, index) => <div key={index}>{mealAttributeKeys[tag].toUpperCase()}</div>)

  return (
    <>
      <div
        className={`card ${props.isSelected && 'selected'}`}
        onClick={() => props.handleSelectRecipe(props.recipeInfo, props.id)}>
        <img src={props.img} className="card-image" alt={`recipe image of ${props.title}`} />
        <div className="card-text">
          <h3 className="title blue">{props.title}</h3>
          <p className="subtitle">{props.subtitle}</p>
          <div className="tags-container">{tagsElements}</div>
        </div>
      </div>

    </>
  )
}

export default Card