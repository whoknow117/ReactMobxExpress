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
import {fetchInfoDescription} from "../../http/categoryInfoApi";

const SubCategoryPage = observer(() => {

    const {device} = useContext(Context)
    const {typeId} = useParams()


    useEffect(() => {

        fetchInfosTypeKey(typeId).then(data => {

            device.setInfo(data)

        })

        fetchInfoDescription(typeId, null, null).then(data => {
            device.setInfoDescription(data)

        })
        fetchDevices(typeId, null, null, device.page, device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)

        })
    }, [typeId, device.selectedType, typeId, device.selectedType.id, device.value])


    let descrArr = JSON.stringify(device.infoDescription)




    // let filteredArr = (arr,value  )=>{
    //     const cash = {}
    //     const filtered = []
    //     arr.forEach(el => {
    //         if(  === value  ) {
    //             filtered.push(el)
    //         }
    //     } )
    //
    //     return filtered
    // }


    // let newArr = filteredArr(device.infoDescription, "Цвет" )


    // console.log(JSON.stringify(device.infoDescription) )



    //
    // const filt = (arr) => {
    //     const cash = {}
    //     const filtered = []
    //     arr.forEach(el =>{
    //         if(!cash[el.title]) {
    //              filtered.push(el)
    //         }
    //     })
    //     return filtered
    // }
    //  let res = JSON.stringify(filt(device.infoDescription))
    // console.log(res)

    // const filter = (arr, value) => {
    //    return arr.filter(el => el.title === value)
    // }
    // let fill = filter(device.infoDescription, "Цвет")
    // console.log(filter )

    const filter = (arr) => {
        const cash = {}
        const filtered = []
        arr.forEach((el, idx) => {
            if (!cash[el.title]) {
                cash[el.title] = el;
                filtered.push(el)
            }
        })
        return filtered
    }

    let newArr = filter(device.infoDescription)


    let strValue = JSON.stringify(device.value)



    console.log(strValue)

    let filteredArr = (arr,value )=>{
        return arr.filter( el => el.title === value)
    }

    let newArray = filteredArr(device.infoDescription,"Китай")
    let mapArr = newArray.map(el => el.deviceId)
    //
    // console.log( mapArr )

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
                {/*<Filter  />*/}
                <Col md={3}>

                    {device.info.map(i => {
                        return <div className={classes.wrapp}>
                            <div className={classes.title}>
                                {i.title}
                            </div>
                            <div className={classes.description}>
                                {newArr.map(el => el.deviceInfoId === i.id ?
                                    <div
                                        key={el.id}
                                        onClick={() => device.setValue(el.deviceId)}
                                    >{el.title}


                                    </div> : "")}
                            </div>

                        </div>
                    })}
                </Col>

            </Row>
        </div>
    );
});

export default SubCategoryPage;








