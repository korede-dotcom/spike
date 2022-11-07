import React from 'react'
import styled from 'styled-components'

export default function Others({others,selectExtra}) {
  return (
    <Other>
    <div className='others'>
          <div className='otherstext'>
            <p>ADD EXTRAS</p>
          </div>
            {
              others.map(other => (
          <div className='othericons'>
        
                <label htmlFor='check'></label>
              <input type="checkbox" id='check'/>
              <div className='box' key={other.id} >
                 <img src={other.icon} onClick={(e,i) => selectExtra(e,i)} />
                 <small>{other.name}</small>
              </div>

          </div>
              ))
            }

         </div>

    </Other>
  )
}

const Other = styled.div`

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
  .othericons .box img{
    height: 50px;
  }

  .othericons .box {
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
  }
  .othericons .box:hover{
    background-color: #43AFE2;
  }
  .selected{
    background-color: #43AFE2;
  }
  .othertext{
    @media screen and(max) {
        margin-top: 30px;
    }
  }

`


