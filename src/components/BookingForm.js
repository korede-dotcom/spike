import React from 'react'
import styled from 'styled-components'
import Input from '../reuseable/Input'
import Selects from '../reuseable/Selects'
import Others from '../reuseable/Others'
import cabinet from '../assests/cabinet.svg'
import dishwasher from '../assests/dishwasher.svg'
import garage from '../assests/garage.svg'
import fridge from '../assests/fridge.svg'
import laundry from '../assests/laundry.svg'
import microwave from '../assests/microwave.svg'
import oven from '../assests/oven.svg'
import wall from '../assests/wall.svg'
import window from '../assests/window.svg'
import { useState } from 'react'


export default function BookingForm() {
   //  const [select,setSelect] = useState(!true)
   const [select, setselect] = useState()
    const others = [
      {
        id:1,
        name:"cabinet",
        icon:cabinet,
      },
      {
        id:2,
        name:"dishwasher",
        icon:dishwasher,
      },
      {
        id:3,
        name:"garage",
        icon:garage,
      },
      {
        id:4,
        name:"fridge",
        icon:fridge,
      },
      {
        id:5,
        name:"laundry",
        icon:laundry,
      },
      {
        id:6,
        name:"microwave",
        icon:microwave,
      },
      {
        id:7,
        name:"oven",
        icon:oven,
      },
      {
        id:8,
        name:"wall",
        icon:wall,
      },
      {
        id:9,
        name:"window",
        icon:window,
      },
    ]
  let bool = false
    const selectExtra = (e,i) => {
       e.target.parentElement.style.backgroundColor = "#43AFE2"
       
    }
    const options = [
        { value: 'Regular', label: 'Chocolate' },
        { value: 'Deep Clean', label: 'Strawberry' },
        { value: 'Moveout', label: 'Vanilla' }
      ]
    const rooms = [
        { value: '1 Bedroom', label: 'Chocolate' },
        { value: '2 Bedroom', label: 'Strawberry' },
        { value: '3 Bedroom', label: 'Vanilla' }
      ]
    const bathrooms = [
        { value: '1 Bathroom', label: 'Chocolate' },
        { value: '2 Bathroom', label: 'Strawberry' },
        { value: '3 Bathroom', label: 'Vanilla' }
      ]
    const kitchen = [
        { value: '1 kitchen', label: 'Chocolate' },
        { value: '2 kitchen', label: 'Strawberry' },
        { value: '3 kitchen', label: 'Vanilla' }
      ]
    const slightlydirty = [
        { value: '1 Room', label: 'Chocolate' },
        { value: '2 Room', label: 'Strawberry' },
        { value: '3 Room', label: 'Vanilla' }
      ]

      const rollover = [
        {
            id:1,
            name:"One Time"
        },
        {
            id:2,
            name:"Weekly"
        },
        {
            id:3,
            name:"Bi weekly"
        },
        {
            id:4,
            name:"Monthly"
        },
      ]
    // const options = [
    //     { value: 'Regular', label: 'Chocolate' },
    //     { value: 'Deep Clean', label: 'Strawberry' },
    //     { value: 'Moveout', label: 'Vanilla' }
    //   ]
  return (
    <Bookingform>
       {/* <Header /> */}
        <div className='one'>
            <h3>Complete your booking</h3>        
        </div>
        <div className='two'>
            <p>CHOOSE SERVICE TYPE</p>
            {/* <br></br> */}
        <Selects option={options} value={select} onChange={e => setselect(e.target.value)}/>
             {/* <Input type='text' placeholder="text" /> */}
        </div>
        <div className='three'>
        <p>TELL US ABOUT YOUR HOME</p>
        </div>
        <div className='four'>
        <Selects option={rooms}/>
        </div>
        <div className='five'>
        <Selects option={bathrooms}/>
        </div>
        <div className='six'>
             {/* <Input/> */}
             <Selects option={kitchen}/>
        </div>
        <div className='seven'>
            {/* <Input/> */}
             <Selects option={bathrooms}/>
        </div>
        <div className='eight'>
             <Selects option={slightlydirty}/>
        </div>
        <div className='nine'>
        <Selects option={options}/>
        </div>
        <div className='ten'>
        {/* <Selects option={options}/> */}
        <Others others={others} selectExtra={(e) => selectExtra(e)}/>
        </div>
        <div className='eleven'>
        <h3>WHEN WOULD YOU LIKE US TO COME?</h3>
        <small>Choose the date and arrival window* that works for you.<br/> If you need a last-minute appointment give us a call at (206) 294-9654.</small>
        </div>
        <div className='twelve'>
               <Input type='datetime-local' placeholder="choose a date and time" />
        </div>
        <div className='thirteen'>
        <h3>HOW OFTEN ?</h3>
        <small>It's all about matching you with the perfect clean for your home. Scheduling is flexible. Cancel or reschedule anytime. Discounts are applied based on selection.</small>
        <div className='rollover'>
           {
            rollover.map(r => (
                <div key={r.id} className="rolloverbox">
                    <label htmlFor={r.id} id="lab">
                    {r.name}
                    </label>
                    <input type="checkbox" id={r.id}/>

                </div>
            ))
           }
        </div>
        </div>
        {/* <div className='fourteen'>
           <h3>WHO YOU ARE</h3>
           <p>This information will be used to contact you about your service</p>
        </div> */}


    </Bookingform>
  )
}



