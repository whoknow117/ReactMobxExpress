import React from 'react';
import classes from './NavBarLogo.module.scss';
import Logo from "../../../assets/Logo/Logo";

const NavBarLogo = () => {
    return (
        <div className={classes.headerLogo}>


            <div className={classes.headerLogo__icon}>

                <Logo />
                {/*<div className={classes.image}>*/}
                {/*    <img src="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-2714ff4d6b03b0c764b5df452bf906cb.png" alt="#"/>*/}
                {/*</div>*/}


            </div>
            <h3 className={classes.headerLogo__text}>НАБЖ  <span className={classes.eSpan}>   </span>  <span className={classes.txt}>НЕЦ</span></h3>

        </div>
    );
};

export default NavBarLogo;