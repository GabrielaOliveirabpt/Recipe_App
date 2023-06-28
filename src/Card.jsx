function Card(props) {
    console.log('card', props)
    const tagsElements = props.tags.map((tag, index) => <div key={index}>{tag}</div>)

    return (
        <>
            <div className="card">
                <img src={props.img} className="card-image" />
                <p>{props.title}</p>
                <p>{props.subtitle}</p>
                <div className="tags-container">{tagsElements}</div>
            </div>

        </>
    )
}

export default Card