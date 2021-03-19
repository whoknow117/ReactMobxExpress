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
    }, [ typeId, device.selectedType, typeId, device.selectedType.id, device.value])

    let descrArr = JSON.stringify(device.infoDescription)

    const filters = (arr) => {
        const cash = {}
        const filtered = []
        arr.forEach( el => {
            if(!cash[el.title]){
                filtered.push(el)
            }
        })
        return filtered
    }

    let filteredArray;









const [value,setValue] = useState("")



useEffect(()=> {


    let strValue = value
    let filteredArr = (arr,value )=>{
        return arr.filter( el => el.title === value)
    }
    console.log(strValue)
    let newArray = filteredArr(device.infoDescription, strValue ).map(el =>{

        return el.deviceId
    } )
    // const filter = (arr) => {
    //     const cash = {}
    //     const filtered = []
    //     arr.forEach((el, idx) => {
    //         if (!cash[el.title]) {
    //             cash[el.title] = el;
    //             filtered.push(el)
    //         }
    //     })
    //     return filtered
    // }
    //
    // let newArr = filter(device.infoDescription)

    console.log(newArray)
    console.log(JSON.stringify(newArr))
}, [value])


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
                                        onClick={() => setValue(el.title)}
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








