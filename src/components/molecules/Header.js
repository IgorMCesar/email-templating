import React from "react";

import { MjmlColumn, MjmlText, MjmlImage, MjmlSpacer } from "mjml-react";

const Header = ({ subjectExplained }) => {
  return (
    <MjmlColumn width="100%">
      <MjmlImage
        paddingTop={0}
        paddingBottom={0}
        width={64}
        align="left"
        src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
      />
      <MjmlSpacer height={40} />
      <MjmlText
        fontSize={24}
        lineHeight={30}
        letterSpacing="0.2px"
        color="#22262A"
      >
        Hello,
        {`
          {{#if user.first_name}}
            {{ user.first_name }} {{ user.last_name }}.
          {{else}}
            {{ recipient_email }}.
          {{/if}}
        `}
      </MjmlText>
      <MjmlText
        fontSize={24}
        lineHeight={30}
        letterSpacing="0.2px"
        color="#818A92"
      >
        {subjectExplained}
      </MjmlText>
    </MjmlColumn>
  );
};

export default Header;
