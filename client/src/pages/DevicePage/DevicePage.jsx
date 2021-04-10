import React, {useContext, useEffect, useState} from 'react';
import classes from './DevicePage.module.scss';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchDevice, fetchDevices} from "../../http/deviceApi";
import TypeBar from "../../components/TypeBar/TypeBar";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const DevicePage  = observer(() => {

    const [device, setDevice] = useState([])

    // const {device} = useContext(Context);

    const {id} = useParams()

    useEffect( () => {

        fetchDevice(id).then(data => setDevice(data))
    },[id ])
    // useEffect( () => {
    //     console.log(JSON.stringify(device.device))
    //     fetchDevice(id).then(data => device.setDevice(data))
    // },[device.searchDevice,    ])

    let images = device.img
    let img = JSON.parse(images)
    console.log(img)
    return (
        <Container className="mt-3  ">

            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL +  img[1]}/>
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{ device.name}</h2>
                    <div className="d-flex align-items-center justify-content-center">
                        { device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card>
                    <h3>{ device.price}</h3>
                    <button>Добавить в корзину</button>
                </Card>
            </Col>

            </Row>
            <Row className="d-flex flex-column text-sm-left">
                <h2>Характеристики</h2>

            </Row>
        </Container>
    );
});

export default DevicePage;