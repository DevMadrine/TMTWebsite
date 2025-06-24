import './App.css'
import {JournalHeader} from "./components/JournalHeader.jsx";
import journalData from "./models/JournalData.js";
import Entry from "./components/Entry.jsx";
import "../src/css/Entry.css"

function App() {
    const entryElements = journalData.map((data) =>{
        return(
            <Entry key = {data.id}
                 {...data}
            />
        )
    })
  return (
    <>
    <JournalHeader/>
        <main className="journal">
        {entryElements}
        </main>
    </>
  )
}

export default App
