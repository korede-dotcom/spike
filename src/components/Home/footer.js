import React from 'react';
import styled from 'styled-components';
import Community from '../../reuseable/community'
import Cleaning from '../../reuseable/Cleaning';
// import Toilet from '../../assests/toilet.jpg';
// import Jakuzi from '../../assests/jakuzi.jpg';
// import kitchen from '../../assests/kitchen.jpeg';
// import Sink from '../../assests/sink.jpeg';
// import Logo from '../../assests/logo.png';
import Dity from '../../reuseable/Dity';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <Container>
            <Community />
            <Render>
               <Cleanings><Cleaning title='"keeping your howe or offices clean can be hard to manage"'  words1="we're got your back, being open 7 days a week allows" words2="us accomodate anyone's unique shedule "/></Cleanings>
               
                <h4>
                    <Link to="/booknow">Book us</Link>
                </h4>
            </Render>
            {/* <Dity>
                <img src={Toilet} />
                <img src={Jakuzi} />
                <img src={kitchen} />
                <img src={Sink} />
            </Dity>
            <Quote>
                    <img src={Logo} />
                    <h4>clean environment healthy live</h4>
            </Quote> */}
            <Dities>
            <Dity />

            </Dities>
        </Container>
    )
}

const Container = styled.div`
    a {
        color: #fff;
        text-decoration: none;
    }
`;
const Render = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;

    h4{
        text-align: center;
        padding: 10px;
        border-radius: 20px;
        color: white; 
        background-color:  rgb(22, 80,163);
        width: 110px;
    }
    
`;
const Cleanings = styled.div`
    width: 700px;
    padding: 0 10px;

    @media screen and (max-width: 767px){
        width: 350px;
    }
    `;
    const Dities = styled.div`
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
    `;
//     const Quote = styled.div`
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         // border: 1px solid red;
//         justify-content: space-around;
//         padding-bottom: 40px;
//         height: 180px;
//         @media screen and (max-width: 767px){
//             h2{
//                 word-wrap: wrap;
//                 text-align: center;
//                 font-size: 18px;
//             }
//         }
//     img{
//         width: 200px;
//         height: 200px;
//         object-fit: contain;
//     }
//     h2{
//         text-transform: capitalize;
//         // line-height: 0.2px;
//         text-align: center;
//     }
// `;

export default Footer;