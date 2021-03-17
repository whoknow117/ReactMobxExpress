import React, {useContext} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem/DeviceItem";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import classes from './DeviceList.module.scss';

const DeviceList = observer(() => {

    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            <Col className={classes.devices} md={12}>
                {device.devices.map(dev =>
                    <DeviceItem
                        key={dev.id}
                        dev={dev}

                    />

                )}
            </Col>

        </Row>
    );
});

export default DeviceList;