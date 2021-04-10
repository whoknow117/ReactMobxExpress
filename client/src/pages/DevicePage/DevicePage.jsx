import React, {  useEffect, useState} from 'react';

import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchDevice } from "../../http/deviceApi";


import {observer} from "mobx-react-lite";

const DevicePage  = observer(() => {

    const [device, setDevice] = useState({img: '[]'})
    const {id} = useParams()



    useEffect( () => {

        fetchDevice(id).then(data => setDevice(data))
    },[id])


    let images = device.img
    let img = JSON.parse(images)
    console.log(img)
    return (
        <Container className="mt-3  ">

            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + img[0]  }/>
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{ device.name}</h2>
                    <div className="d-flex align-items-center justify-content-center">

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