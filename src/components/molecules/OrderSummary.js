import React from "react";

import { MjmlSection, MjmlText, MjmlSpacer } from "mjml-react";

const OrderSummary = ({ ...props }) => {
  return (
    <MjmlSection padding="0" {...props}>
      <MjmlText
        fontSize={20}
        lineHeight={24}
        letterSpacing="0.16px"
        color="#22262A"
      >
        Order summary
      </MjmlText>
      <MjmlSpacer height={16} />
      <MjmlText
        fontSize={16}
        lineHeight={20}
        letterSpacing="0.16px"
        color="#22262A"
      >
        Order ID:
        <span style={{ color: "#ADB3B8" }}> #1234</span>
      </MjmlText>
      <MjmlSpacer height={4} />
      <MjmlText
        fontSize={16}
        lineHeight={20}
        letterSpacing="0.16px"
        color="#22262A"
      >
        Date:
        <span style={{ color: "#ADB3B8" }}> 2 February, 2021 - 17:00</span>
      </MjmlText>
    </MjmlSection>
  );
};

export default OrderSummary;
