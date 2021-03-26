import React, {useContext, useEffect} from 'react';
import {Context} from "../../../../index";
import {deleteDescription, fetchInfoDescription} from "../../../../http/categoryInfoApi";
import {deleteDevice} from "../../../../http/deviceApi";

const ChangeProductItem = ({name,id}) => {

    const {device} = useContext(Context)
    useEffect(() => {

        fetchInfoDescription(null,null,null).then(data => device.setInfoDescription(data))
    },[])

    const removeCallback = (productId) => {deleteDevice(productId).then(data => device.setDevices(data))}
    const removeDescription = () => {
        deleteDescription(id).then( data => device.setInfoDescription(data))
    }

    return (

            <div>

                <div>{name}</div>
                <button onClick={()=> removeCallback(id) }>X</button>
                {/*{device.infoDescription.map( el => el.deviceId === id ? <div>{el.title}*/}


                {/*</div> : ""  )}*/}
                <button onClick={removeDescription}>X</button>
            </div>








    );
};

export default ChangeProductItem;