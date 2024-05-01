// IngredientsList.tsx
import React from 'react';

interface IngredientsListProps {
  ingredients: string[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
