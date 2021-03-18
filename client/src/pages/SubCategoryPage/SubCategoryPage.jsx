import React, {useContext, useEffect, useState} from 'react';
import classes from './SubCategoryPage.module.scss'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {

    fetchDevices,
    fetchInfosTypeKey,

} from "../../http/deviceApi";
import {Col, Container, Row} from "react-bootstrap";
import DeviceItem from "../../components/DeviceList/DeviceItem/DeviceItem";
import {useParams} from "react-router-dom";
import {v1} from "uuid";
import Filter from "./Filter/Filter";

const SubCategoryPage = observer(() => {

    const {device} = useContext(Context)
    const {typeId} = useParams()



    console.log(typeId)

    useEffect(() => {

        fetchInfosTypeKey(typeId).then(data => {

            device.setInfo(data)

        })
        fetchDevices(typeId, null, null,device.page, device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)

        })
    }, [ ])

    useEffect(() => {

        fetchInfosTypeKey(typeId).then(data => {

            device.setInfo(data)

        })
        fetchDevices(typeId, null, null,device.page, device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)

        })
    }, [typeId,device.selectedType, typeId,device.selectedType.id ])

    console.log(JSON.stringify(device.devices))


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
                {/*<Filter setDeviceType={setProductType} setColor={setColor} setPower={setPower}/>*/}

                            </Row>
                            </div>
                            );
                        });

                        export default SubCategoryPage;








