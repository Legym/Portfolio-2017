import React from 'react';
import App, { Container } from 'next/app';

// Layout
import Default from '@layout/default';

// Providers

// Global CSS; All themes share these
import 'semantic-ui-css/semantic.min.css';
import 'static/_global/css/_font-icon.css';

// SCSS
import '@assets/_global/scss/global.scss';

// Combine multiple context providers into one
// const Providers = ({ children }) => (
//   <CohesionProvider>
//     {children}
//   </CohesionProvider>
// )

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Default>
          <Component {...pageProps} />
        </Default>
      </Container>
    );
  }
}

export default MyApp;
