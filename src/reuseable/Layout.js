import React from 'react'
import styled from 'styled-components'

export default function Layout({children}) {
  return (
    <LayoutContainer>{children}</LayoutContainer>


  )
}
const LayoutContainer = styled.div`
    
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(12,1fr);
    overflow-x: hidden;
    & > * {
    }
   @media screen and (max-width: 40em) {
    display: grid;
    grid-template-columns: 1fr !important;
    
   }

`
