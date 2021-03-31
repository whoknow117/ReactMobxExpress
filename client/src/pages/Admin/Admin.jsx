import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../../components/modals/CreateType";
import CreateBrand from "../../components/modals/CreateBrand";
import CreateDevice from "../../components/modals/CreateDevice";
import CreateInfo from "../../components/modals/CreateInfo";
import ChangeDeviceList from "../../components/modals/ChangeDeviceList/ChangeDeviceList";
import {fetchBrands, fetchCategories, fetchDevice, fetchDevices, fetchTypes} from "../../http/deviceApi";
import {Context} from "../../index";
import UpdateProduct from "../../components/modals/UpdateProduct";
import classes from './Admin.module.scss';

const Admin = () => {

    const {device} = useContext(Context)


    useEffect(() => {

        fetchDevices(null, null, null, null, null, device.page, device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)

        })
    }, [device.selectedDevice])





    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceDevice, setDeviceVisible] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);
    const [updated, setUpdated] = useState(false);

    const onHideType = () => {
        setTypeVisible(false)
    }
    const onHideBrand = () => {
        setBrandVisible(false)
    }
    const onHideDevice = () => {
        setDeviceVisible(false)
    }
    const onHideVisible = () => {
        setInfoVisible(false)
    }
    const onHideUpdated = () => {
        setUpdated(false)
    }


    const showTypeModal = () => setTypeVisible(true)
    const showBrandModal = () => setBrandVisible(true)
    const showDeviceModal = () => setDeviceVisible(true)
    const showInfoModal = () => setInfoVisible(true)
    const showUpdated = () => setUpdated(true)


    return (
        <div className={classes.container}>
            <Button onClick={showTypeModal} className="mt-2">Добавить тип</Button>
            <Button onClick={showBrandModal} className="mt-2">Добавить бренд</Button>
            <Button onClick={showDeviceModal} className="mt-2">Добавить товар</Button>
            <Button onClick={showInfoModal} className="mt-2">Добавить Характеристику</Button>
            <Button onClick={showUpdated} className="mt-2">Обновить товар</Button>
            <CreateType show={typeVisible} onHide={onHideType}/>
            <CreateBrand show={brandVisible} onHide={onHideBrand}/>
            <CreateInfo show={infoVisible} onHide={onHideVisible}/>
            <CreateDevice show={deviceDevice} onHide={onHideDevice}/>
            <UpdateProduct   show={updated} onHide={onHideUpdated}/>
            <ChangeDeviceList/>
        </div>
    );
};

export default Admin;