import { View, Text, Image,Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import ProductPreview from './ProductPreview'
const HomeScreen = () => {

const width = Dimensions.get("window").width
const height = Dimensions.get("window").width
const [privacy,setPrivacy] = useState(true)
const products = [
  {
    name:"100x CARHARTT & DICKIES CARPENTERS JEANS BULK BUY",
    price:"852",
    uri:"https://static.wixstatic.com/media/30e9d0_3ecbb7d917c34e76ac106a560dd10b87~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/30e9d0_3ecbb7d917c34e76ac106a560dd10b87~mv2.jpg"
  },
  {
    name:"VINTAGE WOOLRICH & PENDLETON VARIOUS CLOTHING SACK",
    price:"399",
    uri:"https://static.wixstatic.com/media/30e9d0_7b9913ea41704991a8e643d4cb7fc24d~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/30e9d0_7b9913ea41704991a8e643d4cb7fc24d~mv2.jpg"
  },
  {
    name:"RUSSELL ATHLETIC MIXED SACK",
    price:"349",
    uri:"https://static.wixstatic.com/media/30e9d0_b3bdcffb538d4bcd928f9b6e99c433c2~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/30e9d0_b3bdcffb538d4bcd928f9b6e99c433c2~mv2.jpg"
  },
  {
    name:"DEADSTOCK GUESS T-SHIRT SACK",
    price:"599",
    uri:"https://static.wixstatic.com/media/30e9d0_bc734b6856fb40029756750776a73a02~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/30e9d0_bc734b6856fb40029756750776a73a02~mv2.jpg"
  },
]

const bestSellers = products.map((v,i)=>{
 const {name,uri,price} = v
  return <ProductPreview key={i} name={name} uri={uri} price={price}/>
})

  return (
    <View style={[tw`flex-1`,]}>
      <View  style={[tw`py-2 `,{backgroundColor:"'rgba(80, 94, 40, 1.0)'"}]}>
      <Text style={tw`text-center text-white text-xs font-bold px-2`}>JOIN OUR 121 SOURCING SCHEME TODAY & INDULGE IN THE WORLD OF PREMIUM VINTAGE LIKE NEVER BEFORE!</Text>
      </View>
     {!privacy && <Image source={{uri:"https://static.wixstatic.com/media/30e9d0_26e4e94003a74caa928e5c2753e5573d~mv2.png/v1/fill/w_2918,h_988,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/WHOLESALERS%20VINTAGE.png"}} style={tw`w-1/1 h-30`} />}
      <Image style={{width,height:width /2}}  source={{uri:"https://static.wixstatic.com/media/30e9d0_16e552df8c604038aab8cb9108532098~mv2.png/v1/fill/w_1053,h_406,al_c,q_90,enc_auto/30e9d0_16e552df8c604038aab8cb9108532098~mv2.png"}} />
      <View style={[tw`items-center `,{backgroundColor:"'rgba(80, 94, 40, 1.0)'"}]}>
        <Text style={tw`text-white font-bold text-xl mt-2`}>WANT A DISCOUNT ON </Text>
        <Text style={tw`text-white font-bold text-xl mb-2`}>YOUR NEXT ORDER?</Text>
      <Image style={{width:width *.9,height:width *.7}}  source={{uri:"https://static.wixstatic.com/media/30e9d0_824c09ee31f94e7ea7210550c40c9afe~mv2.png/v1/crop/x_715,y_341,w_1435,h_1162/fill/w_1272,h_1030,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-09-06%20at%2010_26_09.png"}} />
      <Text style={tw`text-white font-bold text-xl mt-2`}>LEAVE US A GOOGLE</Text>
      <Text style={tw`text-white font-bold text-xl mb-2`}> REVIEW</Text>
      </View>
      <View style={{width}}>
<ImageBackground style={[tw`flex-1 p-4`]} source={{uri:"https://static.wixstatic.com/media/30e9d0_74aa7abf3c9d4bc58367cceacc26fc72~mv2.png/v1/fill/w_1960,h_1058,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/30e9d0_74aa7abf3c9d4bc58367cceacc26fc72~mv2.png"}} >
<Text style={tw`text-white font-bold text-3xl  text-center`}>
WELCOME TO
</Text>
<Text style={tw`text-white font-bold text-3xl  text-center`}>
VINTAGE WHOLESALERS
</Text>
<Text style={tw`text-white font-bold text-xl mt-2 text-center`}>
As a leading supplier of vintage clothing we are on a mission to help businesses of all sizes tap into the used clothing industry and reduce clothing waste. Shop our online handpicked bundles perfect to stock up your side hustle. or join our 121 sourcing scheme to unlock volumes of top grade vintage every month for your store. 
</Text>
</ImageBackground>
<Text style={[tw`text-3xl text-center font-extrabold my-4`,{color:"'rgba(80, 94, 40, 1.0)'"}]}>SHOP OUR BESTSELLERS</Text>
<View style={tw`flex-row flex-wrap justify-around`}>

  {bestSellers}
</View>
      </View>
    </View>
  )
}

export default HomeScreen