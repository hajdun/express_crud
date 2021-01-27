import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: []
    }
  }

  getCustomers = () => {
    axios.get('http://localhost:3000/customers').then(customers => {
      console.log(customers);
      this.setState({ customers: customers.data })
    });
  }

  postCustomer = () => {
    const requestBody = {
      name: "Hendrikksen Customer"
    }
    axios.post('http://localhost:3000/customers', requestBody).then(customers => {
      this.setState({ customers: customers.data })
    });
  }

  putCustomer = () => {
    const requestBody = {
      name: "Amalia Customer"
    }
    axios.put('http://localhost:3000/customers/1', requestBody).then(customers => {
      console.log(customers);
      this.setState({ customers: customers.data })
    });
  }

  deleteCustomer = () => {
    axios.delete('http://localhost:3000/customers/1').then(customers => {
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
