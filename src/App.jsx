import './App.css'
import { AdLoginPage } from "./Login.jsx"
import { UsLoginPage } from './UserLogin'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from "./index.jsx"
import AdDashboardpage from"./Dashboard.jsx"
import AddNewDocterPage from './DoctorPage.jsx'
import Userpanel from "./userpanel.jsx"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        
        <Route path="/userlog" element={<UsLoginPage/>} />
        <Route path="/adminlog" element={<AdLoginPage/>}/>
        <Route path="/addashboard" element={<AdDashboardpage/>}/>
        <Route index exact path="/" element={<Index/>}/>
        <Route path="/addnewdocter" element={<AddNewDocterPage/>}/>
        <Route path="/userpanel" element={<Userpanel/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
