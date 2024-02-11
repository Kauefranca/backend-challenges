CREATE TABLE IF NOT EXISTS pizzeria.pizza (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    ingredients JSON,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pizzeria.order (
    id INT NOT NULL AUTO_INCREMENT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pizzeria.order_item (
    id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    pizza_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES order(id),
    FOREIGN KEY (pizza_id) REFERENCES pizza(id),
    PRIMARY KEY (id)
);