import React, {useContext} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem/DeviceItem";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const   DeviceList = observer(() => {

    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            <Col className="mt-2" md={10}>
                {device.devices.map(dev =>
                    <DeviceItem
                        key={dev.id}
                        dev={dev}

                    />

                )}
            </Col>
            <Col className="mt-2" md={2}>
                <Row>
                    <Card
                        style={{border: '1px solid silver',width: '100%',height: '100vh'}}>


                    </Card>
                </Row>
            </Col>
        </Row>
    );
});

export default DeviceList;