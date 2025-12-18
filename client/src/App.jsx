import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Doctors from "./pages/Doctors"
import Patients from "./pages/Patients"
import Departments from "./pages/Departments"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </BrowserRouter>
  )
}

