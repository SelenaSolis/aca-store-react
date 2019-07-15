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
    category: "all",
    search: ""
  }

  componentDidMount(){
    this.setState({products: products});
  }

  // moreInfo = (prodId) =>{

  // }

  onChangeCat = e => {
    this.setState({category: e.target.value });
  }

  onChangeSearch = e => {
    this.setState({search: e.target.value });
  }

  filterCategories(prod, cat){
    if(cat === "all"){
      return true;
    }
    if(prod.category === cat){
      return true;
    }
  }

  searchProducts(prod, searchText){
    searchText.toLowerCase();
    if (prod.name.toLowerCase().includes(searchText) || prod.description.toLowerCase().includes(searchText)){
      return true;
    }
  }


  render(){
    let displayProducts = this.state.products;
    displayProducts = displayProducts.filter(p => this.filterCategories(p, this.state.category))
    displayProducts = displayProducts.filter(p => this.searchProducts(p, this.state.search))
    
    displayProducts = displayProducts.map((product, index) =>
      <ListProducts
          key = {index}
          image = {product.imgUrl}
          name = {product.name}
          description = {product.description}
          price = {product.price}
          rating = {product.rating}
      />
    )

    return (
      <div>
        <div id='header'>
          <div id='title'><h1>ACA Store</h1></div>
          <div id='input'>
            <h2>search</h2>
            <input type='text' id='textSearch' onChange={this.onChangeSearch}></input>
            <select id='categories' onChange={this.onChangeCat}>
              <option value='all'>all</option>
              <option value='electronics'>electronics</option>
              <option value='food'>food</option>
              <option value='sporting'>sporting</option>
            </select>
          </div>
          <div className='cart'><span id = 'cart'></span><img src = './cart.png' alt = 'cart'/></div>
        </div>
        <div className="App">
          {displayProducts}
          {/* {this.state.products.map((product, index) =>(
            <ListProducts
              key = {index}
              image = {product.imgUrl}
              name = {product.name}
              description = {product.description}
              price = {product.price}
              rating = {product.rating}
            /> */}
          {/* ))} */}
        </div>
      </div>
    );
  }
}

export default App;
