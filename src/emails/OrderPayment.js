import React from "react";

import { BasicLayout } from "../Layouts";

import { MjmlText } from "mjml-react";
import { Button } from "../components";

const OrderPayment = () => {
  return (
    <BasicLayout
      subjectExplained="Thank you for your payment!"
      summary="Your payment was successfully processed."
      summarySpacing={0}
    />
  );
};

export default OrderPayment;
