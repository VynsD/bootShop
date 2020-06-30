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
              <Card
                key={i}
                id={e.node.id}  
                title={e.node.title}
                variants={e.node.variants.edges}
              />
            ) 
          })
        }
      </div>
    );
  }
}

export default Main;