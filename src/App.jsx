import './App.css'
import { AdLoginPage } from "./Login.jsx"
import { UsLoginPage } from './UserLogin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from "./index.jsx"
import AdDashboardpage from "./Dashboard.jsx"
import AddNewDocterPage from './DoctorPage.jsx'
import Userpanel from "./userpanel.jsx"
import Adminpanel from "./adminpanel.jsx"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user/login" element={<UsLoginPage />} />
          <Route path="/admin/login" element={<AdLoginPage />} />
          <Route path="/admin/dashboard" element={<AdDashboardpage />} />
          <Route index exact path="/" element={<Index />} />
          <Route path="/newdocter/add" element={<AddNewDocterPage />} />
          <Route path="/user/panel" element={<Userpanel />} />
          <Route path="/admin/panel" element={<Adminpanel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
