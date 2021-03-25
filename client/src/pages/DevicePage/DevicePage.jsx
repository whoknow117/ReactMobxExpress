import React, {useEffect, useState} from 'react';
import classes from './DevicePage.module.scss';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchDevice} from "../../http/deviceApi";
import TypeBar from "../../components/TypeBar/TypeBar";

const DevicePage  = () => {

    const [device, setDevice] = useState([])
    const {id} = useParams()

    useEffect( () => {

        fetchDevice(id).then(data => setDevice(data))
    },[device.searchDevice])

    return (
        <Container className="mt-3  ">
            {device.activeBar ?
                <div className={classes.categoryBar}>
                    <TypeBar/>
                </div> : ""}
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

            </Row>
        </Container>
    );
};

export default DevicePage;