import React from "react";

import { MjmlSection, MjmlText, MjmlSpacer } from "mjml-react";
import { Card, TextSection } from "../";

const PaymentDetails = ({ ...props }) => {
  return (
    <MjmlSection padding="0" {...props}>
      <MjmlText
        fontSize={20}
        lineHeight={24}
        letterSpacing="0.16px"
        color="#22262A"
      >
        Payment details
      </MjmlText>
      <MjmlSpacer height={16} />
      <MjmlText
        fontSize={16}
        lineHeight={20}
        letterSpacing="0.16px"
        color="#22262A"
      >
        Bank transfer
      </MjmlText>
      <MjmlSpacer height={16} />
      <Card width="100%">
        <TextSection label="Name" content="Github" />
        <MjmlSpacer height={16} />
        <TextSection label="Bank" content="Credit Suisse" />
        <MjmlSpacer height={16} />
        <TextSection label="IBAN" content="SU00 1234 5678 9123 4567 8" />
        <MjmlSpacer height={16} />
        <TextSection label="BIC / SWIFT" content="SUIS SE A4 BC78" />
        <MjmlSpacer height={16} />
        <TextSection label="Amount" content="€3989,00" />
      </Card>
    </MjmlSection>
  );
};

export default PaymentDetails;
