import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native'
const EmptyCartScreen = () => {
  return (
    <View style={tw`flex-1  justify-center items-center`}>
      <Text style={tw`font-bold text-3xl mb-2`}>Cart is empty</Text>
      <TouchableOpacity>
         <Text style={tw`font-extrabold text-base underline`}>Continue Browsing</Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default EmptyCartScreen