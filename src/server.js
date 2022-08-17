import express from "express";
import { render } from "mjml-react";
import Handlebars from "handlebars";

import emails from "./emails";
import emailsData from "./emails-data.json";

const port = 3000;
const app = express();

app.get("/:email", (req, res) => {
  const emailId = req.params.email;
  const emailData = emailsData[emailId];

  if (emailData) {
    const { html } = render(emails[emailData.name](), {
      validationLevel: "soft",
    });
    const compiledHtml = Handlebars.compile(html);

    res.send(compiledHtml(emailData.mockData));
  }
});

app.get("*", (req, res) => {
  const emailLinks = Object.keys(emailsData).map(
    (id) => `<a href="/${id}">${emailsData[id].name}</a>`
  );

  const html = `${emailLinks.join("</br></br>")}`;

  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
