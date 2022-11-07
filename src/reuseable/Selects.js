import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import styled from 'styled-components'



export default function Selects({option,selectedValue,name}) {
  return (
    <SelectContainer>
       <select name={name} onChange={selectedValue} >
          {option.map(d => <option value={d.value} name={name} key={d.value}>{d.value}</option>)}
       </select>
    </SelectContainer>
  )
}


const SelectContainer = styled.div`

select{
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 3px;
  outline: none;
  border-color: #43AFE2;

  /* @media screen and (max-width:70em){
      width: 200px;
  } */
  @media screen and (max-width:40em){
      width: 100%;
  }

}

`




