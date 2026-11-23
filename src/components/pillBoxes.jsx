// Functions
/** @param {string[]} data  */
export function PillBoxes({data = []}) {
    return (
        <div className="pillbox-collection">
            {data.map((element, index) => {
                return (<button className="pillbox" key={index}>{element}</button>)
            })}
        </div>
    )
}
