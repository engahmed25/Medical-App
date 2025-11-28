const doctors = [
  { id: 1, name: "Dr. John Doe", speciality: "Cardiology", experience: 10 },
  { id: 2, name: "Dr. Sarah Lee", speciality: "Dermatology", experience: 5 },
  { id: 3, name: "Dr. Mark Samir", speciality: "Neurology", experience: 8 },
  { id: 4, name: "Dr. Laila Ahmed", speciality: "Pediatrics", experience: 12 },
];

function DoctorList({ speciality, search }) {
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpeciality =
      speciality === "All" || doctor.speciality === speciality;
    const matchesSearch = search
      ? doctor.name.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchesSpeciality && matchesSearch;
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredDoctors.length === 0 ? (
        <p className="text-gray-500 text-center py-6">No doctors found.</p>
      ) : (
        filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <p className="text-gray-500">Speciality: {doctor.speciality}</p>
            <p className="text-gray-500">
              Experience: {doctor.experience} years
            </p>
          </div>
        ))
      )}
      {/* Add more doctor cards as needed */}
    </div>
  );
}

export default DoctorList;
