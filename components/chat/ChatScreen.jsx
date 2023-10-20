import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import TextMsg from './TextMsg'

const ChatScreen = () => {

const [newMessage,setNewMessage] = useState("")
const [allMessages,setAllMessages] = useState([])
const [user,setUser] = useState(Math.random())
function texting(value){
    setNewMessage(value)
}
const messageRef = collection(db,"messages")
useEffect(()=>{
    const q = query(messageRef,orderBy("sentAt"))
const idktbh = onSnapshot(q,(snapshot)=>{
    const msgs = []
snapshot.forEach((doc)=>{
  console.log(doc.data())
    msgs.push(doc.data())
})
setAllMessages(msgs)

}) 

return ()=> idktbh()
},[])





 
async function sendText(){ 
    setNewMessage("")
    await addDoc(messageRef,{
        text:newMessage,
        sentAt:serverTimestamp(),
        user,
        room:1
    })

   
}


function render({item}){

    const data = {...item,
    sent:user === item.user ? true : false
    }
    return<TextMsg data={data} />
}


  return (
    <View style={tw`flex-1 justify-end `}>
        <View style={tw``}>
            <FlatList data={allMessages} renderItem={render}/>
        </View>
            
      <View style={tw`flex-row  h-1/15 items-center py-1 mb-2 `}>
        <TextInput onChangeText={texting} value={newMessage} placeholder='Type your message' style={tw`bg-gray-200 flex-1 mx-2 border border-gray-300 h-1/1`}/>
        <TouchableOpacity onPress={sendText}>
            <Ionicons name='send-outline' style={tw`mx-1`} size={30}/>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default ChatScreen