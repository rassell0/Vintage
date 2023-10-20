import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const CategoryPreview = ({uri,name,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`w-40 `}>
        <Image source={{uri}} style={tw`w-40 h-40`}/>
     <Text style={tw`font-bold mt-2 text-black text-center`}>{name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryPreview