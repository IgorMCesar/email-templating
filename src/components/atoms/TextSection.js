import React from "react";

import { MjmlText, MjmlSpacer } from "mjml-react";

const TextSection = ({ label, content, ...props }) => {
  return (
    <>
      <MjmlText
        fontSize={14}
        lineHeight={18}
        letterSpacing="0.14px"
        color="#ADB3B8"
      >
        {label}
      </MjmlText>
      <MjmlSpacer height={2} />
      <MjmlText
        fontSize={16}
        lineHeight={20}
        letterSpacing="0.16px"
        color="#22262A"
      >
        {content}
      </MjmlText>
      {}
    </>
  );
};

export default TextSection;
