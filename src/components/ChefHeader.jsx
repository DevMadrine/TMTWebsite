import chefLogo from "/chef.jpg"
import "../css/ChefHeader.css"

export default function ChefHeader(){
    return(
        <header>
            <img src={chefLogo} alt="chef logo"/>
            <h1>Chef Claude</h1>
        </header>
    )
}