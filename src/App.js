import React, { Component } from 'react';
import './App.css';
import ListProducts from './listProducts';
// require('es6-promise').polyfill();
// require('isomorphic-fetch');
import products from './products.js';

class App extends Component{
  state = {
    products: [],
    cartItems: [],
  }

  componentDidMount(){
    this.setState({products: products});
  }

  // moreInfo = (prodId) =>{

  // }

  filterCategories(){


  }


  render(){
    return (
      <div>
        <div id='header'>
          <div id='title'><h1>ACA Store</h1></div>
          <div id='input'>
            <h2>search</h2>
            <input type='text' id='textSearch' onChange={this.filterCategories({value})}></input>
            <select id='categories'>
              <option value='all'>all</option>
              <option value='electronics'>electronics</option>
              <option value='food'>food</option>
              <option value='sporting'>sporting</option>
            </select>
          </div>
          <div className='cart'><span id = 'cart'></span><img src = './cart.png' alt = 'cart'/></div>
        </div>
        <div className="App">
          {this.state.products.map((product, index) =>(
            <ListProducts
              key = {index}
              image = {product.imgUrl}
              name = {product.name}
              description = {product.description}
              price = {product.price}
              rating = {product.rating}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
