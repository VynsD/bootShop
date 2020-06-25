import React, { Component } from 'react';
import Card from '../shared/components/card';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.shop.products
    };
  }

  render() {
    return (
      <div className="grid-wrapper">
        {
          this.state.products.edges.map((e, i) => {
            return (
              <>
                <Card
                  id={e.node.id}  
                  title={e.node.title}
                  variants={e.node.variants.edges}
                />
                {/* 
                <div>
                  { // TODO Understand use
                    e.node.options.map((e, i) => {
                      return (
                        <div key={i}>
                          <label htmlFor={e.id}>{e.name}:</label>
                          <select name={e.name} id={e.id}>
                              {
                                e.values.map((e, i) => {
                                  return <option key={i} value={e}>{e}</option>
                                })
                              }
                          </select>
                        </div>
                      )}
                    )
                  } 
                </div> 
                */}
              </>
            ) 
          })
        }
      </div>
    );
  }
}

export default Main;