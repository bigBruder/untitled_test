import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles"; // works with @material-ui/core/styles, if you prefer to use it.
// import theme from "../src/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
