// FoodItem.tsx
import React from 'react';

interface FoodItemProps {
  name: string;
  description: string;
  price: number;
}

const FoodItem: React.FC<FoodItemProps> = ({ name, description, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
};

export default FoodItem;
