import React, {useContext,  } from 'react';
import {Context} from "../../../../index";
import {deleteDescription,  } from "../../../../http/categoryInfoApi";
import {deleteDevice} from "../../../../http/deviceApi";
import classes from './ChangeProductItem.module.scss';
const ChangeProductItem = ({dev,name,id}) => {

    const {device} = useContext(Context)


    const removeCallback = (productId) => {
        deleteDescription(id).then( data => device.setInfoDescription(data))
        deleteDevice(productId).then(data => device.setDevices(data))
    }
    const removeDescription = () => {

    }


    return (

            <div onClick={() => device.setSelectedDevice(dev)} className={`${classes.item} ${ device.selectedDevice === dev ? classes.active : ""}`}>
                <div className={classes.img}>
                    <img src={process.env.REACT_APP_API_URL + dev.img} alt=""/>
                </div>
                <div className={classes.name}>{name}</div>
                <button className={classes.btn} onClick={()=> removeCallback(id) }>X</button>
                
            </div>








    );
};

export default ChangeProductItem;