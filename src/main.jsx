import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import {JournalHeader} from "./components/JournalHeader.jsx";
import Entry from "./components/Entry.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <JournalHeader/>
      <Entry/>
  </StrictMode>,
)
