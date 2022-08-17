import React from "react";
import { MjmlSpacer } from "mjml-react";

import { BasicLayout } from "../Layouts";
import {
  Products,
  OrderPrice,
  OrderSummary,
  Divider,
  PaymentDetails,
  DeliverDetails,
} from "../components";

const OrderFullfillment = () => {
  return (
    <BasicLayout
      subjectExplained="Your order #{{fulfillment.tracking_number}} has been fulfilled."
      summary="These items from order #{{fulfillment.tracking_number}} have shipped:"
    >
      <Products noPrice />
    </BasicLayout>
  );
};

export default OrderFullfillment;
