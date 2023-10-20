import { View, Text,Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
import { updateQty } from '../../redux/cart'
const CartItem = ({data,addQty,subtractQty}) => {
    const dispatch = useDispatch()
    const {uri,name,price,qty} = data

   
  return (
    <View style={tw`flex-row p-4 justify-between border-b border-gray-300`}>
        <View>
<Image source={{uri}}  style={tw`w-20 h-20`} />
        </View>
      
      <View style={tw`  w-1/2`}>
        <Text style={tw`font-bold text-base`}>{name}</Text>
        <Text style={tw`font-bold text-base my-2`}>£{price * qty}</Text>
        <View style={tw`border flex-row w-1/2 p-1 justify-between items-center`}>
        <Ionicons onPress={subtractQty} name='remove-outline' color={"gray"} size={20}/>
             <Text>{qty}</Text>
             <Ionicons onPress={addQty} name='add-outline' color={"gray"} size={20}/>
        </View>
       
      </View>
      <View>
<Ionicons name='close-outline' color={"gray"} size={30}/>
      </View>
    </View>
  )
}

export default CartItem