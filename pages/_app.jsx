import React from "react";

import "../styles/globals.css";
import "../styles/theme.css";
import "../styles/layout.css";
import "../styles/menu.css";
import "../styles/modal.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
