function CashPaymentPage() {
  return (
    <div className="w-full bg-gray-50 p-4 sm:p-6">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Cash On Arrival
          </h2>
          <p className="text-sm sm:text-base font-medium text-gray-800">
            You will pay at the clinic upon arrival.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CashPaymentPage;
