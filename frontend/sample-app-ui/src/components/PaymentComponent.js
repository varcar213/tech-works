// src/components/PaymentComponent.jsx
import React from "react";
import "../styles/PaymentComponent.scss"; // Import your styles here

const PaymentComponent = () => {
  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      initiatePayment();
    };
    document.body.appendChild(script);
  };

  const initiatePayment = () => {
    const options = {
      key: "rzp_test_YourTestKeyHere", // Replace with your Razorpay Test Key
      amount: 50000, // Amount in paise (₹500)
      currency: "INR",
      name: "Sahasra Synergy",
      description: "Secure Cyber Audit",
      image: "https://your-logo-url.com/logo.png", // optional logo
      handler: function (response) {
        alert("Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Varsha Tiwari",
        email: "varsha@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment-container">
      <h2>Pay for Cybersecurity Services</h2>
      <button className="pay-btn" onClick={loadRazorpay}>
        Pay ₹500
      </button>
    </div>
  );
};

export default PaymentComponent;
