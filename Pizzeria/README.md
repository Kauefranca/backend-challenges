Backend 
=======

Made using
* [nodejs](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)

Project description
-------------------
**Pizzeria**

This application serves the purpose of exposing a JSON API to be consumed by a frontend client for ordering pizza.

The following entities should be created (including proper relations):

* *pizza* - has a name and price (e.g. Margherita $5, Pepperoni $6, ...)
* *order* - has items
* *order item* - has a pizza and quantity

The following endpoints should return a JSON response:
* `/api/orders` (list of orders)
* `/api/orders/:id` (details of an individual order)
* `/api/pizzas` (list of pizzas; see './backend/example-pizzas.json')

### Screenshots of my implementation
![Implementation](/Pizzeria/images/ordersList.png?raw=true)
-------------------
![Implementation](/Pizzeria/images/orderDetails.png?raw=true)
-------------------
![Implementation](/Pizzeria/images/pizzasList.png?raw=true)

-------------------
[Challenge repository](https://github.com/AmbulnzLLC/fullstack-challenge/blob/master/backend/README.md)