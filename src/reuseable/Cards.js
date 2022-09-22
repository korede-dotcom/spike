import React from 'react'
import styled from 'styled-components'

function Cards({icon,large,small,color}) {
  return (
    // <Cardcontainer>
        <Cardcontent style={{backgroundColor:color}}>
            {icon}
            <h1>{large}</h1>
            <p>{small}</p>
        </Cardcontent>

    // </Cardcontainer>
  )
}

// const Cardcontainer = styled.div`


// `

const Cardcontent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 25px;
    min-height: 300px;
    gap: 30px;
    color: #fff;
    
`

export default Cards