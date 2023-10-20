import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const Header = () => {
  return (
    <View>
      <Text style={[tw` font-extrabold text-3xl text-center`,{color:"#4A3728"}]}>121 SOURCING SCHEME</Text>
      <Text style={tw`my-2 text-base text-center`}>Unlock top grade vintage stock with Vintage Wholesalers!</Text>
      <Text style={tw`my-2 text-base text-center`}>As a leading provider of vintage used clothing, we are committed to building long-lasting relationships with our business to business clients. Our team of experts will work closely with you to personally handpick vintage stock that meets your specific requirements.</Text>
      <Text style={tw`my-2 text-base text-center`}>To ensure the highest level of service and quality, we have a minimum order requirement of 100 units/take all per category a month. As a valued client, you will enjoy favourable pricing tiers based on the volume of your monthly orders.</Text>
      <Text style={tw`my-2 text-base text-center`}>Partner with Vintage Wholesalers and experience the best vintage, handpicked used clothing.</Text>
      <Text style={tw`my-2 font-bold text-base text-center`}>Ready to take your vintage fashion business to the next level? Submit your details and desired categories today, and let us help you achieve your goals</Text>
      
      </View>
  )
}

export default Header