import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: []
    }
  }

  // retrieve all customers on a GET http://localhost:3001/customers request
  getCustomers = () => {
    axios.get('http://localhost:3001/customers').then(customers => {
      console.log(customers);
      this.setState({ customers: customers.data })
    });
  }

  // save a new customer to the customer table on a POST http://localhost:3001/customers request
  postCustomer = () => {
    const requestBody = {
      name: "Hendrikksen Customer"
    }
    axios.post('http://localhost:3001/customers', requestBody).then(customers => {
      this.setState({ customers: customers.data })
    });
  }

  // updates an existing customer in the customer table on a PUT http://localhost:3001/customers/[customerId] request
  putCustomer = () => {
    const requestBody = {
      name: "Amalia Customer"
    }
    axios.put('http://localhost:3001/customers/1', requestBody).then(customers => {
      console.log(customers);
      this.setState({ customers: customers.data })
    });
  }

  // deletes an existing customer in the customer table on a DELETE http://localhost:3001/customers/[customerId] request
  deleteCustomer = () => {
    axios.delete('http://localhost:3001/customers/1').then(customers => {
      console.log(customers);
      this.setState({ customers: customers.data })
    });
  }

  render() {
    return (
      <div className="App" >
        <div>
          <button onClick={this.getCustomers}>Perform "GET"</button>
        </div>
        <div>
          <button onClick={this.postCustomer}>Perform "POST"</button>
        </div>
        <div>
          <button onClick={this.putCustomer}>Perform "PUT"</button>
        </div>
        <div>
          <button onClick={this.deleteCustomer}>Perform "DELETE"</button>
        </div>
        <div>
          <pre>{JSON.stringify(this.state.customers)}</pre>
        </div>
      </div>
    );
  }
}

export default App;
