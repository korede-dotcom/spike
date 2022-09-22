import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {links} from '../../routes/nav'
import styled from 'styled-components'
import logo from '../../assests/logo.png'

import { HiMenuAlt2 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';


function Header() {
  const [isMobile , setIsMobile] = useState(false)
  const [show , setShow] = useState(false)

  const shoNav = () => {
      setShow(!show)
      console.log(show)
  }



  return (
    <>
        <Navcontainer>
        <img src={logo}/>
        {!show ? <HiMenuAlt2  height={6} width={5} className="menuicon" onClick={shoNav}/> : <CgClose  height={6} width={5} className="menuicon" onClick={shoNav}/> }
        <NavList className={show ? 'show' : ' '}>
        {links.map(link => <Link to={link.link} className={window.location.pathname === link.link ? 'active' : ''}>{link.name}</Link>)}
        </NavList>
        </Navcontainer>
    </>
  )
}
  const Navcontainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #fff;
    padding: 10px;
    box-shadow: 1px 1px 2px 2px #eeee;
    position: fixed;
    left: 0;
    right: 0;
    height: 7vh;
    
    .menuicon{
      display: none;
    }
    gap: 20px;
    img{
      height: 40px;
      display: inline-flex;
    }
    @media screen and (max-width:40em){
      justify-content: space-between;
      padding: 0 10px;
      box-shadow: 1px 1px 2px #1650A3;
      /* position: fixed;
      right: 0;
      left: 0; */
      z-index: 1;
      .menuicon{
        display: block;
      }
   }

   & > .show{
      display: flex;
    }

    & > .active{
      border-bottom: #43AFE2;
    }
   
  
  `;
  const NavList = styled.nav`
      display: flex;
      gap: 30px;

     
     
   a{
      color: black;
      text-decoration: none;
      
  }
  a:hover{
      border-bottom: 1.7px solid #1650A3;
      display: inline-flex;
      gap: 10px;
      
   }
   .active{
      border-bottom: 2px solid #1650A3;
   }
  
   @media screen and (max-width: 40em) {
      flex-direction: column;
      position: absolute;
      top: 7vh;
      left: 0;
      width: 70%;
      height: 100vh;
      background-color: #1650A3;
      display: none;
    }
  
    /* background-color: black; */
  `;





export default Header