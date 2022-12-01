import React,{useState} from 'react';
import styled from 'styled-components';
// import {useState} from 'react';
import Header from '../components/Home/Header';
import Learning from '../reuseable/Learn';
import Dity from '../reuseable/Dity';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png'
const AboutUS = () => {
const [now,setNow] = useState(new Date(Date.now()).getFullYear())
    return(
        <Aboutcontainer>
          <Top>
            <Header />
            <div className='Learning'>
                <Learning />
            </div>
            <Cleaning>
                <div className='clean'>
                    <h1>OUR SERVICES</h1> 
                    <p>We offer this range of services below to cater to a variety of your cleaning needs at all times.</p>
                    <div className='dpt'>
                        <p><strong>Home Apartment Cleaning:</strong> We offer you quality home care and maintenance with this service. Enjoy the benefits of a full-time housekeeper at no extra cost, this is our most requested service and customers who use our services once, come back for more.</p>
                        <p><strong>Deep Cleaning:</strong> This is ideal for homes or spaces that have been unoccupied/not cleaned for a long time (several weeks, months, or years). Even if not selected, based on the condition of the place, we might carry out deep cleaning. This service also includes total interior cleaning and maintenance.</p>
                        <p> <strong>Move-In & Move-Out Cleaning:</strong> This service is designed to give a deep thorough cleaning on floors, blinds, newly installed/uninstalled cabinets, wardrobes, toilets, etc. Every necessary home preparation for a new tenant. This service includes fumigation too.</p>
                        <p> <strong>Fumigation & Disinfecting:</strong> Get an industry-standard disinfecting service for your home and business. We believe that every home or office deserves a clean and healthy environment always</p>
                        <p><strong>Office Cleaning:</strong> We understand how difficult it is for businesses to keep up with housekeeping, this service is made available with small and large businesses/companies in mind. Designed to help your work environment neat, healthy, and conducive for your day-to-day operations.</p>
                    </div>
                        <Link to="/booknow" className='button'>
                            <h3>Book Us</h3>
                            </Link>

                </div>
            </Cleaning> 
         </Top>      
            {/* <Dities>
                <Dity />
            </Dities>   */}
            <Bottom>
                <div className='footer'>
                    <div className='side1'>
                        <img src={logo}/>
                        <p>Spike N Spin</p>
                        {/* <small>We offer this range of services below to cater to a variety of your cleaning needs at all times</small> */}
                    </div>
                    <div className='side2'>
                        <h2>Location</h2>
                        <p>NO. 10 Lagos Island </p>
                        <p>Lagos State Nigeria</p>
                    </div>
                    <div className='side2'>
                    <small>&copy; {now}</small>
                    </div>
                </div>
            </Bottom>
        </Aboutcontainer>
    )
}

const Bottom = styled.div`
    background-color:rgb(67, 175, 226);
    padding: 30px;
    img{
        height: 40px;
    }
    .footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width:40em){
         display: block;
        }
        .side2{
            line-height: 2;
        }
    }
`
const Aboutcontainer = styled.div`
overflow: hidden;
width: 100vw;


/* a{
    text-decoration: none;
     color: #fff;
} */

`;

const Top = styled.div`
padding-inline: 9vw;
display: flex;
flex-direction: column;
align-items: start;
    
    .Learning{
        padding-top: 20vh;
    }
    

`;

const Cleaning = styled.div`
    width: 100%;
    margin: 0 auto;
    /* padding-inline: 9vw; */
    margin-top: 15vh;

.clean{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 3vh;

    strong{
        color: #000;
    }

    .dpt{
        /* display: grid;
        grid-template-columns: repeat(auto-fit,minmax(700px,1fr));
        justify-content: start;
        text-align: justify; */
       
        /* gap: 20px;
        text-align: center; */
        display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    text-align: start;
    gap: 30px;
    @media screen and (max-width:40em){
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: start;
    }
    }

    h1{
    color: rgba(0,0,0,0.8);
    font-size: 2.5em;
    font-weight: 600;
    line-height: 1.1666em;
    }

    p{
        /* text-align: center; */
    color: #757575;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.6em;
    }
    .button{
        background-color: #000000;
        border-radius: 50px 50px 50px 50px;
        padding: 15px 30px;
        margin-bottom: 20px;
        h3{
            text-decoration: none;
     color: #fff;
        }
      
    }
}
`;

const Dities = styled.div`
padding-top: 3vh;
width: 100vw !important;


.Dity{
    display: flex;
    align-items: center;
    justify-content: space-between
    border-radius: 20px;

    img{
        gap: 10px;
        object-fit: contain;
    }

    @media screen and (max-width: 350px){
        padding-inline: 2vw;
    }
}
`;


export default AboutUS;