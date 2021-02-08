import React, { useState, useContext } from 'react';

import CartContext from 'context/CartContext';

import { Button } from '../Button';
import { Input } from '../Input';
import { ProductQuantityAdderWrapper } from './styles';

export const ProductQuantityAdder = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          min="1"
          step="1"
          disabled={!available}
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button fullWidth type="submit" disabled={!available}>
          Add to Cart
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
};
