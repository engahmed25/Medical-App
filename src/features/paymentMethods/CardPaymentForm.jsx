import { useForm } from "react-hook-form";

function CardPaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-gray-50 p-4 sm:p-6">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Payment Details
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Enter your card information
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </label>
            <input
              {...register("cardNumber", {
                required: "Card number is required",
                pattern: {
                  value: /^[0-9]{13,19}$/,
                  message: "Enter 13-19 digits only",
                },
              })}
              placeholder="1234 5678 9012 3456"
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
              maxLength="19"
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.cardNumber.message}
              </p>
            )}
          </div>

          {/* Cardholder Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cardholder Name
            </label>
            <input
              {...register("name", {
                required: "Cardholder name is required",
                pattern: {
                  value: /^[a-zA-Z\s]{2,}$/,
                  message: "Enter valid name (letters only)",
                },
              })}
              placeholder="John Doe"
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
            />
            {errors.name && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Expiry and CVV */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                {...register("expiry", {
                  required: "Expiry date is required",
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                    message: "Use MM/YY format",
                  },
                })}
                placeholder="MM/YY"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                maxLength="5"
              />
              {errors.expiry && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.expiry.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV
              </label>
              <input
                {...register("cvv", {
                  required: "CVV is required",
                  pattern: {
                    value: /^[0-9]{3,4}$/,
                    message: "Enter 3-4 digits",
                  },
                })}
                placeholder="123"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                maxLength="4"
                type="password"
              />
              {errors.cvv && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.cvv.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-blue-600 text-white p-3 sm:p-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition font-medium text-sm sm:text-base mt-6"
          >
            Submit Payment
          </button>
        </div>

        {/* Security Note */}
        <div className="mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600 text-center">
            🔒 Your payment information is encrypted and secure
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardPaymentForm;
