import { Route, Routes } from "react-router-dom"
import Lobby from "./pages/Lobby"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Lobby />}>

        </Route>
      </Routes>
    </div>
  )
}

export default App
