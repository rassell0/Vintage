import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const ProductPreview = ({uri,name,price}) => {
  return (
    <View style={tw`w-40 mb-4`}>
        
      <Image source={{uri}} style={tw`w-40 h-40`}/>
      <Text style={tw`font-bold my-2`}>{name}</Text>
      <Text style={tw`mb-2`}>${price}.00</Text>
      <TouchableOpacity style={tw`items-center bg-black`}>
        <Text style={tw`text-white font-bold my-4`}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductPreview