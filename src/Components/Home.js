import React, { useState } from 'react';
import './css/Home.css';
import SimpleImageSlider from "react-simple-image-slider";
import blackwatch from '../images/BlackWatch.jpeg';
import couples from '../images/couplesWatch.jpg';
import dessert from '../images/dessert.jpg';
import multiwatches from '../images/multiWatches.jpg';
import parisBg from '../images/parisBg.jpg';
import Smart_W from '../images/womenSmart-w.jpg';
import digital_W from '../images/digital-d.webp';
import kids from '../images/kids.jpeg';
import yellow from '../images/yellow clk.webp';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import casual from '../images/casual.jpg';
import party from '../images/party.jpg';
import street from '../images/street.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";
import cerame from '../images/cerame.jpg';
import smWatch from '../images/sm-watch.jpg';
import dWatch from '../images/digital-watch.jpg';
import aWatch from '../images/analog-watch.jpg';
import clockImg from '../images/clock-watch.jpg';
import img1 from '../images/bg-img-1.jpg';
import img2 from '../images/bg-img-2.jpg';
import featutredImg from "../images/featured.jpg"
import RoseGold from "../images/RoseGold.jpg"
import goldBlack from "../images/goldBlack.jpg"
import green from "../images/green.jpg"
import silver from "../images/silver.jpg"
import Checkout from './Checkout';
import Footer from './Footer';




const Home = () => {
    const [current, setCurrent] = useState(0);
    const [imageNum, setImageNum] = useState(1);

    const slideLeft = (e) => {
        var slideLeft = document.getElementsByClassName('img');
        for (var i = 0; i < slideLeft.length; i++) {
            slideLeft[i].classList.add('slide-left');
            var disable = document.getElementsByClassName('right-arrow')[0];
            var unDisable = document.getElementsByClassName('left-arrow')[0];
            disable.disabled = true;
            unDisable.disabled = false;
        }
    }
    const slideRight = (e) => {
        var slideRight = document.getElementsByClassName('img');
        for (var i = 0; i < slideRight.length; i++) {
            slideRight[i].classList.remove('slide-left');
            var disable = document.getElementsByClassName('right-arrow')[0];
            var unDisable = document.getElementsByClassName('left-arrow')[0];
            disable.disabled = false;
            unDisable.disabled = true;
        }

    }
    const SliderData = [
        {
            image:
                cerame,
                h4:'Cerame',
            txt: 'Experience the modern richness of ceramic bezels and straps, paired with stainless steel and multifunctional design for a superior statement in contemporary style'
        },
        {
            image:
            RoseGold,
                h4:'CRUSH',
            txt: 'Uniquely styled with creases and pinches, these sleek watches are all about making a bold and edgy statement.'
        },
        {
            image:
            goldBlack,
            h4:'Tick Tock',
            txt: ' Where versatility meets boldness. Featuring multilayered dials, striking finishes, and assorted plating hues, all housed in a bold case with distinctive pushers for an expressive timepiece.'
        },
        {
            image:
            green,
            h4:'Style Up',
            txt: 'Where vibrant plating meets exceptional design, perfect for those who dress to impress and seek distinct colors in their timepieces.'
        },
        {
            image:
            silver,
            h4:'CERAME',
            txt: ' Fastrack\'s pioneering ceramic collection. Experience the modern richness of ceramic bezels and straps, paired with stainless steel and multifunctional design for a superior statement in contemporary style.'
        }
    ];
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }
    const sliderImg = [smWatch, dWatch, aWatch, img1, img2];
    return (
        <>
            <div className='slider-container'>
                <SimpleImageSlider
                    width={'100%'}
                    height={350}
                    images={sliderImg}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    onStartSlide={(index, length) => {
                        setImageNum(index);
                    }}
                    autoPlayDelay={3}
                />
            </div>
            <div className="categories">
                <h4>ELEGATIME CATEGORIES</h4>
                <button onClick={slideRight} className='left-arrow'>
                    <FaChevronLeft />
                </button>
                <div className='img-container'>
                    <div className='img'>
                        <img src={blackwatch} alt="" />
                        <p>ANALOG WATCHES</p>
                    </div>
                    <div className='img'>
                        <img src={digital_W} alt="" />
                        <p>DIGITAL WATCHES</p>
                    </div>
                    <div className='img'>
                        <img src={Smart_W} alt="" />
                        <p>SMART WATCHES</p>
                    </div>
                    <div className='img'>
                        <img src={kids} alt="" />
                        <p>KIDS</p>
                    </div>
                    <div className='img'>
                        <img src={yellow} alt="" />
                        <p>CLOCKS</p>
                    </div>
                </div>
                <button onClick={slideLeft} className='right-arrow'>
                    <FaChevronRight />
                </button>
            </div>
            <div className="vibe-container">
                <h4>SHOP YOUR VIBE</h4>
                <div className="vibe-img-container">
                    <div className='vibe-img'>
                        <img src={casual} alt="" />
                        <p>ELEVATED CASUAL <FaLongArrowAltRight /></p>
                    </div>
                    <div className='vibe-img'>
                        <img src={party} alt="" />
                        <p>PARTY<FaLongArrowAltRight /></p>
                    </div>
                    <div className='vibe-img'>
                        <img src={street} alt="" />
                        <p>STREET WEAR<FaLongArrowAltRight /></p>
                    </div>
                </div>
            </div>
            <div className='featured-section'>
                <section className='featured-slider'>
                    <FaChevronLeft className='left-arrow' onClick={prevSlide} />
                    <FaChevronRight className='right-arrow' onClick={nextSlide} />
                    {SliderData.map((slide, index) => {
                        return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && (
                                    <>
                                        <img src={slide.image} alt='travel image' className='image' />
                                        <h4>{slide.h4}</h4>
                                        <p>{slide.txt}</p>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </section>
                <section className='featured-Img'>
                    <img src={featutredImg} alt="featutredImg" srcset="" />
                </section>
            </div>
            <div>
                <Checkout/>
            </div>
            <footer>
                <Footer/>
            </footer>

        </>

    )
}

export default Home