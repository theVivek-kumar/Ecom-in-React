import React from 'react'
import { Heading } from '../components/BreackHeading/BreakHeading'
import { Cardcategory } from '../components/CardCateories/CardCategory'
import { CardComponent } from '../components/herosection/CardComponent'
import { Footer } from '../components/Footer/Footer'
import Navbar from '../components/navbar/Navbar'

function LandingPage() {
    return (
        <>
    <Navbar/>
    <CardComponent/>
    <Heading/>
    <Cardcategory/>
    <Heading />
    <Footer/>       
    </>
  )
}

export default LandingPage