const Bookingform = styled.div`
min-height: 100vh;
width: 100vw;
 display: grid;
 grid-template-columns: repeat(5,1fr);
 gap: 20px;
 /* box-shadow: 1px 2px 2px 2px #000; */
 padding: 10px;
 width: 50%;
 margin: 0 auto;

 h3{
    color: #43AFE2;
    text-transform: uppercase;
 }

 * > small{
    word-break: break-all;
 }

* > .rollover{
    display: flex;
    gap: 10px;

    input[type="checkbox"]:checked * label{

    }
    
    & > .rolloverbox{
        border: 1px solid #43AFE2;
        padding: 10px ;
        border-radius: 5px;
        cursor: pointer;
    
      
        &:hover{
            background-color: #43AFE2;
            color: #fff;
        }
    }
  
 }


 .one{
    grid-column: 2/5;
    border:1px solid red;
    grid-row: 1;
 }
 .two{
    grid-column: 1/4;
    grid-row: 2/3;
 }
 .three{
    grid-column: 1/4;
    grid-row: 3/4;
 }
 .four{
    grid-column: 1/3;
    grid-row: 4/5;
 }
 .five{
    grid-column: 3/4;
    grid-row: 4/5;
 }
 .six{
    grid-column: 1/4;
    grid-row: 5/6;
 }
 .seven{
    grid-column: 1/3;
    grid-row: 6/7;
 }
 .eight{
    grid-column: 3/4;
    grid-row: 6/7;
 }
 .nine{
    grid-column: 1/4;
    grid-row: 7/8;
 }
 .ten{
    grid-column: 1/4;
    grid-row: 8/9;
 }
 .eleven{
    grid-column: 1/3;
    grid-row: 9/10;
 }
 .twelve{
    grid-column: 1/3;
    width: 100%;
    /* display: grid; */
    grid-row: 10/11;
    /* * > input{
        width: 30%;
    } */
 }
 .thirteen{
    grid-column: 1/3;
    grid-row: 11/12;
    display: flex;
    flex-direction: column;
   gap: 10px;
 }
 

 @media screen and (max-width:80em){
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    }

 @media screen and (max-width:60em){
    zoom: 0%;
    gap: 10px;
    /* grid-template-columns: 1fr; */

    .one{
    grid-column: 1/4;
    grid-row: 1;
 }
 .two{
    grid-column: 1/4;
    grid-row: 2/3;
 }
 .three{
    grid-column: 1/4;
    grid-row: 3/4;
 }
 .four{
    grid-column: 1/2;
    grid-row: 4/5;
 }
 .five{
    grid-column: 3/4;
    grid-row: 4/5;
 }
 .six{
    grid-column: 1/2;
    grid-row: 5/6;
 }
 .seven{
    grid-column: 1/2;
    grid-row: 6/7;
 }
 .eight{
    grid-column: 3/4;
    grid-row: 7/8;
 }
 .eight{
    grid-column: 1/4;
    grid-row: 8/9;
 }

    }


`