import { doctors } from "../data/doctor"

export default function Doctors() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-[#0F4C75] mb-8">
        Our Doctors
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-[#1B9AAA]">
              {doc.name}
            </h2>

            <p className="text-sm mt-2">
              <span className="font-medium">Specialization:</span>{" "}
              {doc.specialization}
            </p>

            <p className="text-sm">
              <span className="font-medium">Experience:</span>{" "}
              {doc.experience}
            </p>

            <p className="text-sm">
              <span className="font-medium">Timings:</span>{" "}
              {doc.timing}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
