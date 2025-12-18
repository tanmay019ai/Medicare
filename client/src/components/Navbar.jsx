import { HeartPulse, Phone, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <HeartPulse size={28} className="text-red-500" />
            <span className="text-xl font-bold text-[#0F4C75]">
              Medicare
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-[#1B9AAA]">Home</Link>
            <Link to="/doctors" className="hover:text-[#1B9AAA]">Doctors</Link>
            <Link to="/patients" className="hover:text-[#1B9AAA]">Patients</Link>
            <Link to="/departments" className="hover:text-[#1B9AAA]">Departments</Link>
          </ul>

          {/* Emergency */}
          <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-red-500">
            <Phone size={18} />
            <span>Emergency: 108</span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t shadow-sm">
            <ul className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
              <Link onClick={() => setOpen(false)} to="/">Home</Link>
              <Link onClick={() => setOpen(false)} to="/doctors">Doctors</Link>
              <Link onClick={() => setOpen(false)} to="/patients">Patients</Link>
              <Link onClick={() => setOpen(false)} to="/departments">Departments</Link>

              <div className="flex items-center gap-2 text-red-500 font-semibold pt-2">
                <Phone size={18} />
                <span>Emergency: 108</span>
              </div>
            </ul>
          </div>
        )}
      </nav>

      {/* STATS BAR (SIMPLE, ALWAYS VISIBLE) */}
      <div className="bg-[#0F4C75] text-white overflow-hidden">
        <div className="whitespace-nowrap animate-marquee py-2 text-sm font-semibold">
          <span className="mx-10">👥 Visitors Today: <b>12,450+</b></span>
          <span className="mx-10">🧑‍⚕️ Patients Treated: <b>85,000+</b></span>
          <span className="mx-10">🏥 Departments: <b>25+</b></span>
          <span className="mx-10">👨‍⚕️ Expert Doctors: <b>120+</b></span>
          <span className="mx-10">⭐ Rating: <b>4.8 / 5</b></span>
          <span className="mx-10">❤️ Trusted by Thousands</span>
        </div>
      </div>
    </>
  )
}
