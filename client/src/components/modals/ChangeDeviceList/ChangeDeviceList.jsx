import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

import ChangeProductItem from "./ChangeProductItem/ChangeProductItem";
import classes from './ChangeDeviceList.module.scss';
import {fetchDevice} from "../../../http/deviceApi";



const ChangeDeviceList = observer(() => {

    const {device} = useContext(Context)

    // const [oneDevice, setOneDevice] = useState[""]
    //
    // useEffect(() => {
    //     fetchDevice(device.selectedDevice.id).then(data => setOneDevice(data))
    // },device.selectedDevice)





    return (
        <div   className={classes.productList}>

            {device.devices.map(el =>{
                return (
                    <ChangeProductItem  dev={el} id={el.id} name={el.name} />
                )
            })}
        </div>
    );
});

export default ChangeDeviceList;