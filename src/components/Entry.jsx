import "../css/Entry.css"

export default function Entry() {
    return (
        <>
            <article className="journal">
                <div className="image-container">
                    <img className="container-image" src="../../public/Rectangle%2077.png" alt=""/>
                    <div className="image-info">
                        <div className="location-details">
                            <img className="location" src="../../public/location.png" alt="location"/>
                            <h3>JAPAN<span><a href="">View on Google maps</a></span></h3>
                        </div>
                        <h1>Mount Fuji</h1>
                        <p>12th, JUNE, 2024 - 16th JUNE, 2024</p>
                        <p className="description">
                            Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount
                            Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                        </p>
                    </div>
                </div>
            </article>
        </>
    )
}
