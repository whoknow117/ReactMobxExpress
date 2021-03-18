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





    useEffect(() => {

        fetchInfosTypeKey( typeId).then(data => {

            device.setInfo(data)

        })
        fetchDevices(typeId, null, null, color, power, productType,device.page, device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
            device.setSelectedType(device.selectedType)
        })
    }, [device.selectedType, typeId,color,power,productType])




    return (
        <div className={classes.container}>
            <Row className={classes.itemBar}>
                <Col md={9} className={classes.devices}>
                   <div className={classes.separate}>
                       <div className={classes.itemCount}>
                           <div className={classes.name}> {device.selectedType.name}</div>
                           <div>{device.totalCount}</div>
                       </div>
                           <div className={classes.itemWrapper}>
                           {device.devices.map(dev =>
                               <DeviceItem
                                   key={dev.id}
                                   dev={dev}

                               />
                           )}
                       </div>
                   </div>
                </Col>
                <Filter setDeviceType={setProductType} setColor={setColor} setPower={setPower}/>

                            </Row>
                            </div>
                            );
                        });

                        export default SubCategoryPage;








