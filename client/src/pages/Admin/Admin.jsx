import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../../components/modals/CreateType";
import CreateBrand from "../../components/modals/CreateBrand";
import CreateDevice from "../../components/modals/CreateDevice";

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(true);
    const [typeVisible, setTypeVisible] = useState(true);
    const [deviceDevice, setDeviceVisible] = useState(true);

    const onHideType = () => {setTypeVisible(false)}
    const onHideBrand = () => {setBrandVisible(false)}
    const onHideDevice = () => {setDeviceVisible(false)}

    const showTypeModal = () => setTypeVisible(true)
    const showBrandModal = () => setBrandVisible(true)
    const showDeviceModal = () => setDeviceVisible(true)

    return (
        <Container className="d-flex flex-column">
            <Button onClick={showTypeModal}   className="mt-2">Добавить тип</Button>
            <Button onClick={showBrandModal} className="mt-2">Добавить бренд</Button>
            <Button onClick={showDeviceModal} className="mt-2">Добавить товар</Button>
            <CreateType show={typeVisible} onHide={onHideType}/>
            <CreateBrand show={brandVisible} onHide={onHideBrand}/>
            <CreateDevice show={deviceDevice} onHide={onHideDevice}/>
        </Container>
    );
};

export default Admin;