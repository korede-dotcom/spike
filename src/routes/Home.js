import React from 'react'
import styled from 'styled-components'
import Header from '../components/Home/Header'
import Landing from '../components/Home/Landing';
import Footer from '../components/Home/footer';

export default function Home() {
  return (
    <Homecontainer>
        <Header/>
        <Header/>
        
        <Landing/>
        <Footer />
    </Homecontainer>
  )
}


const Homecontainer = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
     padding: 0 10px; 

`;
