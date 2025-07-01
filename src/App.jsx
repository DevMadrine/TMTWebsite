import './App.css'
// import {JournalHeader} from "./components/JournalHeader.jsx";
// import journalData from "./models/JournalData.js";
// import Entry from "./components/Entry.jsx";
// import "../src/css/Entry.css"
import ChefHeader from "./components/ChefHeader.jsx";
import ChefForm from "./components/ChefForm.jsx";

function App() {
    // const entryElements = journalData.map((data) =>{
    //     return(
    //         <Entry key = {data.id}
    //              {...data}
    //         />
    //     )
    // })
  return (
    <div className="chef-body">
    {/*<JournalHeader/>*/}
    {/*    <main className="journal">*/}
    {/*    {entryElements}*/}
    {/*    </main>*/}
        <ChefHeader/>
        <ChefForm/>

    </div>
  )
}

export default App
