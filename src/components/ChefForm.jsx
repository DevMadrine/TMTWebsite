import "../css/ChefForm.css"
import React from "react";
export default function ChefForm(){

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log("ingredients")
    }

    function handleClick(){
        return func("Definitely")
    }

    const [count, setCount] = React.useState(0)
    function add(){
        setCount(count + 1)
        console.log("Add")
    }

    function minus(){
        setCount(count -1)
        console.log("Minus")
    }

    const [result,func ]= React.useState("Add ingredient")
    // func("hello")
    console.log(result)

    return(
        <main>
            <form onSubmit={handleSubmit} className="chef-form">
              <input
                  type="text"
              placeholder="e.g cabbage"
                  aria-label="Add ingredient"
                  name="ingredient"
              />
                <button onClick={handleClick}>{result}</button>
            </form>
            <ul>
                {ingredientItems}
            </ul>

            <h1>Count times</h1>
            <div className="container">
                <button onClick={minus} className="minus">-</button>
                <h2>{count}</h2>
                <button onClick={add} className="plus">+</button>
            </div>
        </main>
    )
}

