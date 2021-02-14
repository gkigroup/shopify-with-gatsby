import React, { useContext } from 'react';
import { Layout, SEO, HomepageCollections, FeaturedProducts } from 'components';

import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <HomepageCollections
        collections={collections?.filter(
          collection => collection.title !== 'Featured Hats'
        )}
      />
      {collections.find(collection => collection.title === 'Featured Hats') && (
        <FeaturedProducts />
      )}
    </Layout>
  );
};

export default IndexPage;
