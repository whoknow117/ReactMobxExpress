import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem/DeviceItem";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const DeviceList = observer(() => {

    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.devices.map(dev =>
                <DeviceItem
                key={dev.id}
                dev={dev}

                />

            )}
        </Row>
    );
});

export default DeviceList;