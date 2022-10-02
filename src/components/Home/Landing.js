import React from 'react'
import styled from 'styled-components'
import Layout from '../../reuseable/Layout'
import landingImg from '../../assests/landing.jpeg'
import Buttons from '../../reuseable/Buttons'
// import AiOutlinePhone from 'react-icons/ai';
import guarantee from '../../assests/guarantee.png'

import { BsTelephone } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import Cleanings from '../../reuseable/Cleaning'
import Cards from '../../reuseable/Cards';
import Plancards from '../../reuseable/Plancards';
import Price from '../../reuseable/prices'
import Work from '../../reuseable/works'
import Step1 from '../../assests/step1.svg'
import Step2 from '../../assests/step2.svg'
import Step3 from '../../assests/step3.svg'
import Arrow from '../../assests/arrowRight.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel  from 'nuka-carousel';
import Toilet from '../../assests/toilet.jpg';
import Jakuzi from '../../assests/jakuzi.jpg';
import kitchen from '../../assests/kitchen.jpeg';
import Sink from '../../assests/sink.jpeg'
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
                  <small>M-F 8am-4pm – Saturdays by appointment only – Sun Offices are closed  After hour support: s</small>
                  <img src={guarantee} />
                </div>
            </div>
          </Hero>
        {/* </Layout> */}
          {/* <Card>
            <Cards icon={<BsArrowRight/>} large="312" small="Bookings" color="#43AFE2" className="card3"/>
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
          </Card> */}
          <Cleanings title="choose a cleaning plan"  words1="we're known for our flexible subscripttion model, leave it to you to change," words2="customize, and add whatever details you'd like! "/>
          <Prices>
              <Price plan="Regular" starting="starting at" currency="$" amount="90" duration="2 hours, per clean" ideals="ideal for one bedroom apartment and other similar size spaces." booknow="book now"/>
              <Price plan="Regular" starting="starting at" currency="$" amount="90" duration="2 hours, per clean" ideals="ideal for one bedroom apartment and other similar size spaces." booknow="book now"/>
              <Price plan="Regular" starting="starting at" currency="$" amount="90" duration="2 hours, per clean" ideals="ideal for one bedroom apartment and other similar size spaces." booknow="book now"/>
          </Prices>
          <Works>
            <WordCon>
                <h1>how it works</h1>
              <Inherit>
                  <Work image={Step1}  step="step 1" about="Select the size of your home" />
                  <Arrows><img src={Arrow} /></Arrows>
                  <Work image={Step2}  step="step 1" about="Select the level of cleanliness your home is in" />
                  <Arrows><img src={Arrow} /></Arrows>
                  <Work image={Step3}  step="step 1" about="schedule your prefered day and 2-HR booking window" />
              </Inherit>
            </WordCon>
          </Works>
          <Images>
            <Carousel>
            <img src={Toilet} />
                <img src={Jakuzi} />
                <img src={kitchen} />
                <img src={Sink} />
            </Carousel>
          </Images>

    </div>
  )
}


const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
   > img{
    width: 50px;
    height: 70px;

   }

& > .slider-wrapper ul {
      display: flex;
  }
  

`

const Hero = styled.div`
    grid-column:1/13 ;
    height: 93vh;
    margin-top: 7vh;
    
    & > .herocontent{
        // height: 100%;
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

          .cleaningPlan{
            display: flex;
          }
          @media screen and (max-width: 800px){
          h1{
            padding-top: 7vh;
            width: 99vw;
            line-height: 3.5vh;
            font-size: 4vw !important;
          }
          p{
            width: 95vw;
            // border: 1px solid red;
          }
        }
            
          @media screen and (max-height: 700px){
            h1{
            padding-top: 15vh;
            font-size: 3vw !important;
            line-height: 45px;
            }
          }


       h1{
            grid-column: 1/7;
            grid-row: 1/1;
            justify-self: center;
            text-align: center;
            font-size: 45px;
            color: #010f;
            width: 99vw;
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
            font-size: 20px !important;
            text-align: center;          
        }
        img{
            justify-self: center;
            grid-column: 3/5;
            // grid-row: 5/6;
            font-size: 8px !important;
            text-align: center;   
            height: 80px;
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
        // grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    }

  `

  const Cleaning = styled.div`
    // padding: 0 30px;
    @media screen and (max-width: 600px){
      width: 90vw;
    }
  `

   const Prices =  styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit,minmax(200px,1fr));

  //  grid-column: 2/12;
  gap: 2em;
  padding: 25px;
  
  @media screen and (max-width: 800px){
      //  grid-column: 2/12;
        // display: block;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

   `; 

   const Works = styled.div`
     width: 100%; 
    height: 500px;
    text-align: center;
    background-color: #DEF6F6;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-block: 20px;
    h1{
        padding: 50px 20px 10px 20px;
        text-transform: capitalize;
    }
    p{
      padding-bottom: 30px;
    }
    span{
      color: rgb(22,80,163);
    }
    @media screen and (max-width: 600px){
        firstP {
          width: 90vw;
        }
    }
    @media screen and (max-width: 800px){
      // display: block;
      // width: 100%;
      height: 860px;
      display: flex;
      align-items: center;
      
    }

    // @media screen (min-width: 800px) and (max-width: 1000px){
    //     border: 5px solid blue;
    // }
    
   `;

   const WordCon = styled.div`
   
   `;
   const Inherit = styled.div`
    display: flex;
    justify-content: center;
    padding-block: 10px;
    
    @media screen and (max-width: 800px){
      display: block;
      padding-bottom: 30px;
    }
    @media screen and (max-width: 1000px){
      // border: 5px solid red;
    }

    `;
    
    const Arrows = styled.div`
    padding-block: 20px;
    @media screen and (max-width: 1000px){
        display: none;
    }
`;
    
