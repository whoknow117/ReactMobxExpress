import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import TypeBar from "../../components/TypeBar/TypeBar";
import {observer} from "mobx-react-lite";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";
import {fetchBrands, fetchCategories, fetchDevices, fetchTypes} from "../../http/deviceApi";
import Pages from "../../components/Pages/Pages";
import classes from './Shop.module.scss';
import Slider from "./Slider/Slider";
import k1 from '../../assets/right.jpg'
import BestCategory from "../../components/BestCategory/BestCategory";


const Shop = observer(() => {

    let {device} = useContext(Context)


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchCategories().then(data => device.setCategories(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, device.selectedBrand.id, null, null, null, device.page, device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedCategory, device.selectedBrand])


    return (

        <div className={classes.container}>
            <Row className={classes.row}>


                <div className={classes.wrapper}>
                    <Slider/>
                    <div className={classes.propositions}>
                        <img src={k1} alt=""/>
                    </div>
                </div>
                <Col className="mt-2">

                    <BestCategory/>

                    <BrandBar/>

                    <DeviceList  />
                    <Pages/>
                </Col>

            </Row>
        </div>


    );
});

export default Shop;