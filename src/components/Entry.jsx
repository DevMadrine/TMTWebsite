import "../css/Entry.css"


export default function Entry(props) {
    return (
        <>
                <article className="image-container">
                    <img className="container-image" src={props.image.src} alt={props.image.alt}/>
                    <div className="image-info">
                        <div className="location-details">
                            <img className="location" src="../../public/location.png" alt="location"/>
                            <h3>{props.country}<span><a href={props.googleMapsLink}>View on Google maps</a></span></h3>
                        </div>
                        <h1>{props.title}</h1>
                        <p>{props.date}</p>
                        <p className="description">
                            {props.description}
                        </p>
                    </div>
            </article>
        </>
    )
}
