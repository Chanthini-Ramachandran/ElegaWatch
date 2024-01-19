import React, { useEffect, useState } from 'react';
import logo from '../images/logo.jpeg';
import { NavLink } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { AiOutlineShopping } from "react-icons/ai";
import './css/Navbar.css';
import { Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";

const Navbar = (props) => {
    const [cartValue, setCartValue] = useState(0);
    let val = 0;

    useEffect(() => {
        console.log('value from parent', props.data);
        // setCartValue(props.data);
        localStorage.setItem('cartCount', props.data);
        let sCount = localStorage.getItem('scount');
        let wCount = localStorage.getItem('wcount');
        console.log(sCount)
        console.log(wCount)
        if (sCount != null && wCount != null) {
            val = Number(sCount) + Number(wCount);
        }
        else if (sCount != null && wCount == null) {
            val = Number(sCount);
        }
        else if (sCount == null && wCount != null) {
            val = Number(wCount);
        }
        else {
            val = 0;
        }
        console.log(val);
        setCartValue(val)
        // const value = setInterval(()=>{
        //     // setCartValue(sessionStorage.getItem('addCount'))
        // },1000);
        // console.log(value);
    }, [props.data]);
    useEffect(() => {
        let wmenu = document.getElementById('wmenu');
        let smenu = document.getElementById('smenu');
        let salemenu = document.getElementById('salemenu');
        let moremenu = document.getElementById('moremenu');
        wmenu.addEventListener('click', function () {
            document.getElementById('wsubmenu').classList.add('flex');
            if (document.getElementById('wsubmenu').classList.contains('none')) {
                document.getElementById('wsubmenu').classList.remove('none');
            }
            document.getElementById('ssubmenu').classList.add('none');
            document.getElementById('salesubmenu').classList.add('none');
            document.getElementById('moresubmenu').classList.add('none');
        })
        smenu.addEventListener('click', function () {
            document.getElementById('ssubmenu').classList.add('flex');
            document.getElementById('ssubmenu').classList.remove('none');
            document.getElementById('wsubmenu').classList.add('none');
            document.getElementById('salesubmenu').classList.add('none');
            document.getElementById('moresubmenu').classList.add('none');
        })
        salemenu.addEventListener('click', function () {
            document.getElementById('salesubmenu').classList.add('flex');
            document.getElementById('salesubmenu').classList.remove('none');
            document.getElementById('ssubmenu').classList.add('none');
            document.getElementById('moresubmenu').classList.add('none');
            document.getElementById('wsubmenu').classList.add('none');
        })
        moremenu.addEventListener('click', function () {
            document.getElementById('moresubmenu').classList.add('flex');
            document.getElementById('moresubmenu').classList.remove('none');
            document.getElementById('ssubmenu').classList.add('none');
            document.getElementById('salesubmenu').classList.add('none');
            document.getElementById('wsubmenu').classList.add('none');
        })
    })

    const showMenu = () => {
        var menu = document.getElementsByClassName('menu')[0]
        menu.style.display = 'block'
        var show = document.getElementById('menubar')
        show.style.display = 'none'
        var close = document.getElementById('menuhide')
        close.style.display = 'block';
        let watchContainer = document.getElementsByClassName('watches-container')[0];
        console.log(watchContainer);
        if (watchContainer != undefined) {
            watchContainer.style.marginTop = '12rem';
        }
    }
    const hideMenu = () => {
        var menu = document.getElementsByClassName('menu')[0]
        menu.style.display = 'none'
        var close = document.getElementById('menuhide')
        close.style.display = 'none'
        var show = document.getElementById('menubar')
        show.style.display = 'block';
        let watchContainer = document.getElementsByClassName('watches-container')[0];
        if (watchContainer != undefined) {
            watchContainer.style.marginTop = '0';
        }
    }
    const handleSetMenus = (e) => {
        let selectedMenu = e.target.textContent;
        console.log(selectedMenu);
        props.selectedMenuItem(selectedMenu);
    }
    return (
        <>
            <div className='navbar-container'>
                <div className="logo">
                    <NavLink to='/'>
                        <p>ElegaTime</p>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="menu">
                    <ul>
                        <li className='watchMenu'>
                            <NavLink id='wmenu' onClick={handleSetMenus} className='active-menu' to='watches'>Watches<FaCaretDown />
                                <div className='underline'></div>
                            </NavLink>
                            <ul id='wsubmenu' className='submenus'>
                                <li onClick={handleSetMenus}><NavLink to='watches'>Mens
                                    <div className='underline'></div>
                                </NavLink></li>
                                <li onClick={handleSetMenus}><NavLink to='watches'>Womens
                                    <div className='underline'></div>
                                </NavLink></li>
                                <li onClick={handleSetMenus}><NavLink to='watches'>Unisex
                                    <div className='underline'></div>
                                </NavLink></li>
                            </ul>
                        </li>
                        <li className='smartSubmenu'>
                            <NavLink id='smenu' onClick={handleSetMenus} className='active-menu' to='smartWatches'>Smart Watches<FaCaretDown />
                                <div className='underline'></div>
                            </NavLink>
                            <ul id='ssubmenu' className='submenus'>
                                <li onClick={handleSetMenus}><NavLink to='smartWatches'>Power
                                    <div className='underline'></div>
                                </NavLink></li>
                                <li onClick={handleSetMenus}><NavLink to='smartWatches'>Active
                                    <div className='underline'></div>
                                </NavLink></li>
                            </ul>
                        </li>
                        <li className='salesSubmenu'>
                            <NavLink id='salemenu' onClick={handleSetMenus} className='active-menu' to='sales'>Sales<FaCaretDown />
                                <div className='underline'></div>
                            </NavLink>
                            <ul id='salesubmenu' className='submenus'>
                                <li onClick={handleSetMenus}><NavLink to='sales'>Best Seller
                                    <div className='underline'></div>
                                </NavLink></li>
                                <li onClick={handleSetMenus}><NavLink to='sales'>New Arrivals
                                    <div className='underline'></div>
                                </NavLink></li>
                            </ul>
                        </li>
                        <li className='moreSubmenu'>
                            <NavLink id='moremenu' className='active-menu' to='more'>More<FaCaretDown />
                                <div className='underline'></div>
                            </NavLink>
                            <ul id='moresubmenu' className='submenus'>
                                <li><NavLink to='findstore'>Find Store
                                    <div className='underline'></div>
                                </NavLink></li>
                                <li><NavLink to='appointment'>Book An Appointment
                                    <div className='underline'></div>
                                </NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="icons">
                    <ul>
                        <li id='menubar'
                        ><GiHamburgerMenu onClick={showMenu} /></li>
                        <li id='menuhide'
                        ><IoMdClose onClick={hideMenu} /></li>
                        <li><NavLink title='Search' to='search'><IoSearch /></NavLink></li>
                        <li><NavLink title='User' to='createAccount'><FiUser /></NavLink></li>
                        <li><NavLink title='Whishlist' to='whishlist'><LuHeart /></NavLink></li>
                        <li><NavLink title='Cart' className='span' to='cart'><AiOutlineShopping /><span>{cartValue}</span></NavLink></li>
                    </ul>
                </div>

            </div>
            <Outlet />
        </>

    )
}

export default Navbar