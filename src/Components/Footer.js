import React from 'react'
import './css/Footer.css'
import logo from '../images/logo.jpeg';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { Link } from 'react-router-dom';
import appstore from '../images/appstore.svg'
import playstore from '../images/googleplay.svg'
import { FaCaretDown } from "react-icons/fa";

const Footer = () => {
    const handleArrow = (e) => {
        console.log(e.target.parentElement)
        var d = e.target.parentNode.nextSibling;
        if (d === null || undefined) {
            d = e.target.parentNode.parentElement.nextSibling;
            console.log(d);
            var containClassName = d.classList.contains('d-block')
            if (containClassName) {
                d.classList.remove('d-block')
            }
            else {
                d.setAttribute('class', 'd-block');
            }
        }
        else {
            d = e.target.parentNode.nextSibling;
            console.log(d);
            var containClassName = d.classList.contains('d-block')
            if (containClassName) {
                d.classList.remove('d-block')
            }
            else {
                d.setAttribute('class', 'd-block');
            }
        }
    }
    return (
        <>
            <div className='footer-container'>
                <div className="side1">
                    <div className="logo">
                        <p>ElegaTime</p>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='media'>
                        <Link target='_blank' to='https://www.facebook.com/'><FaFacebookF /></Link>
                        <Link target='_blank' to='https://twitter.com/'><FaXTwitter /></Link>
                        <Link target='_blank' to='https://www.instagram.com/'><FaInstagram /></Link>
                        <Link target='_blank' to='https://www.youtube.com/'><FaYoutube /></Link>
                        <Link target='_blank' to='https://in.pinterest.com/'><FaPinterestP /></Link>
                    </div>
                </div>
                <div className="side2">
                    <div className="service">
                        <h4>CUSTOMER SERVICE <FaCaretDown onClick={handleArrow} /></h4>
                        <ul id='bService'>
                            <li><Link>Payment Options</Link></li>
                            <li><Link>Track Order</Link></li>
                            <li><Link>Find a Store</Link></li>
                            <li><Link>Encircle Program</Link></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h4>CONTACT US <FaCaretDown onClick={handleArrow} /></h4>
                        <ul id='bContact'>
                            <li><Link to='tel:1234-266-0123'>1234-266-0123</Link></li>
                            <li><Link to='mailto:customercare@elegatime.co.in'>customercare@elegatime.co.in</Link></li>
                            <li><Link to='mailto:customercare@elegatime.co.in'>FAQs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="side3">
                    <h4>POLICIES <FaCaretDown onClick={handleArrow} /></h4>
                    <ul id='bPolicies'>
                        <li><Link>Brand Protection</Link></li>
                        <li><Link>Cancellation</Link></li>
                        <li><Link>Shipping</Link></li>
                        <li><Link>Warranty Policies</Link></li>
                    </ul>
                </div>
                <div className="side4">
                    <div className="about">
                        <h4>ABOUT ELEGAWATCH <FaCaretDown onClick={handleArrow} /></h4>
                        <ul id='bAbout'>
                            <li><Link>About Us</Link></li>
                            <li><Link>Help & Contact</Link></li>
                            <li><Link>Careers</Link></li>
                        </ul>
                    </div>
                    <div className="download">
                        <div className='appstore'>
                            <img src={appstore} alt="" />
                        </div>
                        <div className='googleplay'>
                            <img src={playstore} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p className='left'>Terms and Conditions|Privacy Policy</p>
                <p className='left'>&copy; ElegaWatch Limited. All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer