class App extends React.Component {
  state = {
    item: "",
    brand: "",
    units: "",
    quantity: 0,
    isPurchased: false,
  };

  render() {
    return (
      <div className="container">
        <h1>Hello</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
