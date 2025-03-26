import React, { useState } from "react";
import axios from "axios";

const Payment = ({ cartItems, totalAmount }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const initiatePayment = async () => {
    try {
      const response = await axios.post("https://api.allupipay.in/create-order", {
        merchant_id: "YOUR_MERCHANT_ID",
        api_key: "YOUR_API_KEY",
        amount: totalAmount,
        currency: "INR",
        order_id: `ORDER_${Date.now()}`,
        customer_name: "Customer Name",
        customer_email: "customer@example.com",
        customer_phone: "1234567890",
        return_url: "http://yourwebsite.com/payment-success",
        cancel_url: "http://yourwebsite.com/payment-cancel",
      });

      if (response.data && response.data.payment_url) {
        window.location.href = response.data.payment_url;
      } else {
        setPaymentStatus("Payment initiation failed.");
      }
    } catch (error) {
      setPaymentStatus("Payment initiation failed.");
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div>
      <button onClick={initiatePayment}>Proceed to Payment</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default Payment;