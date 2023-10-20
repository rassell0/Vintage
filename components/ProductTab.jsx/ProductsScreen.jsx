import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import ProductPreview from './ProductPreview';
const ProductsScreen = ({navigation,route}) => {

const [showBtns,setShowBtns] = useState(true)

function toggleBtn(){
  setShowBtns(state =>!state)
}


const addP = async () =>{
 
try {
  const docRef = await addDoc(collection(db, "products"), {
   name:"50PCS REWORKED BRANDED JOGGER BALE",
   price:"£450.00",
   pieces:null,
   description:["We are excited to introduce our latest product - 50PCS Reworked Branded Joggers Bale. Each pair of joggers has been expertly reworked from old and broken branded sweatshirt and fleece material into unique and modern joggers. With a Grade A quality, you can expect to receive an impressive range of all colours and sizes.",

 

"Please note that this is a mix of vintage and modern pieces, so we cannot guarantee the exact ratio of each you will receive. However, we assure you that each piece is of the highest quality, despite being second-hand. There may be some marks that require washing, but we always advise washing every piece to maximize profitability and ROI from your product.",
   
    
   
   "By offering these unique and high-quality reworked joggers in your store, you can make a lasting impression on your customers. These joggers are perfect for those who are looking for something different and eco-friendly, as they have been given a new life instead of ending up in landfills.",
   
    
   
   "With a total quantity of 50, you will receive a mix of Grade A Reworked Branded Joggers that are sure to impress your customers. By purchasing this listing, you are agreeing to our terms and conditions on our policies page.",
   
    
   
   "Don't miss out on the opportunity to offer your customers something truly special and sustainable. Order now and see the difference it can make for your business."
  ],
  catalog:"BALES",
  uri:["https://static.wixstatic.com/media/30e9d0_000f9d09db80499a8c6b3d1f8a23713b~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/30e9d0_000f9d09db80499a8c6b3d1f8a23713b~mv2.jpg"]
  });
  toggleBtn()
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}
function render({item}){

function viewProduct(){
  navigation.navigate("product",item)
}

return <ProductPreview onPress={viewProduct} data={item}/>

}
function Add  (){
return <TouchableOpacity onPress={addP} style={tw` bg-blue-400`}>
      <Text>add Product</Text>
    </TouchableOpacity>

}
//
  return (
    <View style={tw`py-4`}>
   
  {!showBtns ? <Add/> : <FlatList data={route.params} columnWrapperStyle={tw`justify-around`} numColumns={2} renderItem={render}/>}  
    </View>
  )
}

export default ProductsScreen