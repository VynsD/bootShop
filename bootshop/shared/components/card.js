import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: "Add to Cart",
      id: props.id,
      selectedOption: {},
      selectedVariant: {},
      title: props.title,
      variants: props.variants
    }
  }
  componentWillMount() {
    this.state.variants ? (
      this.setState({
        ...this,
        selectedVariant: this.state.variants[0].node
      })
    ) : () => { return new Error() }
  };

  updateSelectedVariant = () => {
    const variants = this.state.variants;
    const found = variants.filter(e => e.node.id.includes(this.state.selectedOption));
    found ? ( 
      this.setState({
        ...this,
        selectedVariant: found[0].node
      })
    ) : () => { throw new Error() };
  }

  handleSelect = (event) => {
      this.setState({
        ...this,
        selectedOption: event.target.value
      },
      () => this.updateSelectedVariant(),
    );
  };

  render() {
    const selectedOption = this.state.selectedOption;

    return (
      <div 
        key={this.state.id} 
        className="card"
      >
        <figure className="card-product">
          <img 
            className="card-product_img"
            src={this.state.selectedVariant.image.src} 
            alt={this.state.title}
          />
          <figcaption className="card-product_caption">{this.state.title.toUpperCase()}</figcaption>
        </figure>
        <select 
          id={this.state.selectedVariant.id + "select"}
          name="sizeColor"
          className="card-choices"
          value={selectedOption}
          onChange={this.handleSelect}
        > {
            this.state.variants.map((e, i) => {
              return (
                <option 
                  key={i}
                  className="card-choices_variants"
                  value={e.node.id}
                >
                  {e.node.title}
                </option>
              ) 
            })
          }
        </select>
        <h4 className="card-price">{"$ " + this.state.selectedVariant.price.replace('.00', '')}</h4>
        <button 
          className="card-btn"
        >
          {this.state.btnText.toUpperCase()}
        </button>
      </div>
    );
  }
}

export default Card;
