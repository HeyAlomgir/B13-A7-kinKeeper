import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoMdHome } from 'react-icons/io';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';
import logoImg from "../../assets/img/logo.png"


const links = <>

   <li> <NavLink  className={({isActive}) => `${isActive ? "bg-[#244d3fFF] text-white font-bold":""} text-gray-600 font-semibold flex items-center gap-0.5]` } to="/">
    <IoMdHome className='hidden md:block text-xl font-bold' /> Home </NavLink> </li>
   <li> <NavLink  className={({isActive}) => `${isActive ? "bg-[#244d3fFF] text-white font-bold":""} text-gray-600 font-semibold` } to="/timeline">
    <RiTimeLine className='hidden md:block text-xl font-bold' /> TimeLine </NavLink> </li>
   <li> <NavLink  className={({isActive}) => `${isActive ? "bg-[#244d3fFF] text-white font-bold":""} text-gray-600 font-semibold` } to="/stats">
   <ImStatsDots className='hidden md:block text-xl font-bold'/> Stats </NavLink> </li>

</>


const Navbar = () => {
    return (
      <div className='bg-base-100 shadow-sm'>
    <div className="container mx-auto navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
        {links}
      </ul>
    </div>
     <img src={logoImg} alt="logo img" />
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
</div>
  </div>
    );
};

export default Navbar;