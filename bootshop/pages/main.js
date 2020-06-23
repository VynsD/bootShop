import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.shop.products
    };
  }

  render() {

    return (
      <div>
        {console.log('edges after passing data ', this.state.products.edges)}
        {
          this.state.products.edges.map((e, i) => {
            return (
              <div key={e.node.id}>
                <h3>{e.node.title}</h3>
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
                <div>{console.log(e.node.variants)}</div> {/* TODO Understand use */}
              </div>
            ) 
          })
        }
      </div>
    );
  }
}

export default Main;