import React, {useEffect, useState} from 'react';
import classes from './DevicePage.module.scss';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchDevice} from "../../http/deviceApi";

const DevicePage  = () => {

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect( () => {
        fetchDevice(id).then(data => setDevice(data))
    },[])

    return (
        <Container className="mt-3  ">
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{device.name}</h2>
                    <div className="d-flex align-items-center justify-content-center">
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card>
                    <h3>{device.price}</h3>
                    <button>Добавить в корзину</button>
                </Card>
            </Col>

            </Row>
            <Row className="d-flex flex-column text-sm-left">
                <h2>Характеристики</h2>
                {device.info.map((info,index) =>
                    <Row
                        key={info.id}
                        style={{background: index%2 === 0 ? '#f3f3f3' : '#fff'}}

                    >
                        {info.title} : {info.description}

                    </Row>

                )}
            </Row>
        </Container>
    );
};

export default DevicePage;