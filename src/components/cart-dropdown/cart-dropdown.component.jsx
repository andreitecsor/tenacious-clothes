import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from 'react-router-dom';

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    :
                    <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));