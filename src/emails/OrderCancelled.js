import React from "react";

import { BasicLayout } from "../Layouts";

import { MjmlText } from "mjml-react";
import { Button } from "../components";

const OrderCancelled = () => {
  return (
    <BasicLayout
      subjectExplained="Your order was cancelled."
      summary="Your order #{{order_number}} has been cancelled"
      summarySpacing={0}
    />
  );
};

export default OrderCancelled;
