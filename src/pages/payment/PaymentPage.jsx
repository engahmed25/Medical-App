// PaymentPage.jsx
import { TiLockClosed } from "react-icons/ti";
import AppointmentSummary from "./appointmentSummary";
import PaymentMethod from "./paymentMethodsModel/PaymentMethod";
import { useState } from "react";
import NavigateButton from "./paymentMethodsModel/navigateButton";
import Footer from "../../ui/footer";

function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <>
      <div className="min-h-screen bg-gray-50 md:p-8">
        <div className="max-w-6xl mx-auto p-4 ">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Maio Clinic</h1>
            <p className="text-gray-600 mt-1">
              Secure Medical Appointment Booking
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Appointment Summary */}
            <aside className="lg:w-1/3">
              <AppointmentSummary />
            </aside>
            {/* Right Side - Payment Method */}
            <main className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                {/* Section Header */}
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-gray-900 mb-3">
                    Choose Payment Method
                  </h1>
                  <p className="text-gray-600">
                    Select your preferred payment method to complete your
                    appointment booking. All payment methods are secure and
                    encrypted.
                  </p>
                </div>

                {/* Payment Methods */}
                <PaymentMethod
                  selectedMethod={selectedMethod}
                  onSelectMethod={setSelectedMethod}
                />

                {/* Security Message */}
                <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center shrink-0">
                      <TiLockClosed />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-900">
                        Secure Payment
                      </p>
                      <p className="text-xs text-blue-700 mt-1">
                        Your payment information is encrypted and processed
                        securely. We never store your full card details.
                      </p>
                    </div>
                  </div>
                </div>
                <NavigateButton selectedMethod={selectedMethod} />
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
