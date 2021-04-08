import React, {useEffect, useState} from 'react';
import classes from './Slider.module.scss';
import slider1Img from '../../../assets/k1.jpg';
import slider2Img from '../../../assets/k2.jpg';
import slider3Img from '../../../assets/k3.jpg';
import slider4Img from '../../../assets/k4.jpg';
import slider5Img from '../../../assets/k5.jpg';
import slider6Img from '../../../assets/k6.jpg';
import slider7Img from '../../../assets/k7.jpg';
import slider8Img from '../../../assets/k8.jpg';
import ArrowLeft from "../../../assets/ArrowLeftIcon/ArrowLeftIcon";
import ArrowRight from "../../../assets/ArrowRightIcon/ArrowRightIcon";

const   Slider = () => {

    const [slide, setSlide] = useState(0);


    const imageState = [

        {id: 8, img: slider8Img,},
        {id: 1, img: slider1Img,},
        {id: 2, img: slider2Img,},
        {id: 3, img: slider3Img,},
        {id: 4, img: slider4Img,},
        {id: 5, img: slider5Img,},
        {id: 6, img: slider6Img,},
        {id: 7, img: slider7Img,},

    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((current) =>
                current === imageState.length - 1 ? 0 : current + 1
            )


        }, 24000)
        return () => clearInterval();
    }, [])


    const incrementSlide = () => {
        if (slide === imageState.length - 1) {

            setSlide(0)

        } else setSlide(slide + 1)
    }

    const spanStyle = {
        width: `${slide * 15 + '%'}`,
        display: 'block',
        height: '2px',
        background: '#ff7002',
        transition: '.5s ease-in-out',
    }
    const decrementSlide = () => {

        if (slide) {
            setSlide(slide - 1);
        } else setSlide(imageState.length - 1)
    }


    return <div className={classes.slideShow}>

        {imageState.map((im, idx) => {
            return (
                <div key={idx} className={idx === slide ? classes.active : classes.slide}>
                    <img src={im.img} alt="#"/>
                </div>
            )
        })}

        <div className={classes.btns}>
            <button className={classes.btn} onClick={decrementSlide}>
                <ArrowLeft/>
            </button>
            <div className={classes.spanWrapper}>
                <span className={classes.span}>{slide + 1}/</span>
                <span className={classes.span}>{imageState.length}</span>
            </div>
            <div className={classes.sliderLength}>
                <span style={spanStyle}></span>
            </div>
            <button className={classes.btn} onClick={incrementSlide}>
                <ArrowRight/>
            </button>
        </div>


    </div>
};

export default Slider;