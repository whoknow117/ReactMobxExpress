import React, {useContext} from 'react';
import classes from './SubCategoryPage.module.scss'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const SubCategoryPage = observer(() => {

    const {device} = useContext(Context)




    return (
        <div className={classes.sub}>
            {device.devices.map(dev => {
                return <div className={classes.item}>
                    {dev.price}

                </div>
            })}
        </div>
    );
});

export default SubCategoryPage;