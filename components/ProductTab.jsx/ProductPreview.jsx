import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const ProductPreview = ({onPress,data}) => {

const {uri,name,price} = data  
let newPrice = price

  return (
    <TouchableOpacity onPress={onPress} style={tw`w-40 mt-4 `}>
    <Image source={{uri:uri[0]}} style={tw`w-40 h-40`}/>
 <Text style={tw`font-bold mt-2 text-xs text-black text-center`}>{name}</Text>
<Text style={tw`font-bold mt-2 text-black text-center`}>£{price.toFixed(2)}</Text>
 <TouchableOpacity style={tw`bg-black items-center py-4 mt-1`}>
<Text style={tw`text-white`}>ADD TO CART</Text>
 </TouchableOpacity>
</TouchableOpacity>
  )
}

export default ProductPreview