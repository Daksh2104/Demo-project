import React, { lazy } from 'react'
import AccordionCompound from '../compounds/AccordionCompound'
import HeaderCompound from '../compounds/HeaderCompound'
import FooterCompound from '../compounds/FooterCompound'
import JumboCompound from '../compounds/JumboCompound'
import OptFormCompound from '../compounds/OptFormCompound'
const Seperator = lazy(()=>import("../components/Seperator/Seperator"))
/*---> Component <---*/
const HomePage = () => {
  return (
    <>
      <HeaderCompound>
        <OptFormCompound />
      </HeaderCompound>
      <Seperator />
      <JumboCompound />
      <AccordionCompound />
      <OptFormCompound />
      <Seperator />
			<FooterCompound />
    </>
  )
}

export default HomePage
