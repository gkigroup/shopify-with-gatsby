import React, { useContext, useEffect, useState } from 'react';

import CartContext from 'context/CartContext';

import { Layout, ImageGallery } from 'components';
import { Grid, SelectWrapper } from './styles';

import { graphql } from 'gatsby';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const ProductTemplate = ({ data }) => {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const result = await getProductById(data.shopifyProduct.shopifyId);
      setProduct(result);
    };
    getProduct();
  }, [getProductById, setProduct]);

  return (
    <Layout>
      <Grid>
        <div>
          <h1>{data.shopifyProduct.title}</h1>
          <p>{data.shopifyProduct.description}</p>
          {product?.availableForSale && (
            <SelectWrapper>
              <strong>Variant</strong>
              <select>
                {product?.variants.map(variant => (
                  <option key={variant.id}>{variant.title}</option>
                ))}
              </select>
            </SelectWrapper>
          )}
        </div>
        <div>
          <ImageGallery images={data.shopifyProduct.images} />
        </div>
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;
