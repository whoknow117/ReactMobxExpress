import React, {useContext} from 'react';
import classes from './BestCategory.module.scss';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";




const BestCategory = observer(( ) => {

    const {device} = useContext(Context)

    return (
        <div className={classes.popularWrap}>
            <div className={classes.blockTitle}>Популярные категории</div>
            <div className={classes.popular}>

                {device.types.map( p => {
                     let img = JSON.parse(p.img)

                    return  (
                        <div className={classes.wrap}>
                            <div className={classes.image}>
                               <img src={process.env.REACT_APP_API_URL + img[0]} alt="#"/>
                            </div>
                            <div className={classes.title}>
                                {p.name}
                                <span className={classes.span}></span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
});

export default BestCategory;