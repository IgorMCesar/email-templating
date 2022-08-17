import React from "react";

import { BasicLayout } from "../Layouts";

import { MjmlColumn, MjmlGroup, MjmlImage, MjmlText } from "mjml-react";
import { Button, Divider } from "../components";

const GiftCard = () => {
  return (
    <BasicLayout subjectExplained="You received a gift card">
      <MjmlImage paddingBottom={0} align="left" src="{{image}}" />
      <MjmlGroup width="100%">
        <MjmlColumn width="50%">
          <MjmlText
            fontSize={24}
            lineHeight={30}
            color="#22262A"
            paddingTop="32px"
          >
            Gift card amount
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="50%">
          <MjmlText
            fontSize={24}
            lineHeight={30}
            color="#22262A"
            paddingTop="32px"
          >
            Gift card code
          </MjmlText>
        </MjmlColumn>
      </MjmlGroup>
      <MjmlGroup width="100%">
        <MjmlColumn width="50%">
          <MjmlText fontSize={24} lineHeight={30} color="#818A92">
            {`{{gift_card_amount}}`}
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="50%">
          <MjmlText fontSize={24} lineHeight={30} color="#818A92">
            {`{{gift_card_code}}`}
          </MjmlText>
        </MjmlColumn>
      </MjmlGroup>
      <Divider />
      <MjmlText fontSize={16} lineHeight={22} color="#22262A">
        Use this card as payment for anything you like in the Github store.
        Enter the gift card code at checkout to redeem your gift card.
      </MjmlText>
    </BasicLayout>
  );
};

export default GiftCard;
