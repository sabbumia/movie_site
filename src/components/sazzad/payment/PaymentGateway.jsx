import React, { useState } from "react";
import "./PaymentGateway.css";
import Header from '../home/pageComponents/Header';
import Footer from '../home/pageComponents/Footer';

const PaymentGateway = () => {
    const [paymentMethod, setPaymentMethod] = useState("");

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
                        <button className="pay-button card-button">Pay & Confirm Booking</button>
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
                        <button className="pay-button mobile-button">Pay & Confirm Booking</button>
                    </div>
                );
            case "cash":
                return (<div><h3 className="form-header cash-header">Cash Payment Selected</h3>
                    <button className="pay-button cash-button">Pay & Confirm Booking</button></div>

                );

            default:
                return <p className="form-placeholder">Please select a payment method.</p>;
        }
    };

    return (
        <div className="payment-page">
            <Header />
            <div className="payment-gateway">
                <h2 className="gateway-header">Payment Gateway</h2>
                <label>
                    Amount Due:
                    <input type="text" placeholder="Enter amount" />
                </label>
                <h3 className="select-header">Select Payment Method</h3>
                <div className="buttons">
                    <button
                        className="method-button card-method"
                        onClick={() => setPaymentMethod("card")}
                    >
                        Card
                    </button>
                    <button
                        className="method-button mobile-method"
                        onClick={() => setPaymentMethod("mobile")}
                    >
                        Mobile Banking
                    </button>
                    <button
                        className="method-button cash-method"
                        onClick={() => setPaymentMethod("cash")}
                    >
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
