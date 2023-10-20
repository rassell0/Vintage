import { View, Text,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import tw from 'twrnc'
const Pieces = ({pieces}) => {

    const [choice,setChoice] = useState( pieces[0])

   
    const choices =pieces.map((v, i) => {

        function update(){
          setChoice(v)
        }
        
            return <TouchableOpacity onPress={update} style={[tw`mr-4 border p-2`,{backgroundColor:v === choice ? "black":"white"}]} key={i}>
              <Text style={[tw`font-bold text-lg `,{color:v === choice ? "white":"black"}]} >{v}</Text>
              </TouchableOpacity>
          })
  return (
    <View style={tw`flex-row`}>
     {choices}
    </View>
  )
}

export default Pieces