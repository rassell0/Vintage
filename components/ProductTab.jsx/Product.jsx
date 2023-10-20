import { View, Text, Image, Alert, TouchableOpacity,  TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Pieces from './Pieces'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart'
const Product = ({ data }) => {
  const { uri, name, price, description,pieces } = data

  const dispatch = useDispatch()

const [qty,setQty] = useState(1)

function onChangeQty(value){
 
setQty(value)
}



  const info = description.map((v, i) => {
    return <Text style={tw`font-bold text-lg mt-5`} key={i}>{v}</Text>
  })

  function add2Cart(){
dispatch(addToCart({uri:uri[0],name,price,qty}))
Alert.alert('This product has successfully been added to your cart', '', [
  {
    text: 'Continue Shopping',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },
  {text: 'Checkout', onPress: () => console.log('OK Pressed')},
]);
  }
  
  return (
    <View >
       
            <View style={tw`px-4`}>
            <Image style={tw`w-1/1 h-120 mt-4 rounded-sm`}  source={{ uri: uri[0] }} />
      
          <Text style={tw`text-lg font-extrabold`}>{name}</Text>
          <Text style={tw`text-lg font-extrabold`}>£{price.toFixed(2)}</Text>
          {pieces && <>
          <Text style={tw`text-lg font-extrabold`}>Pieces</Text>
          <Pieces pieces={pieces}/>
          </>}
          
          
          <Text style={tw`text-lg font-extrabold`}>Quantity</Text>
          <TextInput defaultValue={"1"} onChangeText={onChangeQty} style={tw`border items-center p-2 rounded-sm my-2 w-1/5 text-xl`}/>
          <TouchableOpacity onPress={add2Cart} style={tw`w-1/1 py-2 items-center bg-black`}>
            <Text style={tw`text-white text-lg font-bold`}>ADD TO CART</Text>
          </TouchableOpacity>
         
             {info}
          </View>
         
    </View>
  )
}

export default Product
