import React from 'react';

class CartItem extends React.Component{
  

    increaseQuantity = () => {
        //this.state.qty += 1;
        //console.log('this', this.state);
        //setState form 1
        //this.setState({
        //    qty: this.state.qty + 1
        //});
        //setState form 2 if prevState required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    
    decreaseQuantity = () => {
        const { qty } = this.state;

        if(qty === 0){
            return;
        }
        //setState form 2 if prevState required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    } 

    render(){
        console.log('this.props', this.props);
        const { price, title, qty } = this.props;
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
                        <img alt="increase" 
                             className="action-icons" 
                             src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1655148449~hmac=23fb146fcc28e8a52340d297a24785f5" 
                             onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                            onClick={this.decreaseQuantity}/>
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/128/484/premium/484662.png?token=exp=1655148513~hmac=e75f300581cc1aece0e70bacbf51cb0e" />
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