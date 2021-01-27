I created this simple example as I could not find any tutorial
having a "fully functional" express CRUD (create, read, update, delete) server.

This example is an oversimplified one, I would not really suggest using it as-is for real servers.
If you need to try mocks, this might be useful.
Customer id is "generated" (increment)
There is no error handling.

Usage:
```
npm install
npm start
```

It runs on 
```
http://localhost:3001
```

Initial customers table:
```
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
```


Endpoints:
```
GET /customers
```
retrieves the customer array

```
POST /customers
```
posts one customer to the customer array (only need "name" in request body)

```
PUT /customers/:id
```
modifies a customer with the given id in the customer array (only need "name" in request body)

```
DELETE /customers/:id
```
deletes a customer with the given id from the customer array