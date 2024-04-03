*Duncan McMurtrie
Student ID 220478131*


# Deakin SIT323 Task 4.1P: Simple Calculator App

## Description
This is a simple HTTP calculator app built using Node.js and Express, and Winston for logging. Conforming to the specification set out by the 4.1P tasksheet, it contains four endpoints: `/add`, `/subtract`, `/multiply` and `/divide`. Each endpoint takes two parameters, `n1` and `n2`.

For all endpoints, the application will attempt to parse `n1` and `n2` as floating point numbers.

## Endpoints
### Add
- Usage: `/add?n1=x&n2=y`
- Returns:
  - Adds n2 to n1 and returns this result in a HTTP 200 OK response
  - A HTTP 500 error if n1 or n2 are invalid numbers, with details of the error.
- Logs:
  - Any successful addition in the combined log
  - Any errors in the error log.
 
### Subtract
- Usage: `/subtract?n1=x&n2=y`
- Returns:
  - Subtracts n2 from n1 and returns this result in a HTTP 200 OK response
  - A HTTP 500 error if n1 or n2 are invalid numbers, with details of the error.
- Logs:
  - Any successful addition in the combined log
  - Any errors in the error log.
 
### Multiply
- Usage: `/multiply?n1=x&n2=y`
- Returns:
  - Multiplies n1 by n2 and returns this result in a HTTP 200 OK response
  - A HTTP 500 error if n1 or n2 are invalid numbers, with details of the error.
- Logs:
  - Any successful addition in the combined log
  - Any errors in the error log.
 
### Divide
- Usage: `/divide?n1=x&n2=y`
- Returns:
  - Divides n1 by n2 and returns this result in a HTTP 200 OK response
  - A HTTP 500 error if n1 or n2 are invalid numbers, with details of the error.
  - A HTTP 500 error if n2 is zero.
- Logs:
  - Any successful addition in the combined log
  - Any errors in the error log.

## Current Limitations & Shortcomings
- Currently, only four arithmetic operations are provided.
- Error handling code (checking whether n1 and n2 are valid numbers) is duplicated across all endpoints, making updates to this logic longwinded and error-prone.

## Areas for Improvement
- Factoring out error handling to reduce code duplication and improve extensibility
- Adding in other arithmetic operators such as exponentiation, roots, etc.
