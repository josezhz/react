import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product';

class ProductList extends React.Component {
  state = {
    products: [
      {
        _id: 1,
        sku: "1103-Z",
        name: "Green Onion",
        cost: 150,
        stock: 7
      },
      {
        _id: 2,
        sku: "1102-Z",
        name: "Red Carrot",
        cost: 70,
        stock: 10
      }
    ]
  }

  renderProducts() {
    let productsJSX = []
    for (let p of this.state.products) {
      productsJSX.push(
        <Product product={p} key={p._id} />
      )
    }
    return productsJSX
  }

  render() {
    return (
      <div className='card-group'>
        {this.renderProducts()}
      </div>
    )
  }
}

function App() {
  return (
    <div className='container pt-3'>
      <ProductList />
    </div>
  );
}

export default App;
