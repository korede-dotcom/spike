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
import logo from '../assests/logo.png'
import { useState } from 'react'


export default function BookingForm() {
    const [isSelected,setIsSelected] = useState(!false)
   const [select, setselect] = useState({
     serviceType:"",
     bedRoom:"",
     bathRoom:"",
     kitchen:"",
     name:"",
     email:"",
     cleaningDate:"",
     lastName:"",
     homeStatus:"",
     address:"",
     often:"",
     city:"",
     state:"",
     zipcode:"",
     phone:"",
     comment:""
   })
   const [loading,setLoading] = useState(false)

   const [extras,setExtras] = useState([])
   console.log(extras)

   console.log(select)
   const handleOnChange = (e) => {
    const { value, name } = e.target
    setselect((prev) => {
        return {...prev, [name]:value}
     })
     
 }

 const handleOnChangeOthers = (e) => {
console.log(isSelected)
  const { value, name } = e.target
  if(isSelected){
    e.target.parentElement.style.backgroundColor = "#43AFE2"
  }else{
    e.target.parentElement.parentElement.style.backgroundColor = "transparent"
  }
  
  // setIsSelected(!false)
  if(!extras?.includes(name)){
    setExtras((prev)=> {
      return [...prev, name]
    })
  }else{
   
  }
 }
    const others = [
      {
        id:1,
        name:"cabinet",
        value:"cabinet",
        icon:cabinet,
      },
      {
        id:2,
        name:"dishwasher",
        value:"dishwasher",
        icon:dishwasher,
      },
      {
        id:3,
        name:"garage",
        value:"garage",
        icon:garage,
      },
      {
        id:4,
        name:"fridge",
        value:"fridge",
        icon:fridge,
      },
      {
        id:5,
        name:"laundry",
        value:"laundry",
        icon:laundry,
      },
      {
        id:6,
        name:"microwave",
        value:"microwave",
        icon:microwave,
      },
      {
        id:7,
        name:"oven",
        value:"oven",
        icon:oven,
      },
      {
        id:8,
        name:"wall",
        value:"wall",
        icon:wall,
      },
      {
        id:9,
        name:"window",
        value:"window",
        icon:window,
      },
    ]
  let bool = false
    const selectExtra = (e,i) => {
       e.target.parentElement.style.backgroundColor = "#43AFE2"
       
    }
    const options = [
        { value: 'Home Apartment Cleaning', label: 'Home Apartment Cleaning' },
        { value: 'Deep Cleaning', label: 'Strawberry' },
        { value: 'Move-In & Move-Out Cleaning', label: 'Move-In & Move-Out Cleaning' },
        { value: 'Office Cleaning', label: 'Office Cleaning' },
        { value: 'Fumigation & Disinfectingg', label: 'Fumigation & Disinfecting' },
        // { value: 'Move-In & Move-Out Cleaning', label: 'Vanilla' },
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
        { value: 'Dirty', label: 'Chocolate' },
        { value: 'Really Dirty', label: 'Strawberry' },
        { value: 'Extreme Dirty', label: 'Vanilla' }
      ]

      const rollover = [
        {
            id:1,
            name:"One Time",
            value:"One Time"
        },
        {
            id:2,
            name:"Weekly",
            value:"Weekly"
        },
        {
            id:3,
            name:"Bi weekly",
            value:"Bi weekly"
        },
        {
            id:4,
            name:"Monthly",
            value:"Monthly"
        },
      ]
    // const options = [
    //     { value: 'Regular', label: 'Chocolate' },
    //     { value: 'Deep Clean', label: 'Strawberry' },
    //     { value: 'Moveout', label: 'Vanilla' }
    //   ]
    
    async function submitRequest (e) {
      e.preventDefault()
      // formData.append('name', name);
      // formData.append('email', email);
      // formData.append('subject', subject);
      // formData.append('phone', phone);
      // formData.append('message', message);
      setLoading(true)

      const response = await fetch("https://spikebe.onrender.com/bookings",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
             ...select,
             extra:[...extras]

          })
                  
      })
      const data = await response.json()
      console.log(data)
   
      setLoading(false)
      document.querySelector("dialog").showModal()
      setTimeout(() => {
        document.querySelector("dialog").close()
      }, 2000
      );
  }
  return (
    <Bookingform>
       {/* <Header /> */}
        <div className='one'>
            {/* <h3>Complete your booking</h3>         */}
        </div>
        <div className='two'>
            <p>CHOOSE SERVICE TYPE</p>
            {/* <br></br> */}
        <Selects option={options} name="serviceType" selectedValue={handleOnChange}/>
             {/* <Input type='text' placeholder="text" /> */}
        </div>
        <div className='three'>
        <p>TELL US ABOUT YOUR HOME</p>
        </div>
        <div className='four'>
        <Selects option={rooms} name="bedRoom" selectedValue={handleOnChange}/>
        </div>
        <div className='five'>
        <Selects option={bathrooms} name="bathRoom" selectedValue={handleOnChange}/>
        </div>
        <div className='six'>
             {/* <Input/> */}
             <Selects option={kitchen} name="kitchen" selectedValue={handleOnChange}/>
        </div>
        <div className='seven'>
            {/* <Input/> */}
             <Selects option={slightlydirty} name="homeStatus" selectedValue={handleOnChange}/>
        </div>
        <div className='eight'>
        {/* <Selects option={options} selectedValue={handleOnChange}/> */}
        </div>
        <div className='nine'>
        <Others others={others} selectExtra={handleOnChangeOthers} isSelected={isSelected}/>
        </div>
        <div className='ten'>
        {/* <Selects option={options}/> */}
        </div>
        <div className='eleven'>
        <h3>WHEN WOULD YOU LIKE US TO COME?</h3>
        <small>Choose the date and arrival window* that works for you.<br/> If you need a last-minute appointment give us a call at (206) 294-9654.</small>
        </div>
        <div className='twelve'>
               <Input type='datetime-local' placeholder="choose a date and time" name="cleaningDate" change={handleOnChange}/>
        </div>
        <div className='thirteen'>
        <h3>HOW OFTEN ?</h3>
        <small>It's all about matching you with the perfect clean for your home. Scheduling is flexible. Cancel or reschedule anytime. Discounts are applied based on selection.</small>
        <div className='rollover'>
           {/* {
            rollover.map(r => (
                <div key={r.id} className="rolloverbox">
                    <label htmlFor={r.id} id="lab">
                    {r.name}
                    </label>
                    <input type="checkbox" id={r.id}/>

                </div>
            ))
           } */}
             <Selects option={rollover} name="often" selectedValue={handleOnChange}/>
        </div>
        </div>
        <div className='fourteen'>
           <h3>WHO YOU ARE</h3>
           <p>This information will be used to contact you about your service</p>
        </div>
        <div className='fifteen'>
          <small>What is your name</small>
        <Input type='text' placeholder="what is your name" name="name" change={handleOnChange}  />
        </div>
        <div className='sixteen'>
        <small>Enter your email</small>
        <Input type='email' placeholder="enter your email" name="email" change={handleOnChange}/>
        </div>
        <div className='eighteen'>
        <small>Other Names</small>
        <Input type='text' placeholder="Other Names" name="lastName" change={handleOnChange}   />
        </div>
        <div className='nineteen'>
        <small>Enter your full Address</small>
        <Input type='address' placeholder="enter your full address" name="address" change={handleOnChange} />
        </div>
        <div className='twenty'>
        <small>What City are you?</small>
        <Input type='text' placeholder="city" name="city" change={handleOnChange} />
        </div>
        <div className='21'>
        <small>What State are you?</small>
        <Input type='text' placeholder="state" name="state" change={handleOnChange} />
        </div>
        <div className='22'>
        <small>Tell Us your zipcode</small>
        <Input type='text' placeholder="ZIp code" name="zipcode" change={handleOnChange} />
        </div>
        <div className='23'>
        <small>We'll Like to Call you</small>
        <Input type='number' placeholder="phone number" name="phone" change={handleOnChange} />
        </div>
        <div className='24'>
        <small>Tell us about what you need done</small>
        {/* <Input type='number' placeholder="phone number" name="phone" change={handleOnChange} /> */}
        <textarea name='comment' onChange={handleOnChange} placeholder="leave a comment" rows='10' cols='50'></textarea>
        </div>
        {/* <div className='twenty'>
        <Input type='text' placeholder="phone number" />
        </div> */}
        <div className='lastbtn'>
        <button onClick={submitRequest}>submit</button>
        </div>
        <div className='centerpoint'>
        <dialog>
          <div>
          <img src={logo}/>
          <h4>
            Your Booking as been confirmed kindly check your email 
          </h4>

          </div>
          
        </dialog>

        </div>


    </Bookingform>
  )
}



const Bookingform = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-around;
gap: 20px;

 max-width: 60%;
   margin: 0 auto;

   @media screen and(max-width:50em) {
      max-width: 100%;
   }

   * > input,textarea{
    border-color: #43AFE2;
    width: 100%;
   }
    .lastbtn{
    width: 50% !important;
    margin: 0 auto;
    display: flex;
    justify-content: center;


  button{
      width: 100%;
      padding: 9px;
      margin-bottom: 50px;
      background-color: #43AFE2;
      border: none;
      border-radius: 6px;
      text-transform: uppercase;
    }
    button:hover{
      color: #fff;
      cursor: pointer;
    }

  }
  #centerpoint {
  top: 50%;
  left: 50%;
  position: absolute;

  }

  .centerpoint{
   
  }
dialog {
  margin: auto auto;
    padding: 1em;
    /* min-height: 35vh; */
   background-color: #43AFE2;
   border: none;
   border-radius: 6px;
   color: #fff;

   > div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    /* align-items: center; */
    img{
     width: 100px;
     height: 50px;
     object-fit: contain;
     text-align: center;
    }

   }

}
      

   

   

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



 

 


    


`