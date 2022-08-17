import React from "react";

import { MjmlSection, MjmlText, MjmlSpacer } from "mjml-react";
import { Card, TextSection } from "../";

const DeliverDetails = ({ ...props }) => {
  return (
    <MjmlSection padding="0" {...props}>
      <MjmlText
        fontSize={20}
        lineHeight={24}
        letterSpacing="0.16px"
        color="#22262A"
      >
        Delivery details
      </MjmlText>
      <MjmlSpacer height={16} />
      <Card width="100%">
        <TextSection label="Deliver to" content="Igor Marracho" />
        <MjmlSpacer height={16} />
        <TextSection
          label="Contact information"
          content="igormarracho01@gmail.com / +251 99 999 99 99"
        />
        <MjmlSpacer height={16} />
        <TextSection
          label="Shipping address"
          content="XZY Street, 0000-000 City, Country"
        />
        <MjmlSpacer height={16} />
        <TextSection
          label="Billing address"
          content="Same as shipping address"
        />
      </Card>
    </MjmlSection>
  );
};

export default DeliverDetails;
