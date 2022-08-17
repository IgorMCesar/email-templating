import React from "react";

import { MjmlDivider } from "mjml-react";

export const Divider = ({ children, ...props }) => {
  return (
    <MjmlDivider
      borderColor="#E6E8EA"
      borderWidth={1}
      paddingTop={32}
      paddingBottom={32}
      {...props}
    />
  );
};

export default Divider;
