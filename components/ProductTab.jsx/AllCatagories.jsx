import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProductPreview from '../Home/ProductPreview'
import CategoryPreview from './CategoryPreview'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
const AllCatagories = ({navigation}) => {


const catagoryProducts = useSelector(state =>state.products.allProducts)


//
const data = [{
  name:"WAREHOUSE SALE",
  uri:"https://static.wixstatic.com/media/30e9d0_d06c6577a0ac4ff58f9e782eb1c4aa0d~mv2.png/v1/fill/w_1920,h_744,al_c,q_90,enc_auto/30e9d0_d06c6577a0ac4ff58f9e782eb1c4aa0d~mv2.png"
},{
  name:"BALES",
  uri:"https://static.wixstatic.com/media/30e9d0_0dd04b62ca214b9c8d75ab5e110e727c~mv2.jpg/v1/fill/w_1250,h_1236,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/30e9d0_0dd04b62ca214b9c8d75ab5e110e727c~mv2.jpg",
  
},{name:"BY KG",uri:"https://static.wixstatic.com/media/30e9d0_1b2cc98332194bf0929d803c2334522c~mv2.jpeg/v1/fill/w_1250,h_1524,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/30e9d0_1b2cc98332194bf0929d803c2334522c~mv2.jpeg"},
{name:"VINTAGE SWEATSHIRTS & HOODIES",uri:"https://static.wixstatic.com/media/30e9d0_f71f2a65ee1b4821b52021ac6a03b8ed~mv2.png/v1/fill/w_1099,h_675,al_c,q_90,enc_auto/30e9d0_f71f2a65ee1b4821b52021ac6a03b8ed~mv2.png"},
{name:"VINTAGE T-SHIRTS & POLOS",uri:"https://static.wixstatic.com/media/30e9d0_e7e32bdbedb94e108b0400feb472979d~mv2.png/v1/fill/w_1099,h_675,al_c,q_90,enc_auto/30e9d0_e7e32bdbedb94e108b0400feb472979d~mv2.png"},
{name:"VINTAGE FLEECES",uri:"https://static.wixstatic.com/media/30e9d0_c4bd02bacc0941dfb5c14789fe83ae62~mv2.png/v1/fill/w_1099,h_675,al_c,q_90,enc_auto/30e9d0_c4bd02bacc0941dfb5c14789fe83ae62~mv2.png"},
{name:"VINTAGE KNITWEAR",uri:"https://static.wixstatic.com/media/30e9d0_ee12495c56b44755a40064b5857e966a~mv2.png/v1/fill/w_1099,h_675,al_c,q_90,enc_auto/30e9d0_ee12495c56b44755a40064b5857e966a~mv2.png"},
{name:"VINTAGE SHIRTS",uri:"https://static.wixstatic.com/media/30e9d0_73ddae36bce445a294122645142d5e29~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/30e9d0_73ddae36bce445a294122645142d5e29~mv2.jpg"},
{name:"VINTAGE JEANS & TROUSERS",uri:"https://static.wixstatic.com/media/30e9d0_61e93fd1026743d993dfa177d839f971~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/30e9d0_61e93fd1026743d993dfa177d839f971~mv2.jpg"},
{name:"VINTAGE SHORTS",uri:"https://static.wixstatic.com/media/30e9d0_613af40f27214664ac07fbb595e5f096~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/30e9d0_613af40f27214664ac07fbb595e5f096~mv2.jpg"},
{name:"VINTAGE JACKETS & COATS",uri:"https://static.wixstatic.com/media/30e9d0_5cc272f504f248e584363da36c96a507~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/30e9d0_5cc272f504f248e584363da36c96a507~mv2.jpg"},
{name:"VINTAGE ACCESSORIES",uri:"https://static.wixstatic.com/media/30e9d0_5391f027e4ae49de9d502c8031576b9a~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/30e9d0_5391f027e4ae49de9d502c8031576b9a~mv2.jpg"}
]

const render = ({item}) =>{
  const {name,uri,catalog} = item

  function goToCatelog(){

const p = []

for(let i = 0 ; i < catagoryProducts.length; i++){

  if(name === catagoryProducts[i].catalog){
p.push(catagoryProducts[i])
  }
}


    navigation.navigate("all products",p)
    }


  return <CategoryPreview onPress={goToCatelog} name={name} uri={uri}/>
}
  return (
    <View style={[tw` flex-1`,{backgroundColor:"#f5f9f6"}]}>
      <FlatList data={data} columnWrapperStyle={tw`justify-around mt-4`} renderItem={render} numColumns={2}/>
    </View>
  )
}

export default AllCatagories