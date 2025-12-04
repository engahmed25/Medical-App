// navigateButton.jsx
import { FaArrowRight } from "react-icons/fa6";

function NavigateButton({ selectedMethod }) {
  // Add default value
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-3">
      <button className="px-6 py-3 border-2 border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors flex-1">
        Back
      </button>
      <button
        disabled={!selectedMethod}
        className={`px-6 py-3 rounded-xl font-medium transition-colors flex-1 ${
          selectedMethod
            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        <span className="flex items-center justify-center gap-2">
          Continue
          <FaArrowRight className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
}

export default NavigateButton;
