import React from 'react';

export const ProductsGrid = ({ products }) => {
  return (
    <section>
      {products?.map(product => (
        <div>{product.title}</div>
      ))}
    </section>
  );
};
