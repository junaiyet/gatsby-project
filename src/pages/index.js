import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import CategoryMenu from "../components/CategoryMenu"
import NewArrival from "../components/NewArrival"
import FeaturedProducts from "../components/FeaturedProducts"
import OurCollections from "../components/OurCollections"

const IndexPage = () => {
  return (
  
    <>
      <Header/>
      <Hero/>
      <CategoryMenu/>
      <NewArrival/>
      <FeaturedProducts/>
      <OurCollections/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
