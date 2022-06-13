import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }
    render(){
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1655134717~hmac=3fe7a7d1d61472606d4660a74f61df89" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/484/premium/484662.png?token=exp=1655134597~hmac=b4649ca05a782fe5bef56a3529511d3d" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;