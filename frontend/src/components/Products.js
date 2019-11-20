import React, { Component } from "react";
import Product from "./Product";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/posts")
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data
        });
      });
  }

  render() {
    const { products } = this.state;

    return (
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            const { id, title, content } = product;
            return <Product key={id} id={id} name={title} price={content} />;
          })}
        </tbody>
      </table>
    );
  }
}