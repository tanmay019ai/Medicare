import heroBg from "../assets/hospital.png"

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION WITH BG IMAGE ================= */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Left */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F4C75] leading-tight">
                Caring for Life,<br /> Healing with Heart
              </h1>

              <p className="mt-4 text-slate-700">
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
            <div className="bg-white/90 backdrop-blur rounded-xl shadow-md p-6">
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
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-[#0F4C75] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">50K+</p>
            <p className="text-sm opacity-90">Patients Treated</p>
          </div>
          <div>
            <p className="text-3xl font-bold">120+</p>
            <p className="text-sm opacity-90">Expert Doctors</p>
          </div>
          <div>
            <p className="text-3xl font-bold">25+</p>
            <p className="text-sm opacity-90">Departments</p>
          </div>
          <div>
            <p className="text-3xl font-bold">4.8⭐</p>
            <p className="text-sm opacity-90">Patient Rating</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#0F4C75] text-center mb-10">
          Our Medical Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Cardiology", desc: "Advanced heart care & diagnostics" },
            { title: "Neurology", desc: "Brain & nervous system treatment" },
            { title: "Orthopedics", desc: "Bone & joint care solutions" },
            { title: "Pediatrics", desc: "Child & infant healthcare" },
            { title: "Dermatology", desc: "Skin, hair & nail treatments" },
            { title: "Emergency Care", desc: "24/7 critical medical support" },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-[#1B9AAA]">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0F4C75] mb-4">
            Trusted Healthcare Partner
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            For over a decade, Medicare has been delivering reliable,
            compassionate, and world-class healthcare services to thousands
            of families.
          </p>
        </div>
      </section>
    </>
  )
}
