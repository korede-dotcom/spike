import React from 'react'
import styled from 'styled-components'

export default function Input({change,type,placeholder}) {
  return (
    <InputConatiner>
        <input type={type} placeholder={placeholder} onChange={change}/>
    </InputConatiner>
  )
}
const InputConatiner = styled.div`

    input{
        width: 50%;
        padding: 10px;
        border: 1px solid #000;
        border-radius: 3px;
        outline: none;

        @media screen and (max-width:40em){
            width: 100%;
        }

    }

`
