// Functions
export function BoxCard({title, category, description, duration, price = 0}) {
    return (
        <div className="boxcard">
            <p>{category}</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Maht: {duration}</p>
            <p>Hind: {price}</p>
        </div>
    )
}

export function BoxCardCollection({cards = []}) {
    return (
        <div className="boxcard-collection">
            {cards.map((element, index) => {
                return (<BoxCard key={index} {...element}/>)
            })}
        </div>
    )
}