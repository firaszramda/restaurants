import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface Food {
  id: number;
  name: string;
  price: number;
}

const foods: Food[] = [
  { id: 1, name: 'Pizza Margherita', price: 10.99 },
  { id: 2, name: 'Cheeseburger', price: 8.99 },
  { id: 3, name: 'Spaghetti Bolognese', price: 12.99 },
  { id: 4, name: 'Caesar Salad', price: 7.99 },
  { id: 5, name: 'Sushi Combo', price: 15.99 },
  { id: 6, name: 'Fish and Chips', price: 11.99 },
  { id: 7, name: 'Chicken Tikka Masala', price: 13.99 },
  { id: 8, name: 'Steak Frites', price: 18.99 }
];

const OrderForm: React.FC = () => {
  const [selectedFoods, setSelectedFoods] = useState<number[]>([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Calculate total amount based on selected foods
  const calculatedTotalAmount: number = selectedFoods.reduce(
    (total: number, foodId: number) => {
      const food = foods.find(food => food.id === foodId);
      const price: number = food ? food.price : 0; // Provide a default value for the price
      return total + price;
    },
    3 // Initial value of total
  );

  const handleAddToCart = () => {
    if (selectedFoods.length === 0) {
      // Handle case where no foods are selected
      return;
    }
    
    // Calculate delivery time
    const currentTime = new Date();
    const deliveryTime = new Date(currentTime.getTime() + 30 * 60000); // Add 30 minutes in milliseconds
    
    // Perform any logic you need before navigating
    navigate('/payment', { 
      state: { 
        totalAmount: calculatedTotalAmount, 
        deliveryTime: deliveryTime 
      } 
    });
  };

  return (
    <div>
      <h2>Customize Your Order</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {foods.map((food) => (
          <Card key={food.id} style={{ width: 'calc(50% - 10px)', marginBottom: '20px' }}>
            {/* Placeholder for food image */}
            <Card.Img variant="top" src={`https://via.placeholder.com/100`} />
            <Card.Body>
              <Card.Title>{food.name}</Card.Title>
              <Card.Text>
                Price: dt {food.price.toFixed(2)}
              </Card.Text>
              <Button 
                variant={selectedFoods.includes(food.id) ? "success" : "primary"} 
                onClick={() => setSelectedFoods(prevSelected => {
                  if (prevSelected.includes(food.id)) {
                    return prevSelected.filter(id => id !== food.id);
                  } else {
                    return [...prevSelected, food.id];
                  }
                })}
              >
                {selectedFoods.includes(food.id) ? "Selected" : "Select"}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleAddToCart} style={{ backgroundColor: 'green', color: 'white' }}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default OrderForm;
