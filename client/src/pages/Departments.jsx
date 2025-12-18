import { departments } from "../data/departments"

export default function Departments() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <h1 className="text-3xl font-bold text-[#0F4C75] mb-8">
        Departments & Diseases
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-[#1B9AAA] mb-2">
              {dept.name}
            </h2>

            <p className="text-sm text-slate-600 mb-4">
              {dept.description}
            </p>

            <div>
              <h3 className="text-sm font-semibold text-[#0F4C75] mb-2">
                Common Diseases
              </h3>

              <div className="flex flex-wrap gap-2">
                {dept.diseases.map((disease, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
                  >
                    {disease}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
