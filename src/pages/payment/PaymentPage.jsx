// ============================================
// PaymentPage.jsx
// ============================================
import { useState } from "react";
import { TiLockClosed } from "react-icons/ti";
import AppointmentSummary from "./appointmentSummary";
import PaymentMethod from "./paymentMethodsModel/PaymentMethod";
import PaymentDetails from "./paymentMethodsModel/PaymentDetails";
import Footer from "../../ui/footer";

// Header Component
function PageHeader() {
  return (
    <div className="mb-6 sm:mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Maio Clinic
      </h1>
      <p className="text-sm sm:text-base text-gray-600 mt-1">
        Secure Medical Appointment Booking
      </p>
    </div>
  );
}

// Payment Header Component
function PaymentHeader() {
  return (
    <div className="mb-6 sm:mb-8">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
        Choose Payment Method
      </h1>
      <p className="text-sm sm:text-base text-gray-600">
        Select your preferred payment method to complete your appointment
        booking. All payment methods are secure and encrypted.
      </p>
    </div>
  );
}

// Security Message Component
function SecurityMessage() {
  return (
    <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-100">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center shrink-0">
          <TiLockClosed />
        </div>
        <div>
          <p className="text-xs sm:text-sm font-medium text-blue-900">
            Secure Payment
          </p>
          <p className="text-xs text-blue-700 mt-1">
            Your payment information is encrypted and processed securely. We
            never store your full card details.
          </p>
        </div>
      </div>
    </div>
  );
}
function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <PageHeader />

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Side - Appointment Summary */}
            <aside className="w-full lg:w-1/3">
              <AppointmentSummary />
            </aside>

            {/* Right Side - Payment Method */}
            <main className="w-full lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
                {/* Section Header */}
                <PaymentHeader />

                {/* Payment Methods */}
                <PaymentMethod
                  selectedMethod={selectedMethod}
                  onSelectMethod={setSelectedMethod}
                />

                {/* Payment Details (Form or Info) */}
                <PaymentDetails payMethod={selectedMethod} />

                {/* Security Message */}
                <SecurityMessage />
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;

// // PaymentPage.jsx
// import { TiLockClosed } from "react-icons/ti";
// import AppointmentSummary from "./appointmentSummary";
// import PaymentMethod from "./paymentMethodsModel/PaymentMethod";
// import { useState } from "react";
// import NavigateButton from "./paymentMethodsModel/navigateButton";
// import Footer from "../../ui/footer";

// function PaymentPage() {
//   const [selectedMethod, setSelectedMethod] = useState("");

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 md:p-8">
//         <div className="max-w-6xl mx-auto p-4 ">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">Maio Clinic</h1>
//             <p className="text-gray-600 mt-1">
//               Secure Medical Appointment Booking
//             </p>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Left Side - Appointment Summary */}
//             <aside className="lg:w-1/3">
//               <AppointmentSummary />
//             </aside>
//             {/* Right Side - Payment Method */}
//             <main className="lg:w-2/3">
//               <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
//                 {/* Section Header */}
//                 <div className="mb-8">
//                   <h1 className="text-2xl font-bold text-gray-900 mb-3">
//                     Choose Payment Method
//                   </h1>
//                   <p className="text-gray-600">
//                     Select your preferred payment method to complete your
//                     appointment booking. All payment methods are secure and
//                     encrypted.
//                   </p>
//                 </div>

//                 {/* Payment Methods */}
//                 <PaymentMethod
//                   selectedMethod={selectedMethod}
//                   onSelectMethod={setSelectedMethod}
//                 />

//                 {/* Security Message */}
//                 <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
//                   <div className="flex items-start gap-3">
//                     <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center shrink-0">
//                       <TiLockClosed />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-blue-900">
//                         Secure Payment
//                       </p>
//                       <p className="text-xs text-blue-700 mt-1">
//                         Your payment information is encrypted and processed
//                         securely. We never store your full card details.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <NavigateButton selectedMethod={selectedMethod} />
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default PaymentPage;
