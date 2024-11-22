// import React, { useState } from "react";
// import { useLocation } from "react-router-dom"; // Import useLocation hook
// import "./PaymentGateway.css";
// import Header from '../home/pageComponents/Header';
// import Footer from '../home/pageComponents/Footer';

// const PaymentGateway = () => {
//     const location = useLocation(); // Use useLocation hook to get passed data
//     const { total_price } = location.state || {}; // Destructure the total_price from state
//     const [paymentMethod, setPaymentMethod] = useState("");

//     const renderForm = () => {
//         switch (paymentMethod) {
//             case "card":
//                 return (
//                     <div className="form card-form">
//                         <h3 className="form-header card-header">Card Payment</h3>
//                         <label>
//                             Cardholder Name:
//                             <input type="text" placeholder="Enter cardholder name" />
//                         </label>
//                         <label>
//                             Card Number:
//                             <input type="text" placeholder="Enter card number" />
//                         </label>
//                         <label>
//                             Expiry Date:
//                             <input type="text" placeholder="MM/YY" />
//                         </label>
//                         <label>
//                             CVV:
//                             <input type="password" placeholder="Enter CVV" />
//                         </label>
//                         <button className="pay-button card-button">Pay & Confirm Booking</button>
//                     </div>
//                 );
//             case "mobile":
//                 return (
//                     <div className="form mobile-form">
//                         <h3 className="form-header mobile-header">Mobile Banking</h3>
//                         <label>
//                             Mobile Banking Provider:
//                             <input type="text" placeholder="Enter mobile banking provider" />
//                         </label>
//                         <label>
//                             Account Number:
//                             <input type="text" placeholder="Enter account number" />
//                         </label>
//                         <label>
//                             Confirmation PIN:
//                             <input type="password" placeholder="Enter confirmation PIN" />
//                         </label>
//                         <button className="pay-button mobile-button">Pay & Confirm Booking</button>
//                     </div>
//                 );
//             case "cash":
//                 return (
//                     <div>
//                         <h3 className="form-header cash-header">Cash Payment Selected</h3>
//                         <button className="pay-button cash-button">Pay & Confirm Booking</button>
//                     </div>
//                 );

//             default:
//                 return <p className="form-placeholder">Please select a payment method.</p>;
//         }
//     };

//     return (
//         <div className="payment-page">
//             <Header />
//             <div className="payment-gateway">
//                 <h2 className="gateway-header">Payment Gateway</h2>
//                 <label>
//                     Amount Due: <strong>{total_price ? `৳ ${total_price}` : 'N/A'}</strong>
//                 </label>
//                 <h3 className="select-header">Select Payment Method</h3>
//                 <div className="buttons">
//                     <button
//                         className="method-button card-method"
//                         onClick={() => setPaymentMethod("card")}
//                     >
//                         Card
//                     </button>
//                     <button
//                         className="method-button mobile-method"
//                         onClick={() => setPaymentMethod("mobile")}
//                     >
//                         Mobile Banking
//                     </button>
//                     <button
//                         className="method-button cash-method"
//                         onClick={() => setPaymentMethod("cash")}
//                     >
//                         Cash
//                     </button>
//                 </div>
//                 {renderForm()}
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default PaymentGateway;

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom"; // Import useLocation hook
// import "./PaymentGateway.css";
// import Header from '../home/pageComponents/Header';
// import Footer from '../home/pageComponents/Footer';

// const PaymentGateway = () => {
//   const location = useLocation(); // Use useLocation hook to get passed data
//   const { total_price, bookingId, userId } = location.state || {}; // Destructure bookingId, total_price, and userId from state
//   const [paymentMethod, setPaymentMethod] = useState("");

//   console.log('payment page print:' + total_price + bookingId + userId);

//   // This function is to render the payment form based on the selected method
//   const renderForm = () => {
//     switch (paymentMethod) {
//       case "card":
//         return (
//           <div className="form card-form">
//             <h3 className="form-header card-header">Card Payment</h3>
//             <label>
//               Cardholder Name:
//               <input type="text" placeholder="Enter cardholder name" />
//             </label>
//             <label>
//               Card Number:
//               <input type="text" placeholder="Enter card number" />
//             </label>
//             <label>
//               Expiry Date:
//               <input type="text" placeholder="MM/YY" />
//             </label>
//             <label>
//               CVV:
//               <input type="password" placeholder="Enter CVV" />
//             </label>
//             <button className="pay-button card-button" onClick={handlePayment}>
//               Pay & Confirm Booking
//             </button>
//           </div>
//         );
//       case "mobile":
//         return (
//           <div className="form mobile-form">
//             <h3 className="form-header mobile-header">Mobile Banking</h3>
//             <label>
//               Mobile Banking Provider:
//               <input type="text" placeholder="Enter mobile banking provider" />
//             </label>
//             <label>
//               Account Number:
//               <input type="text" placeholder="Enter account number" />
//             </label>
//             <label>
//               Confirmation PIN:
//               <input type="password" placeholder="Enter confirmation PIN" />
//             </label>
//             <button className="pay-button mobile-button" onClick={handlePayment}>
//               Pay & Confirm Booking
//             </button>
//           </div>
//         );
//       case "cash":
//         return (
//           <div>
//             <h3 className="form-header cash-header">Cash Payment Selected</h3>
//             <button className="pay-button cash-button" onClick={handlePayment}>
//               Pay & Confirm Booking
//             </button>
//           </div>
//         );

//       default:
//         return <p className="form-placeholder">Please select a payment method.</p>;
//     }
//   };

