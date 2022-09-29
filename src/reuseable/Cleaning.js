import React from 'react';
import styled from 'styled-components'

const Cleaning = ({title,words1,words2}) => {
    return(
        <CleaningPlan>
            <h1>{title}</h1>
            <p>{words1}<br/>{words2}</p>
        </CleaningPlan>
    )
}


const CleaningPlan = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
      padding: 0 20px;
      @media screen and (max-width: 600px){
          h1{
              font-size: 30px;
              word-wrap: wrap;
              width: 90vw;
          }
          p{
              font-size: 20px;
              width: 90vw;
          }
      }

h1{
    text-transform: capitalize;
    margin-top: 50px;
    margin-bottom: 10px;
    text-align: center;

}
p{
    text-align: center;
    margin-bottom: 30px;
    line-height: 25px;
    color: rgb(20, 30, 25);
    // @media screen and (max-width: 600px){
    //     line-height: 40px;
    //     width: 100px ;
    //     border: 1px solid red;
    //      word-wrap: break-word;
      
    // }
}
`;


export default Cleaning;