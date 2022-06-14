import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor () {
        super();
        this.state = {
           products: [
            {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: '',
            id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: '',
                id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                    }
           ]
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
        //this.testing();
    }
    handleIncreaseQuantity = (products) => {
      const { products } = this.state;
      const index = products.indexOf(products);

      products[index].qty +=1;

      this.setState({
        products
      })
    }
   render(){
    const { products } = this.state;
     return(
        <div className="cart">
            {products.map((products) => {
                return  (
                <CartItem 
                  products={products} 
                  key={products.id} 
                  onIncreaseQuantity={this.handleIncreaseQuantity}
                />
                )
            })}
        </div>
     );
   }
}


export default Cart;