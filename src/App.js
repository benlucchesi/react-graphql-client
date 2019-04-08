import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import './App.css';

import { ApolloProvider } from "react-apollo";
import { Libraries } from "./Libraries"

class App extends Component {

  client = null

  componentWillMount(){

    this.client = new ApolloClient({
      uri: 'http://localhost:8080/graphql' 
    })

  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <div className="App">
          <Libraries />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
