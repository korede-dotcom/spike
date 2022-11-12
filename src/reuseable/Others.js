import React from 'react'
import styled from 'styled-components'

export default function Others({others,selectExtra,isSelected}) {

  console.log(isSelected)
  return (
    <Other>
    <div className='others'>
          <div className='otherstext'>
            <p>ADD EXTRAS</p>
          </div>
          <div className='boxx'>
            {
              others.map(other => (
                  // <div className='othericons'id="check" >
                      <label className='othericons box' key={other.id} id="check"  htmlFor={other.name}>
                      {/* <label className={`${isSelected === true ? 'othericons box checkeditem' : 'othericons box'}`} key={other.id} id="check"  htmlFor={other.name}> */}
                      <input type="checkbox" id={other.name} name={other.name} className="ischecked" onChange={selectExtra}/>
                        <img src={other.icon} />
                        <small>{other.name}</small>
                      </label>
                  // </div>

                
                ))
              }

              </div>
         </div>

    </Other>
  )
}

const Other = styled.div`
.boxx{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
  gap: 20px;


}

.others{
    padding: 15px;
    display: flex;
     flex-direction: column;
     gap: 10px;
   
  }
  .othericons{
    display: grid;
    /* width: 100%; */
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    gap: 30px;


  }
  .othericons  img{
    height: 50px;
  }

 .box {
    border: 1px solid #43AFE2;
    padding: 10px;
    display: inline-flex;
    gap: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    
   & > .checkeditem{
      background-color: #43AFE2 !important;
    }
  }
  input[type="checkbox"]{
    pointer-events: none;
    opacity: 0;
  }
  .checkeditem{
      background-color: #43AFE2 !important;
    }
  .othericons .box:hover{
    background-color: #43AFE2;
    
  }

  .box input[type="checkbox"]:checked::before {
    content: '';
    width: 100%;
    height: 100%;
    background: #43AFE2 !important;
  }
  

  /* .othericons .box:hover{
    background-color: #43AFE2;
  } */
  .selected{
  }
  .othertext{
    @media screen and(max) {
        margin-top: 30px;
    }
  }

`


