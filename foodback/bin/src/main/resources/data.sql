INSERT INTO customers (customername, password, email, address) VALUES
('admin', 'admin', 'admin@example.com', 'admin'),
('john_doe', 'password123', 'john.doe@example.com', '123 Elm Street'),
('jane_smith', 'password456', 'jane.smith@example.com', '456 Oak Avenue');

INSERT INTO restaurants (name, location, rating) VALUES
('Pizza Palace', 'Downtown', 4.5),
('Burger Bistro', 'Uptown', 4.0),
('Sushi Central', 'Midtown', 4.8),
('Taco Town', 'Eastside', 4.2);

INSERT INTO menu_items (name, price, restaurant_id) VALUES
('Margherita Pizza', 8.99, 1),
('Pepperoni Pizza', 9.99, 1),
('Veggie Pizza', 10.99, 1),
('BBQ Chicken Pizza', 11.99, 1);

INSERT INTO menu_items (name, price, restaurant_id) VALUES
('Cheeseburger', 5.99, 2),
('Veggie Burger', 6.99, 2),
('Chicken Burger', 7.99, 2),
('Bacon Burger', 8.99, 2);

INSERT INTO menu_items (name, price, restaurant_id) VALUES
('California Roll', 7.99, 3),
('Spicy Tuna Roll', 8.99, 3),
('Dragon Roll', 9.99, 3),
('Tempura Roll', 10.99, 3);

INSERT INTO menu_items (name, price, restaurant_id) VALUES
('Beef Taco', 2.99, 4),
('Chicken Taco', 3.49, 4),
('Fish Taco', 3.99, 4),
('Veggie Taco', 2.49, 4);