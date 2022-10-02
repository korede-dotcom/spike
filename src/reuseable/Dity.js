import React from 'react';
import styled from 'styled-components';
import Toilet from '../assests/toilet.jpg';
import Jakuzi from '../assests/jakuzi.jpg';
import kitchen from '../assests/kitchen.jpeg';
import Sink from '../assests/sink.jpeg'
import Logo from '../assests/logo.png';


const Dity = () => {
    return(
        // <>
        <All>
            <div className='Dity'>
                <img src={Toilet} />
                <img src={Jakuzi} />
                <img src={kitchen} />
                <img src={Sink} />
             
            </div>
            <Quote>
                    <img src={Logo} />
                    <h4>clean environment healthy live</h4>
            </Quote>
            </All>
        // </>    
    )
}

const All = styled.div`

.Dity{
    padding: 20px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    @media screen and (max-width: 767px){
       flex-direction: column;
       justify-content: space-evenly;
       gap: 10px;
    }
    @media screen and (max-width: 900px){
        justify-content: space-around;
    }
    img{
        border-radius: 20px;
    }
}
    `;
    const Quote = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        // border: 1px solid red;
        justify-content: space-around;
        padding-bottom: 40px;
        height: 180px;
        @media screen and (max-width: 767px){
            h2{
                word-wrap: wrap;
                text-align: center;
                font-size: 18px;
            }
        }
    img{
        width: 200px;
        height: 200px;
        object-fit: contain;
    }
    h2{
        text-transform: capitalize;
        // line-height: 0.2px;
        text-align: center;
    }
`;

export default Dity;
