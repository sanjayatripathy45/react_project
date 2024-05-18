import React from 'react'

const Tabs = ({button, ButtonOuterElement = 'menu', children, ...props}) => {
  return (
    <>
    <ButtonOuterElement {...props}>{button}</ButtonOuterElement>
    {children}
    
    </>
  )
}

export default Tabs