import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import CategoryMenu from "../components/CategoryMenu"

const IndexPage = () => {
  return (
  
    <>
      <Header/>
      <Hero/>
      <CategoryMenu/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
