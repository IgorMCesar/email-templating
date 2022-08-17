import React from "react";

import { BasicLayout } from "../Layouts";

import { MjmlText } from "mjml-react";
import { Button } from "../components";

const OrderRefund = () => {
  return (
    <BasicLayout
      subjectExplained="Your order was refund."
      summary="A payment of {{amount}} has been refunded for your order."
      summarySpacing={0}
    />
  );
};

export default OrderRefund;
