import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllCatagories from './AllCatagories'
import ProductsScreen from './ProductsScreen'
import Product from './Product'
import ProductScreen from '../ProductScreen'

const ProductsContainer = () => {
    const Stack = createNativeStackNavigator()
  return (
  <Stack.Navigator screenOptions={{
    headerStyle:{
        backgroundColor:"#9a9a9a"
    }
  }}>
    <Stack.Screen name='Catalogs' component={AllCatagories}/>
    <Stack.Screen name='all products' options={({route})=>{
return{
  title:route.params[0].catalog
}
    }} component={ProductsScreen}/>
    <Stack.Screen name='product' component={ProductScreen}/>
    
  </Stack.Navigator>
  )
}

export default ProductsContainer