import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {deleteDevice} from "../../../http/deviceApi";
import ChangeProductItem from "./ChangeProductItem/ChangeProductItem";




const ChangeDeviceList = observer(() => {

    const {device} = useContext(Context)






    return (
        <div>
            {device.devices.map(el =>{
                return (
                    <ChangeProductItem   id={el.id} name={el.name} />
                )
            })}
        </div>
    );
});

export default ChangeDeviceList;