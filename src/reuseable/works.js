import Reeact from 'react';
import Styled from 'styled-components';
import Step1 from '../assests/step1.svg'
import Step2 from '../assests/step2.svg'
import Step3 from '../assests/step3.svg'

const Works = ({image, step, about}) => {
    return(
           <Image>
           <div className='img'><img src={image} /></div>
           <div className='h3'><h3>{step}</h3></div>
           <div className='P'><p>{about}</p></div>
           </Image>
        
    )
}
const Steps = Styled.div`
    display: flex;
    align: center;
    `;
    const Image = Styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;  
    align-items: center;
    // gap: 20px;
    height: 250px;
    
    @media screen and (max-width: 800px){
        width: 300px;
    }
    
    @media screen and (max-width: 1000px){
        width:  calc(100vw / 3)

    
         & >  P{
                color: red;
            }  
}

&  .img{
        height: 130px;
        width: 130px;
        // padding-bottom: 25px;
        position: relative;
        border: 3px solid rgb(67, 175, 226);
        border-radius: 50%;
        
        img{
            position: absolute;
            top: 20%;
            left: 9%;
            margin: auto; 
            display: block;
        }
    }
    .p{
        p {
        width: 300px;
        }
    }
`;


export default Works;