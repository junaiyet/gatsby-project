import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import NewArrivalitem from './NewArrivalitem'
import newArrivalOne from '../images/newArrivalOne.jpg'
import newArrivalTwo from '../images/newArrivalTwo.jpg'
import newArrivalThree from '../images/newArrivalThree.jpg'

export default function NewArrival({title,subTitle,img,arrivalProductName,arrivalProductPrice,badge}) {
  return (
    <div className='container mx-auto'>
        <Heading  title={'New Arrival'}/>
        <SubHeading subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. "}/>
      <div className="flex gap-x-8 justify-between">
        <NewArrivalitem img={newArrivalOne} arrivalProductName={"Smartphone 5G"} arrivalProductPrice={"$299"} badge={"new"} />
        <NewArrivalitem img={newArrivalTwo} arrivalProductName={"Smart Tv"} arrivalProductPrice={"$299"} badge={"new"}/>
        <NewArrivalitem img={newArrivalThree} arrivalProductName={"USB Speaker Portable"} arrivalProductPrice={"$299"} badge={"new"} />
      </div>
    </div>
  )
}
