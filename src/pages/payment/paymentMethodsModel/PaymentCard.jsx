// PaymentMethodCard.jsx
function PaymentMethodCard({
  icon: Icon,
  title,
  subtitle,
  isSelected,
  onClick,
  badge,
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-200 group ${
        isSelected
          ? "border-blue-500 bg-blue-50 shadow-sm"
          : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm"
      }`}
    >
      {/* Icon */}
      <div
        className={`p-3 rounded-lg transition-colors ${
          isSelected ? "bg-blue-700" : "bg-blue-100 group-hover:bg-gray-200"
        }`}
      >
        <Icon
          className={`w-6 h-6 transition-colors ${
            isSelected ? "text-white" : "text-blue-700"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          {badge && (
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>
      {/* Radio Button */}
      <div className="flex items-center justify-center">
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            isSelected
              ? "border-blue-500 bg-blue-500"
              : "border-gray-300 group-hover:border-gray-400"
          }`}
        >
          {isSelected && (
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}

export default PaymentMethodCard;

// function PaymentMethodCard({
//   icon: Icon,
//   title,
//   subtitle,
//   isSelected,
//   onClick,
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full flex items-center gap-5 p-3 rounded-lg border-2 transition-all ${
//         isSelected
//           ? "border-blue-500 bg-blue-50"
//           : "border-gray-200 bg-white hover:border-gray-300"
//       }`}
//     >
//       <div
//         className={`p-3 rounded-lg ${
//           isSelected ? "bg-blue-100" : "bg-gray-100"
//         }`}
//       >
//         <Icon
//           className={`w-6 h-6
//             ${isSelected ? "text-blue-600" : "text-gray-600"}
//             `}
//         />
//       </div>
//       <div className="flex-1 text-left">
//         <div className="flex items-center gap-2">
//           <h3 className="font-semibold text-gray-900">{title}</h3>
//         </div>
//         <p className="text-sm text-gray-500">{subtitle}</p>
//       </div>
//       <div
//         className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//           isSelected ? "border-blue-500" : "border-gray-300"
//         }`}
//       >
//         {isSelected && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
//       </div>
//     </button>
//   );
// }

// export default PaymentMethodCard;
