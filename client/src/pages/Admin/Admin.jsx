import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../../components/modals/CreateType";
import CreateBrand from "../../components/modals/CreateBrand";
import CreateDevice from "../../components/modals/CreateDevice";
import CreateInfo from "../../components/modals/CreateInfo";

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceDevice, setDeviceVisible] = useState(false);
    const [infoVisible , setInfoVisible] = useState(false);

    const onHideType = () => {setTypeVisible(false)}
    const onHideBrand = () => {setBrandVisible(false)}
    const onHideDevice = () => {setDeviceVisible(false)}
    const onHideVisible = () => {setInfoVisible(false)}

    const showTypeModal = () => setTypeVisible(true)
    const showBrandModal = () => setBrandVisible(true)
    const showDeviceModal = () => setDeviceVisible(true)
    const showInfoModal = () => setInfoVisible(true)

    return (
        <Container className="d-flex flex-column">
            <Button onClick={showTypeModal}   className="mt-2">Добавить тип</Button>
            <Button onClick={showBrandModal} className="mt-2">Добавить бренд</Button>
            <Button onClick={showDeviceModal} className="mt-2">Добавить товар</Button>
            <Button onClick={showInfoModal} className="mt-2">Добавить Характеристику</Button>
            <CreateType show={typeVisible} onHide={onHideType}/>
            <CreateBrand show={brandVisible} onHide={onHideBrand}/>
            {/*<CreateInfo show={infoVisible} onHide={onHideVisible}/>*/}
            <CreateDevice show={deviceDevice} onHide={onHideDevice}/>
        </Container>
    );
};

export default Admin;