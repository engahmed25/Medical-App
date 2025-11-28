import { FiInfo } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import DrImg from "./../../assets/DrInfoImgs/DrImg.png";

function DrInfo() {
  return (
    <section className="flex flex-col md:flex-row gap-6 m-4 bg-white p-6 rounded-xl shadow-md">
      {/* Doctor Image */}
      <div className="rounded-(--main-radius) shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-3 flex items-center justify-center w-full md:w-auto">
        <img src={DrImg} alt="" className="rounded-(--main-radius)" />
      </div>

      {/* Doctor Info */}
      <div className="border border-gray-300 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-5 rounded-(--main-radius) w-full">
        {/* Name + verified icon */}
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-2xl md:text-3xl text-gray-800">
            Dr Name
          </h1>
          <MdOutlineVerified className="text-blue-600 text-xl" />
        </div>

        {/* Speciality + years */}
        <div className="flex items-center gap-2 mt-1">
          <h2 className="text-gray-600 font-semibold">Speciality</h2>
          <div className="border border-gray-400 rounded-2xl text-gray-500 text-xs px-2 py-1">
            <span className="number-ex">2</span> years
          </div>
        </div>

        {/* About */}
        <div className="flex items-center gap-1 mt-4">
          <h3 className="font-semibold text-gray-700">About</h3>
          <FiInfo className="text-gray-500" />
        </div>

        <p className="text-gray-500 text-sm md:text-base mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          voluptatem enim maxime beatae cumque ex? Blanditiis, consectetur
          similique nobis veniam et, quaerat enim, laboriosam corrupti officiis.
        </p>

        <p className="mt-4 text-gray-700">
          Appointment Fee:
          <span className="font-bold text-gray-900"> $50</span>
        </p>
      </div>
    </section>
  );
}

export default DrInfo;
