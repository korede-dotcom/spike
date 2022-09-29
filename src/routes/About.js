import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import Header from '../components/Home/Header';
import Learning from '../reuseable/Learn';
import Dity from '../reuseable/Dity';
import { Link } from 'react-router-dom';
const AboutUS = () => {
    return(
        <Aboutcontainer>
          <Top>
            <Header />
            <div className='Learning'>
                <Learning />
            </div>
            <Cleaning>
                <div className='clean'>
                    <h1>"keeping your home or office clean <br/> can be hard to manage" </h1> 
                    <p>we've got your back,being open 7 days a week allows <br/> us to aid with anyone's unique schedule</p>
                    <div className='button'>
                        <Link to="/booknow"><h3>Book Us</h3></Link>
                    </div>
                </div>
            </Cleaning> 
         </Top>      
            <Dities>
                <Dity />
            </Dities>  
        </Aboutcontainer>
    )
}


const Aboutcontainer = styled.div`
overflow: hidden;
width: 100vw;


* a{
    text-decoration: none;
}

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

    h1{
    color: rgba(0,0,0,0.8);
    font-size: 2.5em;
    font-weight: 600;
    line-height: 1.1666em;
    }

    p{
        text-align: center;
    color: #757575;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.6em;
    }
    .button{
        background-color: #000000;
        border-radius: 50px 50px 50px 50px;
        padding: 15px 30px;
        
        a{
            color: white;
            font-size: 13px;
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