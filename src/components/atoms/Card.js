import React from "react";

import { MjmlColumn } from "mjml-react";

const Card = ({ children, ...props }) => {
  return (
    <MjmlColumn
      border="1px solid #E6E8EA"
      backgroundColor="#FFFFFF"
      padding="20px"
      {...props}
    >
      {children}
    </MjmlColumn>
  );
};

export default Card;
