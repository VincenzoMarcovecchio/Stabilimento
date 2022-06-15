import Document, { Head, Main, NextScript, Html } from "next/document";


export default class MyDocument extends Document {

  render() {

    return (
      <Html lang="it-IT">
        <Head></Head>
          <Main />
          <NextScript />
      </Html>
    );
  }
}