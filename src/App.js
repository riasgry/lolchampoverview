import React from "react"
import { BrowserRouter,Routes,Route} from "react-router-dom";
import ChampionsList from "./components/ChampionsList";

function App() {
  return(
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChampionsList />}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
