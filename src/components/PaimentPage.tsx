import React, { useState, useEffect } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation

const PaimentPage: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [deliveryTime, setDeliveryTime] = useState<string>('');

  // Get totalAmount from location state
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || ''; // Access totalAmount from location state

  // useEffect to calculate delivery time when totalAmount changes
  useEffect(() => {
    // Calculate delivery time
    const currentTime = new Date();
    const deliveryDateTime = new Date(currentTime.getTime() + 30 * 60000); // Add 30 minutes in milliseconds
    const deliveryTimeString = deliveryDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setDeliveryTime(deliveryTimeString);
  }, [totalAmount]); // Run effect when totalAmount changes

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform Payment processing logic here
    console.log('Payment submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="address">
              <Form.Label className="text-lg">Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 rounded py-2 px-4 mb-4"
              />
            </Form.Group>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <Form.Group controlId="totalAmount">
                  <Form.Label className="text-lg">Total Amount: {totalAmount} Dt</Form.Label> {/* Display totalAmount here */}
                </Form.Group>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <Form.Group controlId="deliveryTime">
                  <Form.Label className="text-lg">Delivery Time</Form.Label>
                  <p>{deliveryTime}</p> {/* Display delivery time */}
                </Form.Group>
              </div>
            </div>
            <Button variant="primary" type="submit" className="py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600">
              Confirm Now
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PaimentPage;
