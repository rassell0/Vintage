import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Product from './ProductTab.jsx/Product'
const ProductScreen = ({route}) => {
    
data = [<Product data={route.params}/>]
 

function render({item}){
return item
}
  return (
    <View style={tw`flex-1`}>
      <FlatList data={data} renderItem={render}/>
    </View>
  )
}

export default ProductScreen