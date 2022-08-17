import React from "react";
import { readFileSync } from "fs";

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlStyle,
  MjmlSection,
  MjmlText,
  MjmlSpacer,
  MjmlImage,
  MjmlAll,
  MjmlAttributes,
} from "mjml-react";

import { Card, Divider, Footer, Header } from "../components";

const css = readFileSync("./assets/styles.css").toString();

const BasicLayout = ({
  children,
  title,
  preview,
  summary,
  summarySpacing = 32,
  subjectExplained,
  greetingMessage,
  ...props
}) => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>{title}</MjmlTitle>
        <MjmlPreview>{preview}</MjmlPreview>
        <MjmlStyle>{css}</MjmlStyle>
        <MjmlAttributes>
          <MjmlAll padding={0} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody width={620} backgroundColor="#e2e8f0" {...props}>
        <MjmlSection fullWidth paddingTop={52} paddingBottom={32}>
          <Card padding="32px 28px">
            <Header subjectExplained={subjectExplained} />
            <MjmlSpacer height={32} />
            {summary && (
              <>
                <MjmlText
                  fontSize={16}
                  lineHeight={22}
                  letterSpacing="0.16px"
                  color="#22262A"
                >
                  {summary}
                </MjmlText>
                <MjmlSpacer height={summarySpacing} />
              </>
            )}
            {children}
            <Divider />
            <MjmlText lineHeight={18} fontSize={20} letterSpacing={0.16}>
              Thank You!
            </MjmlText>
            <MjmlSpacer height={32} />
            <MjmlImage
              width={32}
              align="left"
              src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
            />
            <MjmlSpacer height={12} />
            <MjmlText lineHeight={14} fontSize={12} letterSpacing={0.12}>
              ©Github 2021
            </MjmlText>
            <Divider />
            <MjmlText
              paddingBottom={0}
              lineHeight={22}
              fontSize={16}
              letterSpacing={0.16}
            >
              Need support with your order? Please visit our{" "}
              <a href="/" target="_blank">
                FAQ
              </a>{" "}
              for help.
            </MjmlText>
          </Card>
        </MjmlSection>
        <Footer />
      </MjmlBody>
    </Mjml>
  );
};

export default BasicLayout;
