import { render } from "mjml-react";
import fs from "fs";

import emails from "./emails";
import emailsData from "./emails-data.json";

if (!fs.existsSync("./exported_emails")) {
  fs.mkdirSync("./exported_emails");
}

Object.keys(emailsData).forEach((id) => {
  const emailName = emailsData[id].name;
  const email = emails[emailName];

  const { html } = render(email(), { validationLevel: "soft" });
  fs.writeFileSync(`./exported_emails/${emailName}.html`, html);
});
