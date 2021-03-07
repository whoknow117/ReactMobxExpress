import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import TypeBar from "../../components/TypeBar/TypeBar";
import {observer} from "mobx-react-lite";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";
import {fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceApi";
import Pages from "../../components/Pages/Pages";


const Shop = observer(() => {

    let {device} = useContext(Context)


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 2).then(data =>{
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])


    useEffect(() => {
         fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
             device.setDevices(data.rows)
             device.setTotalCount(data.count)
         })
    },[ device.page,device.selectedType, device.selectedBrand])


    return (

        <Container>
            <Row>
                <Col className="mt-2" md={2}>
                    <TypeBar/>
                </Col>
                <Col className="mt-2" md={10}>
                    <BrandBar/>

                    <DeviceList/>
                    <Pages/>
                </Col>

            </Row>
        </Container>


    );
});

export default Shop;