import { patients } from "../data/patients"

export default function Patients() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <h1 className="text-3xl font-bold text-[#0F4C75] mb-6">
        Patients Records
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full border-collapse">
          
          <thead className="bg-[#0F4C75] text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm">Patient ID</th>
              <th className="px-4 py-3 text-left text-sm">Name</th>
              <th className="px-4 py-3 text-left text-sm">Age</th>
              <th className="px-4 py-3 text-left text-sm">Gender</th>
              <th className="px-4 py-3 text-left text-sm">Disease</th>
              <th className="px-4 py-3 text-left text-sm">Doctor</th>
              <th className="px-4 py-3 text-left text-sm">Status</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p, index) => (
              <tr
                key={p.id}
                className={`border-b text-sm ${
                  index % 2 === 0 ? "bg-slate-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-3 font-medium">{p.id}</td>
                <td className="px-4 py-3">{p.name}</td>
                <td className="px-4 py-3">{p.age}</td>
                <td className="px-4 py-3">{p.gender}</td>
                <td className="px-4 py-3">{p.disease}</td>
                <td className="px-4 py-3">{p.doctor}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        p.status === "Admitted"
                          ? "bg-red-100 text-red-600"
                          : p.status === "Under Observation"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-600"
                      }`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}
