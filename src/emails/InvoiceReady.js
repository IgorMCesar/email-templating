import React from "react";

import { BasicLayout } from "../Layouts";

import { MjmlText } from "mjml-react";
import { Button } from "../components";

const InvoiceReady = () => {
  return (
    <BasicLayout
      subjectExplained="Your invoice #{{number}} is ready"
      summary="In order to download your invoice click the button below:"
      summarySpacing={24}
    >
      <Button href="{{download_url}}">
        <MjmlText
          fontSize={16}
          lineHeight={20}
          letterSpacing={0.16}
          color="#FFFFFF"
        >
          Download invoice
        </MjmlText>
      </Button>
    </BasicLayout>
  );
};

export default InvoiceReady;
