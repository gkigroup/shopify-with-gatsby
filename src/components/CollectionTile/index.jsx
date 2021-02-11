import React from 'react';

import BackgroundImage from 'gatsby-background-image';

import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';

export const CollectionTile = ({ description, title, backgroundImage }) => {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
};
