import { useLocation } from "react-router-dom";
import CardPaymentForm from "./CardPaymentForm";

function ConfirmPayment() {
  const location = useLocation();
  const { price, payMethod } = location.state;
  console.log(payMethod + price);

  if (!payMethod) return null;

  if (payMethod === "value") {
    return (
      <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-gray-50">
        <p className="text-sm sm:text-base font-medium text-gray-800">
          valU installment plan will be available soon.
        </p>
      </div>
    );
  }

  if (payMethod === "debitCard") {
    return (
      <div className="mt-4">
        <CardPaymentForm />
      </div>
    );
  }

  if (payMethod === "cash") {
    return (
      <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-gray-50">
        <p className="text-sm sm:text-base font-medium text-gray-800">
          You will pay at the clinic upon arrival.
        </p>
      </div>
    );
  }

  return null;
}

export default ConfirmPayment;

// import CardPaymentForm from "./CardPaymentForm";

// function PaymentDetails({ payMethod }) {
//   if (!payMethod) return null;

//   if (payMethod === "value") {
//     return (
//       <div className="mt-4 p-4 rounded-xl border bg-gray-50">
//         <p className="font-medium">
//           valU installment plan will be available soon.
//         </p>
//       </div>
//     );
//   }

//   if (payMethod === "debitCard") {
//     return (
//       <div className="">
//         <CardPaymentForm />
//       </div>
//     );
//   }

//   if (payMethod === "cash") {
//     return (
//       <div className="mt-4 p-4 rounded-xl border bg-gray-50">
//         <p className="font-medium">You will pay at the clinic upon arrival.</p>
//       </div>
//     );
//   }
// }
// export default PaymentDetails;
