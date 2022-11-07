import React from 'react';
import styled from 'styled-components';
import logo from "../assests/logo.png"


const Learn = () => {
    return(
      <LearnMore>
        <div className='learnmoreparent'>
          <div className='more'>
                <h1>Learn more about who we are</h1>
              <p>connecting communities and cultures with families and individuals alike through one mission. Delivering the best cleans and products to any home</p>
          </div>
          <div className='kindness'>
              <h4>community, culture, kindness</h4>
              <p>our three core values match our one mission. Delivering the best spick span leaning specialists,creating the best spine span cleaning products to every family and home,creating  service based aroundhonesty and reliability</p>
          </div>
        </div>
        <div className='learnmoreimg'>
          <img src={logo} />

        </div>
      </LearnMore>
        )
    }


    const LearnMore = styled.div`
        display: flex;
        justify-content: space-between;
        /* flex-direction: column; */
        .learnmoreparent{
            display: flex;
            flex-direction: column;
            gap: 15px;
            flex: 1;
            width: 50%;
            
        }
        .learnmoreimg{
            width: 50%;
            text-align: center;
        }
        img{
            height: 200px;
          
        }
        h1{
            font-size: 3.5vh;
        }
         p{
            line-height: 4vh;
            color: #7A7A7A;
        }

        .kindness{
            
            h4{
                padding-bottom: 0.5vh;
                word-spacing: 0.5vw;
                text-transform: capitalize;
            }
        }
        @media screen and (max-width: 640px){
            width: 100%;
            text-align: center;
            gap: 9vh;
        }

        & * > p {
            padding-top: 1vh;
            font-size: 17px;
        }

    `;

export default Learn;
