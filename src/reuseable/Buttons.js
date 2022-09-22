import React from 'react'
import styled from 'styled-components'

function Buttons({text,icon}) {
  return (
    <Button>
        {text} {icon}
    </Button>
  )
}

const Button = styled.button`
display: flex;
align-items: center;
gap: 10px;
border-radius:5px;
outline: none;
background: none;
border: none;
padding: 10px 30px;
background-color: #43AFE2;
font-size: 20px;
color: #fff;
cursor: pointer;

`

export default Buttons