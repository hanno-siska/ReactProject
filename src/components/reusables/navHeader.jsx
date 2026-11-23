// Functions
export function NavHeader({title, navlinks}) {
    return (
        <div className="navheader">
            <h1>{title}</h1>
            <div className="navheader-links">
                {navlinks.map((element, index) => {
                    return(<a key={index} href={element.destination}>{element.title}</a>)
                })}
            </div>
        </div>
    )
}
