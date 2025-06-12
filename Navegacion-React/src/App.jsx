import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Eventos from "./components/Eventos"
import Gestion from "./components/Gestion"
import Agenda from "./components/Agenda"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}> </Route>
      <Route path="/eventos" element = {<Eventos/>}> </Route>
      <Route path="/gestion" element = {<Gestion/>}> </Route>
      <Route path="/agenda" element = {<Agenda/>}> </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
