import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const TextMsg = ({data}) => {

const {text,sent} = data

  return (
    <View style={[tw` my-1`,{
      alignItems:sent ? "flex-end" : "flex-start"
    }]}> 
    <View style={[tw` bg-red-300 rounded-3xl p-2`,{maxWidth:200,backgroundColor:sent ? "green" : "#cccccc"}]}>
      <Text style={tw`text-lg`}>{text}</Text>
    </View>
      
    </View>
  )
}

export default TextMsg