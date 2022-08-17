import React from "react";

import { MjmlButton } from "mjml-react";

const Button = ({ children, ...props }) => {
  return (
    <MjmlButton
      backgroundColor="#22262A"
      color="#FFFFFF"
      borderRadius={0}
      innerPadding="10px 20px"
      align="left"
      {...props}
    >
      {children}
    </MjmlButton>
  );
};

export default Button;
