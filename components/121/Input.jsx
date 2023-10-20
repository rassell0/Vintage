import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
const Input = () => {




const btns = ["Caps", "Graphic Rugs","Branded Jeans","Football Scarves","Beanies"]



const allBtns = btns.map((v,i)=>{

const [test,setTest] = useState(false)

function toggle(){
    setTest(state => !state)
}

    return <View key={i} style={tw`flex-row items-center mx-4 mt-4`}>
    <TouchableOpacity onPress={toggle} style={[tw`w-5 h-5 border mr-2 items-center justify-center`,{backgroundColor:"#cb8312"}]}>
{ test && <Ionicons name='checkmark' size={20}/>}
    </TouchableOpacity>
    <Text style={tw`text-white font-bold text-xl`}>{v}</Text>
</View>
})



  return (<View style={tw`w-1/1 items-center`}>
    <View style={[tw`w-4.5/5  `,{backgroundColor:"#3b4f0d"}]}>
<Text style={[tw`font-bold text-3xl text-center`,{color:"#cb8312"}]}>WANT T0 APPLY?</Text>
<View style={tw`px-4 pt-4`}>
   <Text style={tw`text-white font-bold text-xl`}>
First Name
</Text>
<TextInput style={tw`p-4 w-1/1 bg-white border `}/> 
</View>
<View style={tw`p-4`}>
   <Text style={tw`text-white font-bold text-xl`}>
Last Name
</Text>
<TextInput style={tw`p-4 w-1/1 bg-white border `}/> 
</View>
<View style={tw`p-4`}>
   <Text style={tw`text-white font-bold text-xl`}>
Company
</Text>
<TextInput style={tw`p-4 w-1/1 bg-white border `}/> 
</View>
<View style={tw`p-4`}>
   <Text style={tw`text-white font-bold text-xl`}>
Address
</Text>
<TextInput style={tw`p-4 w-1/1 bg-white border `}/> 
</View>
<View style={tw`p-4`}>
   <Text style={tw`text-white font-bold text-xl`}>
Email
</Text>
<TextInput style={tw`p-4 w-1/1 bg-white border `}/> 
</View>
<View style={tw`p-4`}>
   <Text style={tw`text-white font-bold text-xl`}>
Code
</Text>
<TextInput style={tw`p-4 w-1/1 bg-white border `}/> 
</View>
<View style={tw`p-4`}>
   <Text style={tw`text-white font-bold text-xl`}>
Phone Number
</Text>
<TextInput style={tw`p-4 w-1/1 bg-white border `}/> 
</View>
<Text style={[tw`font-bold text-base  text-center `,{color:"#cb8312"}]}>Select the categories you are interested in ordering each month</Text>
{allBtns}
<TouchableOpacity style={[tw`w-1/1 mt-4 border p-4 `,{backgroundColor:"#cb8312"}]}> 
<Text style={tw`font-extrabold text-2xl text-center`}>APPLY NOW</Text>
</TouchableOpacity>
      </View>
  </View>
    
  )
}

export default Input