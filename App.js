console.table(items);

class App extends React.Component {
  state = {
    items: items,
    item: "",
    brand: "",
    units: 0,
    quantity: 0,
    isPurchased: false,
    shoppingCart: [],
  };

  handleChange = (event) => {
    console.dir(event);
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
    };
    this.setState({
      items: [newItem, ...this.state.items],
      item: "",
      brand: "",
      units: 0,
      quantity: 0,
      isPurchased: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>React Groceries</h1>

        {/* Input Form */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Item</label>
          <input
            type="text"
            value={this.state.item}
            id="item"
            onChange={this.state.handleChange}
          />
          <br />

          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            value={this.state.brand}
            id="brand"
            onChange={this.state.handleChange}
          />
          <br />

          <label htmlFor="units">Units</label>
          <input
            type="number"
            value={this.state.units}
            onChange={this.state.handleChange}
          />
          <br />

          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            value={this.state.quantity}
            onChange={this.state.handleChange}
          />
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
