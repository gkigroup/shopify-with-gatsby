import React from 'react';

export const CollectionTile = ({ description, title, backgroundImage }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
