import "../css/Entry.css"

export default function Jokes(props){
    return(
        <>
            <h1 className="header-title">My favorite Jokes</h1>
            <ul>
                <li className="list-name">{props.setup}</li>
                <li className="list-name">{props.punchline}</li>
            </ul>
        </>
    )
}