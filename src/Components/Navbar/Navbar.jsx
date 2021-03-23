import React from 'react';
import { NavLink } from 'react-router-dom';
import Cls from './Navbar.module.css';

const Navbar = () => {
  return (
  <nav className = {Cls.nav}>
  <div className = {Cls.item}> 
  <NavLink to ='/Profile' activeClassName = {Cls.activeLink}> Profile </NavLink>
   </div>
   <div className = {Cls.item}> 
  <NavLink to ='/Dialogs'  activeClassName = {Cls.activeLink}> Messages </NavLink>
   </div>
   <div className = {Cls.item}> 
  <NavLink to = '/News'  activeClassName = {Cls.activeLink}> News </NavLink>
   </div>
   <div className = {Cls.item}> 
  <NavLink to = '/Music'  activeClassName = {Cls.activeLink}> Music </NavLink>
   </div>
   <div className = {`${Cls.item} ${Cls.active}`}> 
  <NavLink to = 'Setting'  activeClassName = {Cls.activeLink}> Setting </NavLink>
   </div>
   </nav>
  )
  
  }
  
  export default Navbar;
  