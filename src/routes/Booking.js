import React from 'react'
import styled from 'styled-components'
import Header from '../components/Home/Header'
import Input from '../reuseable/Input'
import { useState } from 'react'
import BookingForm from '../components/BookingForm'
import Summary from '../reuseable/Summary'




export default function Booking() {
  const [inputVal ,setInputVale] = useState('')

  console.log(inputVal)
  return (
    <Bookingcontainer>
      <Header/>
        <div className='header'>
        <h1>Make a Booking</h1>
        <p>select a service, choose a date & pay securely</p>
        </div>
      <Content>
        <div className='formcontainer'>
        <BookingForm/>
        </div>
      <Summary/>
      </Content>

    </Bookingcontainer>
  )
}

const Bookingcontainer = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .header{
    text-align: center;
    padding: 20px;
    line-height: 1.5;
    margin-top: 70px;
  }
  `

const Content = styled.div`
  /* height: 92vh; */
  /* margin-top:50px; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  /* align-items: center; */
  gap: 50px;

 


  
  /* .othericons > div:hover{

  } */


`
