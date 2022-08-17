import React from "react";

import { MjmlSection, MjmlText } from "mjml-react";

const Footer = ({ ...props }) => {
  return (
    <MjmlSection padding="0 32px 120px" {...props}>
      <MjmlText
        fontSize={14}
        lineHeight={18}
        letterSpacing="0.14px"
        align="center"
        color="#818A92"
      >
        This is an automatically generated e-mail, please do not reply.
        <br /> You’re receiving this email because you shopped from Github.{" "}
        <a href="/" target="_blank" style={{ textDecoration: "none" }}>
          Unsubscribe
        </a>
      </MjmlText>
    </MjmlSection>
  );
};

export default Footer;
