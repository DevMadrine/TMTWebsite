import "../css/JournalHeader.css"
import "../css/index.css"

export function JournalHeader(){
    return(
        <>
            <header className="header-title">
                <img src="../../public/Globe.png" alt="Globe" className="journal-image"/>
                <h3 className="journal-title">my travel journal</h3>
            </header>
        </>
    )
}