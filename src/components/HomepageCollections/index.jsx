import React from 'react';

import { CollectionTile } from 'components';

export const HomepageCollections = ({ collections }) => {
  return (
    <div>
      {collections.map(collection => (
        <CollectionTile
          title={collection.title}
          description={collection.description}
          backgroundImage={collection.image.localFile.childImageSharp.fluid}
          key={collection.shopifyId}
        />
      ))}
    </div>
  );
};
