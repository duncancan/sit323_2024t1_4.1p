// Packages
const express = require("express");
const app = express();
const fs = require("fs");
const winston = require("winston");

/**
 * Logging levels specified by RFC5424, used by libraries such as `winston`, are as follows:
 * 
 * const levels = {
 *  error: 0,
 *  warn: 1,
 *  info: 2,
 *  http: 3,
 *  verbose: 4,
 *  debug: 5,
 *  silly: 6
 * }
 * 
 * This information can be 
 */
// 

// Environment variables and loggers
const port = process.env.port || 3000;
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta:  { service: 'calculator-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error'}),
        new winston.transports.File({ filename: 'combined.log' })
    ]
})

// Calculator functions
const add = (n1, n2) => {
    return n1 + n2;
}

// Function to validate number parameters for calculator and log errors for invalid numbers
const validateNumberParams = (n1, n2, endpoint) => {
    try {
        const a = parseFloat(n1);
        const b = parseFloat(n2);
        if (isNaN(a)) {
            logger.error("Parameter n1 is not a valid number");
            throw new Error(`Invalid number ${a} received for parameter n1 at endpoint ${endpoint}`);
        }
        if (isNaN(b)) {
            logger.error("Parameter n2 is not a valid number");
            throw new Error(`Invalid number ${b} received for parameter n2 at endpoint ${endpoint}`);
        }
        return {n1: a, n2: b};
    } catch (error) {
        return error;
    }
}

// Endpoint to add two numbers
// Usage: http://localhost:3000/add?n1=1&n2=5
app.get("/add", (req, res) => {
    const n1 = req.query.n1;
    const n2 = req.query.n2;
    try {
        params = validateNumberParams(n1, n2, "/add");
        res.status(200).json({ statuscode: 200, data: add(params.n1, params.n2)});
        console.log(params);
    } catch (error) {
        console.log("this code has been reached");
        console.error(error);
        res.status(500).json({statuscode: 500, msg: error.toString() });
    }
    
});

app.listen(port, () => {
    console.log("App listening on port", port);
});
