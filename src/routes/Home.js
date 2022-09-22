import React from 'react'
import styled from 'styled-components'
import Header from '../components/Home/Header'
import Landing from '../components/Home/Landing';
import Plancards from '../reuseable/Plancards';

export default function Home() {
  return (
    <Homecontainer>
        <Header/>
        <Landing/>
        <Plancards/>
    </Homecontainer>
  )
}


const Homecontainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* padding: 10px; */



`;