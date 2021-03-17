import React, {useContext, useEffect, useState} from 'react';
import classes from './SubCategoryPage.module.scss'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {
    fetchBrands,
    fetchCategories,
    fetchDevices,

    fetchInfosTypeKey,
    fetchTypes
} from "../../http/deviceApi";
import {Col, Container, Row} from "react-bootstrap";
import DeviceItem from "../../components/DeviceList/DeviceItem/DeviceItem";
import {useParams} from "react-router-dom";
import {v1} from "uuid";
import Filter from "./Filter/Filter";

const SubCategoryPage = observer(() => {

    const {device} = useContext(Context)
    const {typeId} = useParams()
    const [color, setColor] = useState('')
    const [power, setPower] = useState('')
    const [productType, setProductType] = useState('')

    console.log(productType)

    // const filterTitleDescription = () => {
    //     return device.devices.map(el => el.color)
    // }
    // const filteredPower = () => {
    //     return device.devices.map(el => el.power)
    // }
    //
    // const fP = filteredPower()
    // const fD = filterTitleDescription()
    //
    //
    // const filterPower = (arr) => {
    //     const cash = {}
    //     const filtered = []
    //     arr.forEach(el => {
    //         if (!cash[el]) {
    //             cash[el] = el;
    //             filtered.push(el)
    //         }
    //     })
    //     return filtered
    // }
    //
    // const filter = (arr) => {
    //     const cash = {}
    //     const filtered = []
    //     arr.forEach(el => {
    //         if (!cash[el]) {
    //             cash[el] = el;
    //             filtered.push(el)
    //         }
    //     })
    //     return filtered
    // }
    //
    // const filt = filter(filterTitleDescription())
    // const pow = filterPower(filteredPower())


    useEffect(() => {

        fetchInfosTypeKey( typeId).then(data => {

            device.setInfo(data)

        })
        fetchDevices(typeId, null, null, color, power, productType,1, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.selectedType, typeId,color,power,productType])




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
                <Filter setDeviceType={setProductType} setColor={setColor} setPower={setPower}/>

                            </Row>
                            </Container>
                            );
                        });

                        export default SubCategoryPage;








