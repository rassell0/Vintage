import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import HomeScreen from './Home/HomeScreen'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { useSelector,useDispatch } from 'react-redux';
import { setProducts } from '../redux/products';
const ScrollContainer = () => {


const dispatch = useDispatch()
const p =useSelector(state => state.allProducts)

async function getProducts(){
  const p =[]
  const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
 
  p.push(doc.data())
});
dispatch(setProducts(p))
}
  
useEffect(()=>{
 getProducts()

},[])


const data = [<HomeScreen/>]


function render({item}){
return item
}


  return (
    <View>
      <FlatList data={data} renderItem={render}/>
    </View>
  )
}

export default ScrollContainer