const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

const port = 3001

// the "database" (id "generated", name set somewhere on the UI)
let customers = [
  {
    id: 1,
    name: "John Customer"
  },
  {
    id: 2,
    name: "Lia Customer"
  },
]

// retrieve all customers on a GET http://localhost:3001/customers request
app.get('/customers', (req, res) => {
  res.json(customers)
})

// save a new customer to the customer table on a POST http://localhost:3001/customers request
app.post('/customers', (req, res) => {
  const lastCustomer = 0 < customers.length ? customers[customers.length - 1] : null
  const newCustomerId = lastCustomer ? lastCustomer.id + 1 : 1

  customers.push({
    id: newCustomerId,
    name: req.body.name
  })

  res.json(customers)
})

// updates an existing customer in the customer table on a PUT http://localhost:3001/customers/[customerId] request
app.put('/customers/:id', (req, res) => {
  const idFromParameter = req.params.id.toString()
  const modifiedCustomerIndex = customers.findIndex(element => {
    return element.id.toString() === idFromParameter
  });

  customers[modifiedCustomerIndex] = {
    ...customers[modifiedCustomerIndex],
    ...req.body
  }

  res.json(customers)
})

// deletes an existing customer in the customer table on a DELETE http://localhost:3001/customers/[customerId] request
app.delete('/customers/:id', (req, res) => {
  const idFromParameter = req.params.id.toString()

  customers = customers.filter(element => {
    return element.id.toString() === idFromParameter
  });
  res.json(customers)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})