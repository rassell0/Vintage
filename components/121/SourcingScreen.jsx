import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Input from './Input'
import Header from './Header'
const SourcingScreen = () => {


const data = [<Input/>]

function render({item}) {
    return item;
}


  return (
    <View style={tw`items-center flex-1`}>
      



      <FlatList data={data} renderItem={render} ListHeaderComponent={Header}/>
    </View>
  )
}

export default SourcingScreen