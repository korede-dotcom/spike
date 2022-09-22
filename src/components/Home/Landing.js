import React from 'react'
import styled from 'styled-components'
import Layout from '../../reuseable/Layout'
import landingImg from '../../assests/landing.jpeg'
import Buttons from '../../reuseable/Buttons'
// import AiOutlinePhone from 'react-icons/ai';
import guarantee from '../../assests/guarantee.png'

import { BsTelephone } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import Cards from '../../reuseable/Cards'
import Plancards from '../../reuseable/Plancards'

export default function Landing() {
  return (
    <div>
        {/* <Layout> */}
          <Hero>
            <div className='herocontent'>
                <div className='herotext'>
                <h1>Providing the highest standard cleaning,<br/>with the best price possible.</h1>
                <p>We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                <div className='herofunc'>
                    <Buttons text="Book Now" icon={<BsArrowRight/>}/>
                    <Buttons text="Call Us" icon={<BsTelephone/>}/>
                </div>
                <small>M-F 8am-4pm – Saturdays by appointment only – Sun Offices are closed  After hour support: Support@spruseclean.com</small>
                <img src={guarantee} />
                </div>
            </div>
          </Hero>
        {/* </Layout> */}
          <Card>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#43AFE2" className="card1"/>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#43AFE2" className="card3"/>
          </Card>
          <Card>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#43AFE2" className="card1"/>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#1650A3" className="card2"/>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#43AFE2" className="card3"/>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#1650A3" className="card2"/>
          </Card>
          <Card>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#43AFE2" className="card1"/>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#1650A3" className="card2"/>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#43AFE2" className="card3"/>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#1650A3" className="card2"/>
          </Card>
        

    </div>
  )
}
  const Hero = styled.div`
    grid-column:1/13 ;
    height: 93vh;
    overflow-y: scroll;
    margin-top: 7vh;
    
    & > .herocontent{
        /* height: 90vh; */
        height: 100%;
        overflow-y: scroll;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-image: url(${landingImg}); */
        background-position: center center;
        background-size: cover;
        object-position: center;
       
    }
    .herotext{
        display: grid;
        grid-template-columns: repeat(6,1fr);
        gap: 50px;
        justify-content: center;
        width: 100%;
        align-content: center;
        align-items: center;


       h1{
            grid-column: 1/7;
            grid-row: 1/1;
            justify-self: center;
            text-align: center;
            font-size: 45px;
            /* color: #43AFE2; */
            color: #010f;
        }
        p{
            justify-self: center;
            text-align: center;
            grid-column: 3/5;
            grid-row: 2/3;
            font-size: 15px;
        }
        .herofunc{
            display: flex;
            gap: 20px;
            justify-self: center;
            grid-column: 3/5;
            grid-row: 3/4;
        }
        small{
            justify-self: center;
            grid-column: 3/5;
            grid-row: 4/5;
            font-size: 8px !important;
            text-align: center;          
        }
        img{
            justify-self: center;
            grid-column: 3/5;
            grid-row: 5/6;
            font-size: 8px !important;
            text-align: center;   
            height:80px;
            object-fit: cover;

        }
    }

  `

  const Card = styled.div`

    grid-column: 2/12;
    display: grid;
    gap: 2em;
    padding: 25px;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));

    @media screen and (max-width:40em) {
        grid-column: 2/12;
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    }


        

       
  `
