import App from "next/app";
import { createGlobalStyle } from "styled-components";
import { NextComponentType, NextPageContext } from "next";
import { Router, useRouter } from "next/router";

/**
 * Custom Next.js App
 *
 * The App component is used to initialize pages,
 * it is the top level parent to all components.
 *
 * It is used to
 *  - inject global CSS for the html and body tags
 *  - pass the Theme to all styled-components
 *  - keep state between page navigation on the client
 */

/**
 * GlobalStyle: injects global CSS
 */
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-Thin.ttf");
  font-weight: 100;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-ExtraLight.ttf");
  font-weight: 200;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-Light.ttf");
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-Regular.ttf");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-Medium.ttf");
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-SemiBold.ttf");
  font-weight: 600;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-Bold.ttf");
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-ExtraBold.ttf");
  font-weight: 800;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-Black.ttf");
  font-weight: 900;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-ThinItalic.ttf");
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-ExtraLightItalic.ttf");
  font-weight: 200;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-LightItalic.ttf");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-Italic.ttf");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-MediumItalic.ttf");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-SemiBoldItalic.ttf");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-BoldItalic.ttf");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-ExtraBoldItalic.ttf");
  font-weight: 800;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Raleway;
  src: url("/fonts/Raleway-BlackItalic.ttf");
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: Raleway, sans-serif;
    scroll-behavior: smooth;
    width: 100vw;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }



  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

interface MyAppProps extends App {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
