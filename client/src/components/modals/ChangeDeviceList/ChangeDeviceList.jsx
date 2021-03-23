import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {deleteDevice} from "../../../http/deviceApi";




const ChangeDeviceList = observer(() => {

    const {device} = useContext(Context)

    const removeCallback = (productId) => {deleteDevice(productId).then(data => device.setDevices(data))}

    return (
        <div>
            {device.devices.map(el =>{
                return (
                    <div key={el.id}>

                        <div>{el.name}</div>
                        <button onClick={()=> removeCallback(el.id) } >X</button>

                    </div>
                )
            })}
        </div>
    );
});

export default ChangeDeviceList;