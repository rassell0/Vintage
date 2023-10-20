import { View, Text,TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { updateQty } from '../../redux/cart'
const CartScreen = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)
  const[ subtotal,setSubtotal] = useState(0)



useEffect(()=>{
  let temp = 0
for(let i = 0; i< cart.length; i++){
  temp +=cart[i].price

}
setSubtotal(temp       )
},[cart])

function render({item,index}){


function addQty(){
  let temp = {
    ...item,
    qty:item.qty + 1
  }
dispatch(updateQty({item:temp,index}))
}
function subtractQty(){
  let temp = {
    ...item,
    qty:item.qty + 1
  }
dispatch(updateQty({item:temp,index}))
}



  return <CartItem addQty={addQty} subtractQty={subtractQty} data={item}/>
}


  return (
    <View style={tw`flex-1 justify-between`}>
      
      <FlatList data={cart} renderItem={render}/>
      <View >
      <View style={tw` mx-4  border-t border-gray-300 py-4`}>
<View style={tw`flex-row justify-between mb-4 `}>
<Text style={tw`font-extrabold text-xl`}>Subtotal</Text>
<Text style={tw`font-extrabold text-xl`}>£{subtotal.toFixed(2)}</Text>
</View>
<View style={tw`flex-row justify-between `}>
<Text style={tw`font-extrabold text-xl`}>Delivery</Text>
<Text style={tw`font-extrabold text-xl`}>£399.99</Text>
</View>

        </View>
        <View style={tw`flex-row mx-4 justify-between border-t border-gray-300 py-4`}>
<Text style={tw`font-extrabold text-xl`}>Total</Text>
<Text style={tw`font-extrabold text-xl`}>£{subtotal + 399.99}</Text>
        </View>
      <TouchableOpacity style={tw`bg-black items-center py-4 my-2 mx-4`}>
<Text style={tw`text-white font-bold text-lg`}>Checkout</Text>
 </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen