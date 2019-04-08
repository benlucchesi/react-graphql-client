import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

export class Libraries extends Component {

  client = null

  librariesQuery = gql`
        query{
          libraryList{
            id,
            name,
            addresses{
              id,
              street
            }
            keyWords
          }
        } 
      `

  listLibraries = () => {
    console.log("listing libraries....")
    this.client.query({
      query: this.librariesQuery,
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <Query query={
          gql`
            query{
              libraryList{
                id,
                name,
                addresses{
                  id,
                  street
                }
                keyWords
              }
            } 
          `
        }
        >
          { ({loading,error,data}) => {
              if( loading ) return <div>loading.....</div>
              if( error ) return <div>no good....</div>
              return data.libraryList.map( library => 
                <div key={library.id}>
                  <p>{library.name}</p>
                </div>
              )
            }
          }
        </Query>
      </div>
    );
  }
}

