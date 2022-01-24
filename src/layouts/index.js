import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import "../style/index.scss";
import { Container, Wrap } from "../style/Container";
import {
  Header,
  HeaderBody,
  HeaderSummary,
  HeaderTitle,
  HeaderLine,
} from "../style/Header";
import { Footer } from "../style/Footer";

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Travel agency" />
    <Container>
      <Header>
        <Wrap>
          <HeaderBody>
            <HeaderTitle>
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}
              </Link>
            </HeaderTitle>
            <HeaderSummary>
              <HeaderLine>🛍 MY CART 🛍</HeaderLine>
              <HeaderLine>
                Number of items: <span></span>
              </HeaderLine>
              <HeaderLine>
                Total price: <span></span>
              </HeaderLine>
            </HeaderSummary>
          </HeaderBody>
        </Wrap>
      </Header>
      <Wrap>{children}</Wrap>
      <Wrap>
        <Footer>
          This website is just an example project to demonstrate how you can
          integrate <a href="https://www.gatsbyjs.org/">Gatsby</a>,{" "}
          <a href="https://snipcart.com/">Snipcart</a> and{" "}
          <a href="https://www.datocms.com">DatoCMS</a>.
        </Footer>
      </Wrap>
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
