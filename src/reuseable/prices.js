import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const Prices = ({plan, starting, currency, amount, duration, ideals, wkprices, booknow}) => {
    return(
        <Container>
            <Head>
                <h2>{plan}</h2>
                <p>{starting}</p>
            </Head>
            <Center>
                <span><sub>{currency}</sub><h1>{amount}</h1></span>
                <p>{duration}</p>
            </Center>
            <Middle>
                <h4 className='idealP'>{ideals}</h4>
                {/* <p>{wkprices}</p> */}
            </Middle>
            <Bottom>
                <h3>
                    <Link to="booknow">{booknow}</Link>
                </h3>
            </Bottom>
        </Container>
    )
}


const Container = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 450px;
    // width: 400px;
    padding: 10px 0px;
    /* background-color: rgb(22, 80, 163); */
    /* background-color: #43AFE2; */
    background: #1650A3;
    border-radius:20% ;
`;
const Head = Styled.div`
    h2{
        margin-bottom: 10px;
        color: white;
        font-size: 50px;
        // background-color: rgb(67, 175, 226);
    }
    p{
        text-align: center;
        color: rgb(67, 175, 226);
        
    }
    `;
    const Center = Styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    h1{
        font-size: 90px;
    }
    p:nth-child(2){
        // line-height: 1px;
    }
    sub{
        font-size: 30px;
        padding-bottom: 30px;
    }
    `;
    const Middle = Styled.div`
    text-align: center;
    /* color: rgb(67, 175, 226); */
    

    .idealP{
        letter-spacing: -1px;
        color: #fff;
    }
    @media screen and (max-width: 800px){
        width:300px;
    }
    
    `;
    const Bottom = Styled.div`
    h3{
        color: rgb(67, 175, 226);
            padding: 13px 20px;
            border-radius: 6px;
             background-color: white;
             /*
            box-shadow: 0px 0px 10px 11px rgba(227,227,227,0.75) inset;
            -webkit-box-shadow: 0px 0px 10px 11px rgba(227,227,227,0.75) inset;
            -moz-box-shadow: 0px 0px 10px 11px rgba(227,227,227,0.75) inset; */
            text-transform: Capitalize  
        }
        &:hover{
            cursor: pointer;
            font-weight: bold;
            // font-size: 20px;
            /* box-shadow: 0px 0px 10px 10px rgba(4,29,255,1);
            -webkit-box-shadow: 0px 0px 10px 10px rgba(4,29,255,1);
            -moz-box-shadow: 0px 0px 10px 10px rgba(4,29,255,1); */
        }
`;

export default Prices;