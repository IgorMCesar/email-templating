import React from "react";

import { MjmlSection, MjmlText, MjmlColumn, MjmlGroup } from "mjml-react";
import { Divider } from "../atoms/Divider";

const OrderPrice = ({ ...props }) => {
  return (
    <MjmlSection {...props}>
      <MjmlGroup width="100%">
        <MjmlColumn width="50%">
          <MjmlText
            fontSize={14}
            lineHeight={18}
            letterSpacing="0.14px"
            align="left"
            color="#22262A"
          >
            Subtotal
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="50%" align="right">
          <MjmlText
            fontSize={14}
            lineHeight={18}
            letterSpacing="0.14px"
            align="right"
            color="#818A92"
          >
            €4870,00
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="50%" paddingTop="16px">
          <MjmlText
            fontSize={14}
            lineHeight={18}
            letterSpacing="0.14px"
            align="left"
            color="#22262A"
          >
            Shipping
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="50%" align="right" paddingTop="16px">
          <MjmlText
            fontSize={14}
            lineHeight={18}
            letterSpacing="0.14px"
            align="right"
            color="#818A92"
          >
            €4870,00
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="50%" paddingTop="16px">
          <MjmlText
            fontSize={14}
            lineHeight={18}
            letterSpacing="0.14px"
            align="left"
            color="#22262A"
          >
            Discount
            <span style={{ color: "#ADB2B8", paddingLeft: 8 }}>Github</span>
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="50%" align="right" paddingTop="16px">
          <MjmlText
            fontSize={14}
            lineHeight={18}
            letterSpacing="0.14px"
            align="right"
            color="#818A92"
          >
            -€4870,00
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="100%" padding="24px 0">
          <Divider padding="0" paddingBottom="0" paddingTop="0" />
        </MjmlColumn>
        <MjmlColumn width="50%">
          <MjmlText
            fontSize={14}
            lineHeight={18}
            letterSpacing="0.14px"
            align="left"
            color="#22262A"
          >
            Order total
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="50%" align="right">
          <MjmlText
            fontSize={14}
            lineHeight={18}
            letterSpacing="0.14px"
            align="right"
            color="#22262A"
          >
            €4870,00
          </MjmlText>
        </MjmlColumn>
      </MjmlGroup>
    </MjmlSection>
  );
};

export default OrderPrice;
