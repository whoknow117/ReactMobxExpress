import React, {useContext, useEffect} from 'react';
import classes from './SubCategoryPage.module.scss'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchBrands, fetchCategories, fetchDevices, fetchTypes} from "../../http/deviceApi";
import {Col, Container, Row} from "react-bootstrap";
import DeviceItem from "../../components/DeviceList/DeviceItem/DeviceItem";

const SubCategoryPage = observer(() => {

    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchCategories().then(data => device.setCategories(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(device.selectedType.id, null,  null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.selectedType])



    return (
         <Container>
             <Row className={classes.itemBar}>
                 <Col md={9} className={classes.devices}>
                     {device.devices.map(dev =>
                         <DeviceItem
                             key={dev.id}
                             dev={dev}

                         />

                     )}
                 </Col>
                <Col className={classes.filter} md={3}>

                </Col>
             </Row>
         </Container>
    );
});

export default SubCategoryPage;