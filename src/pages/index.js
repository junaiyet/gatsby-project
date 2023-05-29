import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import CategoryMenu from "../components/CategoryMenu"
import NewArrival from "../components/NewArrival"
import FeaturedProducts from "../components/FeaturedProducts"
import OurCollections from "../components/OurCollections"
import FlashSale from "../components/FlashSale"
import RatedProduct from "../components/RatedProduct"

const IndexPage = () => {
  return (
  
    <>
      <Header/>
      <Hero/>
      <CategoryMenu/>
      <NewArrival/>
      <FeaturedProducts/>
      <OurCollections/>
      <FlashSale/>
      <RatedProduct/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
