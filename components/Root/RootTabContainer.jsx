import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import ScrollContainer from '../ScrollContainer'
import {Ionicons} from "@expo/vector-icons"
import AllCatagories from '../ProductTab.jsx/AllCatagories'
import ProductsContainer from '../ProductTab.jsx/ProductsContainer'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import CartContainer from '../Cart/CartContainer'
import SourcingScreen from '../121/SourcingScreen'
import ChatScreen from '../chat/ChatScreen'

const RootTabContainer = () => {

const Tab = createBottomTabNavigator()
  return (
    <Provider store={store}>
       <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle:{
            backgroundColor:"#9a9a9a",
            
        },
       
        headerStyle:{
            backgroundColor:"#9a9a9a"
        },
        headerTintColor:"#0b0b0b",
        tabBarInactiveTintColor:"black",
        tabBarActiveTintColor:"green"
      }}>
        <Tab.Screen name='Home' options={{
            tabBarIcon:({size,color})=> <Ionicons name='home-outline' color={color} size={size}/>
        }} component={ScrollContainer}/>
        <Tab.Screen name='Products' options={{
            tabBarIcon:({size,color})=> <Ionicons name='cube-outline' color={color} size={size}/>,
            headerShown:false
        }} component={ProductsContainer}/>
        <Tab.Screen name='Cart' options={{
            tabBarIcon:({size,color})=> <Ionicons name='cart-outline' color={color} size={size}/>
        }} component={CartContainer}/>
        <Tab.Screen name='1-2-1 Sourcing' options={{
            tabBarIcon:({size,color})=> <Ionicons name='briefcase-outline' color={color} size={size}/>
        }} component={SourcingScreen}/>
        <Tab.Screen name='Chat' options={{
            tabBarIcon:({size,color})=> <Ionicons name='chatbubbles-outline' color={color} size={size}/>,
            headerTitle:"Vintage Wholesalers"
        }} component={ChatScreen}/>
      </Tab.Navigator>
    </NavigationContainer></Provider>
   
  )
}

export default RootTabContainer