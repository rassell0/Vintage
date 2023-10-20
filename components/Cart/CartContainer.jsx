import { View, Text } from 'react-native'
import React from 'react'
import EmptyCartScreen from './EmptyCartScreen'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import CartScreen from './CartScreen'
const CartContainer = () => {

    const cart = useSelector(state => state.cart.cart)

console.log(cart)
  return (
    <View style={tw`flex-1`}>
      {cart.length === 0 ? <EmptyCartScreen/>: <CartScreen/>}
    </View>
  )
}

export default CartContainer