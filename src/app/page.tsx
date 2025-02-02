import React from 'react'

import Hero from './component/Hero'
import Broswerrange from './component/Broswerrange'
import Ourproduct from './component/Ourproduct'
import FurniturePage from './component/Furniture'
import ProductCards from './Products/page'



const page = () => {
  return (
    <div>
      
      <Hero/>
      <Broswerrange/>
      <Ourproduct/>
      <FurniturePage/>
      <ProductCards/>
      
      
    </div>
  )
}

export default page