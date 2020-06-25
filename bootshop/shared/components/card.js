import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      variants: props.variants
    }
  }
  render() {
    return (
      <div key={this.state.id} className="">
        <figure>
          <img src="" alt="test" />
          <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
        </figure>
        <h3>{this.state.title}</h3>
        <select name="sizeColor" id="a">
          <option key="b" value="test">test</option>
          {/*<select name={e.name} id={e.id}>*/}
            {/*
              e.values.map((e, i) => {
                return <option key={i} value={e}>{e}</option>
              })
            */}
        </select>
        <h4>Price</h4>
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default Card;