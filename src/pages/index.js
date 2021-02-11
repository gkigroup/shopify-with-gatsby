import React, { useContext } from 'react';
import { Layout, SEO, HomepageCollections } from 'components';

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
    </Layout>
  );
};

export default IndexPage;
