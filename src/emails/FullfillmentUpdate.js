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
      subjectExplained="Your shipping status has been updated."
      summary="Below is the list of ordered products that have been updated with new tracking number. You can track your shipment with #{{fulfillment.tracking_number}} code."
    >
      <Products noPrice />
    </BasicLayout>
  );
};

export default OrderFullfillment;
