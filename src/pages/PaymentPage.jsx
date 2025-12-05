import { useState } from "react";
import Footer from "../ui/footer";
import AppointmentSummary from "../features/paymentMethods/AppointmentSummary";
import PaymentMethod from "../features/paymentMethods/PaymentMethod";
import PaymentDetails from "../features/paymentMethods/PaymentDetails";
import PageHeader from "../features/paymentMethods/HeaderComponent";
import PaymentHeader from "../features/paymentMethods/PaymentHeader";
import SecurityMessage from "../features/paymentMethods/SecurityMessage";

function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <PageHeader />

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <aside className="w-full lg:w-1/3">
              <AppointmentSummary />
            </aside>

            <main className="w-full lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
                <PaymentHeader />

                {/* Payment Methods */}
                <PaymentMethod
                  selectedMethod={selectedMethod}
                  onSelectMethod={setSelectedMethod}
                />

                {/* Payment Details (Form or Info) */}
                <PaymentDetails payMethod={selectedMethod} />

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
