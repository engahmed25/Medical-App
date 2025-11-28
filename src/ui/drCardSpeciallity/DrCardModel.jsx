function DrCardModel({ img, drSpeciallityTitle }) {
  return (
    <div
      className="border-2 
      border-blue-600 
      flex flex-col 
      items-center 
      p-2 
      transition-transform 
      duration-300 
      transform 
      hover:scale-110"
    >
      <img
        src={img}
        alt={drSpeciallityTitle}
        className="w-20 h-20 object-cover"
      />
      <p className="mt-2 font-semibold">{drSpeciallityTitle}</p>
    </div>
  );
}

export default DrCardModel;
