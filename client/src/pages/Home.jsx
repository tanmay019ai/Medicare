export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F4C75] leading-tight">
            Caring for Life,<br /> Healing with Heart
          </h1>

          <p className="mt-4 text-slate-600">
            Medicare is a modern hospital management system providing
            professional healthcare services with advanced medical support.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-[#0F4C75] text-white px-6 py-3 rounded-lg hover:bg-[#083654] transition">
              Book Appointment
            </button>
            <button className="border border-[#0F4C75] text-[#0F4C75] px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              View Doctors
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-[#1B9AAA]">
            Hospital Timings
          </h3>

          <ul className="mt-4 space-y-2 text-sm">
            <li>🕘 OPD: 9 AM – 6 PM</li>
            <li>🚑 Emergency: 24/7</li>
            <li>🧪 Lab Services: 8 AM – 8 PM</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
