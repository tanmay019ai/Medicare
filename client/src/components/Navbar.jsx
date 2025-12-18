import { HeartPulse, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <HeartPulse size={28} className="text-red-500" />
          <span className="text-xl font-bold text-[#0F4C75]">
            Medicare
          </span>
        </Link>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-[#1B9AAA]">Home</Link>
          <Link to="/doctors" className="hover:text-[#1B9AAA]">Doctors</Link>
          <Link to="/patients" className="hover:text-[#1B9AAA]">Patients</Link>
          <Link to="/departments" className="hover:text-[#1B9AAA]">Departments</Link>
        </ul>

        <div className="flex items-center gap-2 text-sm font-semibold text-red-500">
          <Phone size={18} />
          <span>Emergency: 108</span>
        </div>

      </div>
    </nav>
  )
}
