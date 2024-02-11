const express = require('express');
const router = express.Router();
const MySql = require('./connection');
const { connection } = new MySql();

router.get('/pizzas', function (req, res) {
    connection.query(`SELECT name, price, JSON_EXTRACT(ingredients, '$')
    AS ingredients
    FROM pizzeria.pizza`,
    function (error, results) {
        if (error) throw error;
        results = results.map(row => {
            let ingredients = JSON.parse(row.ingredients);
            return ({
              id: row.id,
              name: row.name,
              price: row.price,
              ingredients: ingredients
            });
        });
        
        res.send(results);
    });
});

router.get('/orders', function (req, res) {
    connection.query(`SELECT id, order_date, status FROM pizzeria.order`,
    function (error, results) {
        if (error) throw error;

        res.send(results);
    });
});

router.get('/orders/:id', function (req, res) {
    const { id } = req.params;
    connection.query(`SELECT o.id AS order_id, p.name, p.price, oi.quantity
    FROM pizzeria.order o 
    LEFT JOIN pizzeria.order_item oi ON o.id = oi.order_id
    LEFT JOIN pizzeria.pizza p ON oi.pizza_id = p.id
    WHERE o.id = ${id};`,
    function (error, results) {
        if (error) throw error;

        if (results.length) {
            return res.send(results)
        }
        else return res.status(400).send({error: {
            message: 'Order number not found!'
        }});
    });
});

module.exports = router;