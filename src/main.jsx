// React Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Imports
import "./assets/stylesheet.css"
import "./assets/componentStyles.css"

import { NavHeader } from './components/reusables/NavHeader.jsx';
import { BoxCardCollection } from './components/BoxCards.jsx';
import { PillBoxes } from './components/pillBoxes.jsx';
import { NavFooter } from './components/reusables/NavFooter.jsx';

// Array
const boxCards = [
  {title: "Oh god what a nice title", description: "What a nice description", category: "Interesting Category", duration: "An eternity"},
  {title: "Oh god what a nice title", description: "What a nice description", category: "Interesting Category", duration: "An eternity"},
  {title: "Oh god what a nice title", description: "What a nice description", category: "Interesting Category", duration: "An eternity"},
  {title: "Oh god what a nice title", description: "What a nice description", category: "Interesting Category", duration: "An eternity"},
  {title: "Oh god what a nice title", description: "What a nice description", category: "Interesting Category", duration: "An eternity"},
  {title: "Oh god what a nice title", description: "What a nice description", category: "Interesting Category", duration: "An eternity"},
]

// Structure
createRoot(document.getElementById('root')).render(
<StrictMode>
  <div className='page'>
    <NavHeader
      title={"Study Centre"}
      navlinks={[
        {title: "Avaleht", destination: "/"},
        {title: "Koolitused", destination: "/"},
        {title: "Kontakt", destination: "/"}
      ]}
    />
    <div>
      <h2>Koolitused</h2>
      <p>Leia endale sobiv koolitus ja arenda oma teadmisi.</p>
    </div>
    <PillBoxes data={["All", "Coding", "Data Analysis", "Design"]}/>
    <div>
      <h2>Populaarsed Koolitused</h2>
      <BoxCardCollection cards={boxCards.slice(0, 3)}/>
    </div>
    <div>
      <h2>Kursused</h2>
      <BoxCardCollection cards={boxCards}/>
    </div>
  </div>
  <NavFooter text={"Footer Copyright idk"}/>
</StrictMode>
);
//yaypop