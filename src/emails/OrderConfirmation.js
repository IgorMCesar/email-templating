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

const OrderConfirmation = () => {
  return (
    <BasicLayout
      subjectExplained="Thank you for your order!"
      summary="Please find your order details below:"
    >
      <OrderSummary />
      <MjmlSpacer height={32} />
      <Products />
      <Divider padding="0" paddingBottom="24px" paddingTop="24px" />
      <OrderPrice />
      <MjmlSpacer height={48} />
      <PaymentDetails />
      <MjmlSpacer height={48} />
      <DeliverDetails />
    </BasicLayout>
  );
};

export default OrderConfirmation;
