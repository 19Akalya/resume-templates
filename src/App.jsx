import './App.css'
import { AdLoginPage } from "./Login.jsx"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from "./index.jsx"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        
        <Route path="/userlog" element={<AdLoginPage/>} />
        <Route index exact path="/" element={<Index/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
