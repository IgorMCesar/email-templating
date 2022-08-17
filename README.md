## Usage

```bash
cd email-templating
yarn
yarn start
```

and afterwards just open your browser using the link [http://localhost:3000/](http://localhost:3000/).

> The http server will listen and restart upon each change inside src folder.
> You just need to refresh a browser window manually.

### To generate emails

You can also generate and export your email:

```bash
yarn export
```

The emails should be inside exported_emails!

### To send test emails to your inbox

It is possible to send test emails using [nodemailer](https://nodemailer.com/about/), but that needs to be implemented.
