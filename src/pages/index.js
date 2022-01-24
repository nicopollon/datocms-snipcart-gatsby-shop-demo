import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";
import { Catalogue, CatalogueItem } from "../style/Catalogue";
import {
  Product,
  ProductBuy,
  ProductDetails,
  ProductImage,
  ProductPrice,
  ProductName,
} from "../style/Product";

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={(data) => (
      <Layout site={data.site}>
        <Catalogue>
          {data.products.edges.map(({ node: product }) => (
            <CatalogueItem key={product.id}>
              <Product>
                <ProductImage>
                  <Img sizes={product.image.sizes} />
                </ProductImage>{" "}
                <ProductDetails>
                  <ProductName>
                    {product.name}
                    <ProductPrice>{product.price}€</ProductPrice>
                  </ProductName>
                  <ProductBuy
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={`https://suspicious-snyder-3fa378.netlify.app/`}
                  >
                    Buy now
                  </ProductBuy>
                </ProductDetails>
              </Product>
            </CatalogueItem>
          ))}
        </Catalogue>
      </Layout>
    )}
  />
);
