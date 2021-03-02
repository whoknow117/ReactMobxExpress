import React, {useContext} from 'react';
import {Context} from "../../index";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import TypeBar from "../../components/TypeBar/TypeBar";
import {observer} from "mobx-react-lite";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";



const Shop = observer(() => {

    let {device} = useContext(Context)


    return (

            <Container>
                <Row>
                    <Col className="mt-2" md={3}>
                        <TypeBar/>
                    </Col>
                    <Col className="mt-2" md={8}>
                        <BrandBar/>

                        <DeviceList/>
                    </Col>
                </Row>
            </Container>


    );
});

export default Shop;