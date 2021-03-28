import React, {useContext, useEffect} from 'react';
import {Context} from "../../../../index";
import {deleteDescription, fetchInfoDescription} from "../../../../http/categoryInfoApi";
import {deleteDevice} from "../../../../http/deviceApi";
import classes from './ChangeProductItem.module.scss';
const ChangeProductItem = ({dev,name,id}) => {

    const {device} = useContext(Context)
    // useEffect(() => {
    //
    //     fetchInfoDescription(null,null,null).then(data => device.setInfoDescription(data))
    // },[device.selectedDevice])

    const removeCallback = (productId) => {
        deleteDescription(id).then( data => device.setInfoDescription(data))
        deleteDevice(productId).then(data => device.setDevices(data))
    }
    const removeDescription = () => {

    }

    return (

            <div onClick={() => device.setSelectedDevice(dev)} className={classes.item}>

                <div className={classes.name}>{name}</div>
                <button className={classes.btn} onClick={()=> removeCallback(id) }>X</button>
                {/*{device.infoDescription.map( el => el.deviceId === id ? <div>{el.title}*/}


                {/*</div> : ""  )}*/}
                {/*<button className={classes.btn} onClick={removeDescription}>X</button>*/}
            </div>








    );
};

export default ChangeProductItem;