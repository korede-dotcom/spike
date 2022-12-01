import React from 'react';
import styled from 'styled-components';
import LivingRoom from '../assests/LivingRoom.jpg';

const Community = () => {
    return(
        <Owner>
            <Values>
                <h1>Community, culture,<br/>cleaning.</h1>
                <p>Our three core values match our one mission, delivering the best cleaning experience, trained and trusted cleaners, and environmentally friendly products to every family of every background.</p>
            </Values>
            <CleanHome>
            <img src={LivingRoom} />
            </CleanHome>
        </Owner>
    )
    
}

const Owner = styled.div`
    display: flex; 
    width: 100%;
    // padding: 0 80px;
    gap: 30px;
    justify-content: space-evenly;
    margin-top: 50px;
    @media screen and (max-width: 1000px){

       flex-direction: column;
       align-items: center;
       justify-content: center;
       gap: 10px;

       
    }
    h1{
        font-size: 40px;
        line-height: 50px;
        padding-bottom: 20px;
        text-transform: capitalize;
    }
    P{
        // line-height: 25px;
        /* color: #7A7A7A;
        font-size: 2vw; */
    }
`;
const Values = styled.div`
    /* width: 40%; */
    padding: 10px;
    width: 50%;
    padding: 10px;

    @media screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 80%;
       
    }
   
    
`;
const CleanHome = styled.div`
    // width:100%;
    width: 60%;
    img{
        border-radius: 18px;
    }

    @media screen and (max-width: 1000px){
        display: flex;
        align-items: center;
        justify-content: space-around;

        img{
            width: 95%;
            text-align: center;
        }
    }



`;

export default Community;