//   // This function handles the payment logic and sends a POST request to the server
//   const handlePayment = async () => {
//     // The payment details object includes the required information
//     const paymentDetails = {
//       user_id: userId,
//       booking_id: bookingId,
//       payment_status: "Successful", // Assuming payment is successful. Add further logic for failure if needed
//       amount_paid: total_price, // Amount to be paid (from total_price)
//       payment_method: paymentMethod, // Selected payment method (card, mobile, cash)
//     };

//     try {
//       const response = await fetch("http://localhost:3000/user/payments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(paymentDetails),
//       });

//       if (response.ok) {
//         alert("Payment successful! Booking confirmed.");
//       } else {
//         const errorData = await response.json();
//         alert(`Payment failed: ${errorData.message}`);
//       }
//     } catch (error) {
//       alert("Error processing payment: " + error.message);
//     }
//   };

//   return (
//     <div className="payment-page">
//       <Header />
//       <div className="payment-gateway">
//         <h2 className="gateway-header">Payment Gateway</h2>
//         <label>
//           Amount Due: <strong>{total_price ? `৳ ${total_price}` : 'N/A'}</strong>
//         </label>
//         <h3 className="select-header">Select Payment Method</h3>
//         <div className="buttons">
//           <button className="method-button card-method" onClick={() => setPaymentMethod("card")}>
//             Card
//           </button>
//           <button className="method-button mobile-method" onClick={() => setPaymentMethod("mobile")}>
//             Mobile Banking
//           </button>
//           <button className="method-button cash-method" onClick={() => setPaymentMethod("cash")}>
//             Cash
//           </button>
//         </div>
//         {renderForm()}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default PaymentGateway;


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate hooks
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import "./PaymentGateway.css";
import Header from '../home/pageComponents/Header';
import Footer from '../home/pageComponents/Footer';

const PaymentGateway = () => {
  const location = useLocation(); // Use useLocation hook to get passed data
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const { total_price, bookingId, userId } = location.state || {}; // Destructure bookingId, total_price, and userId from state
  const [paymentMethod, setPaymentMethod] = useState("");


  // This function is to render the payment form based on the selected method
  const renderForm = () => {
    switch (paymentMethod) {
      case "card":
        return (
          <div className="form card-form">
            <h3 className="form-header card-header">Card Payment</h3>
            <label>
              Cardholder Name:
              <input type="text" placeholder="Enter cardholder name" />
            </label>
            <label>
              Card Number:
              <input type="text" placeholder="Enter card number" />
            </label>
            <label>
              Expiry Date:
              <input type="text" placeholder="MM/YY" />
            </label>
            <label>
              CVV:
              <input type="password" placeholder="Enter CVV" />
            </label>
            <button className="pay-button card-button" onClick={handlePayment}>
              Pay & Confirm Booking
            </button>
          </div>
        );
      case "mobile":
        return (
          <div className="form mobile-form">
            <h3 className="form-header mobile-header">Mobile Banking</h3>
            <label>
              Mobile Banking Provider:
              <input type="text" placeholder="Enter mobile banking provider" />
            </label>
            <label>
              Account Number:
              <input type="text" placeholder="Enter account number" />
            </label>
            <label>
              Confirmation PIN:
              <input type="password" placeholder="Enter confirmation PIN" />
            </label>
            <button className="pay-button mobile-button" onClick={handlePayment}>
              Pay & Confirm Booking
            </button>
          </div>
        );
      case "cash":
        return (
          <div>
            <h3 className="form-header cash-header">Cash Payment Selected</h3>
            <button className="pay-button cash-button" onClick={handlePayment}>
              Pay & Confirm Booking
            </button>
          </div>
        );

      default:
        return <p className="form-placeholder">Please select a payment method.</p>;
    }
  };

  // This function handles the payment logic and sends a POST request to the server
  const handlePayment = async () => {
    // The payment details object includes the required information
    const paymentDetails = {
      user_id: userId,
      booking_id: bookingId,
      payment_status: "Successful", // Assuming payment is successful. Add further logic for failure if needed
      amount_paid: total_price, // Amount to be paid (from total_price)
      payment_method: paymentMethod, // Selected payment method (card, mobile, cash)
    };

    try {
      const response = await fetch("http://localhost:3000/user/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentDetails),
      });

      if (response.ok) {
        toast.success("Your payment is successfully paid. Thank you for booking seat.", {
          autoClose: 3000, // Toast will disappear after 3 seconds
          onClose: () => {
            navigate("/"); // Navigate to home page after the toast disappears
          },
        });
      } else {
        const errorData = await response.json();
        toast.error(`Payment failed: ${errorData.message}`);
      }
    } catch (error) {
      toast.error("Error processing payment: " + error.message);
    }
  };

  return (
    <div className="payment-page">
      <Header />
      <div className="payment-gateway">
        <h2 className="gateway-header">Payment Gateway</h2>
        <label>
          Amount Due: <strong>{total_price ? `৳ ${total_price}` : 'N/A'}</strong>
        </label>
        <h3 className="select-header">Select Payment Method</h3>
        <div className="buttons">
          <button className="method-button card-method" onClick={() => setPaymentMethod("card")}>
            Card
          </button>
          <button className="method-button mobile-method" onClick={() => setPaymentMethod("mobile")}>
            Mobile Banking
          </button>
          <button className="method-button cash-method" onClick={() => setPaymentMethod("cash")}>
            Cash
          </button>
        </div>
        {renderForm()}
      </div>
      <Footer />
    </div>
  );
};

export default PaymentGateway;
