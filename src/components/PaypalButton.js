import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  return (
    <div>
      <h1>Pay with PayPal</h1>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "10.00", // Set the amount here
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        }}
        onError={(err) => {
          console.error("PayPal Checkout onError:", err);
        }}
      />
    </div>
  );
};

export default PayPalButton;
