import React from 'react';
import styled from 'styled-components';
import logo from "../assests/logo.png"


const Learn = () => {
    return(
      <LearnMore>
        <div className='learnmoreparent'>
          <div className='more'>
                <h1>Learn more about who we are</h1>
              <p>Spick ‘n’ span cleaning service is a top-quality based cleaning company located in Lagos, Nigeria</p>
          </div>
          <div className='kindness'>
              <h4>community, culture, kindness</h4>
              <p>Our cleaners are carefully trained, vetted, trustworthy, and highly skilled in the cleaning service. Quality delivery is our focus and we are sure to achieve that in every space/home entrusted in our care.</p>
              <p>WE OFFER; Receptive and amiable customer care services 24/7 Timely, swift appointments Value for your money
                </p>
                <p>Enjoy full-time housekeeping services without having a live-in housekeeper, whether you are a busy professional, moving in/out of an office/apartment, finished hosting significant events, etc, we are available for you.</p>
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

            @media screen and (max-width: 50em) {
                display: none;
            }
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
