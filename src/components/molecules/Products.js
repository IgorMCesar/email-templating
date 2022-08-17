import React from "react";

import {
  MjmlSection,
  MjmlGroup,
  MjmlColumn,
  MjmlText,
  MjmlImage,
} from "mjml-react";

import { Divider } from "../";

const Products = ({ noPrice, ...props }) => {
  return (
    <MjmlSection {...props}>
      <MjmlGroup width="100%">
        <MjmlColumn width="40%">
          <MjmlText fontSize={14} color="#22262A" padding="16px 0px">
            Item
          </MjmlText>
        </MjmlColumn>
        {noPrice && <MjmlColumn width="40%" />}
        <MjmlColumn width="20%">
          <MjmlText
            fontSize={14}
            color="#22262A"
            padding="16px 0px"
            align="center"
          >
            Quantity
          </MjmlText>
        </MjmlColumn>
        {!noPrice && (
          <>
            <MjmlColumn width="20%">
              <MjmlText
                fontSize={14}
                color="#22262A"
                padding="16px 0px"
                align="center"
              >
                Per Unit
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn width="20%">
              <MjmlText
                fontSize={14}
                color="#22262A"
                padding="16px 0px"
                align="right"
              >
                Subtotal
              </MjmlText>
            </MjmlColumn>
          </>
        )}
      </MjmlGroup>
      <MjmlColumn width="100%" padding="0 0 10px 0">
        <Divider padding="0" paddingBottom="0" paddingTop="0" />
      </MjmlColumn>
      <MjmlText>{`{{#each order.lines}}`}</MjmlText>
      <MjmlGroup width="100%">
        <MjmlColumn padding="0px" verticalAlign="middle" width="20%">
          <MjmlImage
            padding="6px 12px 6px 0"
            width="48px"
            align="left"
            src={`{{image}}`}
          />
        </MjmlColumn>
        <MjmlColumn
          padding="0px"
          align="center"
          verticalAlign="middle"
          width="20%"
        >
          <MjmlText fontSize={16} padding="6px 0 0" color="#22262A">
            {`{{product_name}}`}
          </MjmlText>
          {`{{#if variant_name}}`}
          <MjmlText fontSize={16} padding="1px 0 6px 0" color="#818A92">
            {`{{variant_name}}`}
          </MjmlText>
          {`{{/if}}`}
        </MjmlColumn>
        {noPrice && <MjmlColumn width="40%" />}
        <MjmlColumn verticalAlign="middle" width="20%">
          <MjmlText
            fontSize={16}
            padding="6px 0px"
            align="center"
            color="#22262A"
          >
            {`{{quantity}}`}
          </MjmlText>
        </MjmlColumn>
        {!noPrice && (
          <>
            <MjmlColumn verticalAlign="middle" width="20%">
              <MjmlText
                fontSize={16}
                padding="6px 0px"
                align="center"
                color="#22262A"
              >
                €{`{{price}}`}
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn verticalAlign="middle" width="20%">
              <MjmlText
                fontSize={16}
                padding="6px 0px"
                align="right"
                color="#22262A"
              >
                €{`{{price}}`}
              </MjmlText>
            </MjmlColumn>
          </>
        )}
      </MjmlGroup>
      <MjmlText>{`{{/each}}`}</MjmlText>
    </MjmlSection>
  );
};

export default Products;
