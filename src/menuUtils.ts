// Define the Ingredient interface
export interface Ingredient {
    id: number;
    name: string;
    price: number;
  }
  
  // Function to generate a menu item string
  export const generateMenuItem = (itemName: string, itemPrice: number) => `${itemName} - $${itemPrice.toFixed(2)}`;
  
  // Function to generate menu items from an array of ingredients
  export const generateMenuItems = (ingredients: Ingredient[]) => {
    return ingredients.map(ingredient => generateMenuItem(ingredient.name, ingredient.price));
  };
  