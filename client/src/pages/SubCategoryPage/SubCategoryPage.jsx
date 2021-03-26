import React, {useContext, useEffect, useState} from 'react';
import classes from './SubCategoryPage.module.scss'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {
    fetchBrands, fetchCategories,
    fetchDevices,
    fetchInfosTypeKey,

} from "../../http/deviceApi";
import {Col, Row} from "react-bootstrap";
import DeviceItem from "../../components/DeviceList/DeviceItem/DeviceItem";
import {useParams} from "react-router-dom";

import {fetchInfoDescription} from "../../http/categoryInfoApi";
import TypeBar from "../../components/TypeBar/TypeBar";


const SubCategoryPage = observer(() => {

    const {device} = useContext(Context)
    const {typeId} = useParams()
    const [value,setValue] = useState("")
    const [idValue,setIdValue] = useState([])



    useEffect(() => {
        const strIdValue = JSON.stringify(idValue)

        fetchInfosTypeKey(typeId).then(data => {

            device.setInfo(data)

        })

        fetchInfoDescription(typeId, null, null).then(data => {
            device.setInfoDescription(data)

        })

        fetchCategories().then(data => device.setCategories(data))

        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(typeId, null, null, strIdValue,null,  device.page,device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)

        })
    }, [ device.selectedType.id, idValue, device.selectedCategory,typeId ,device.selectedType.id])







useEffect(()=> {
    console.log(device.value)
    let strValue = device.value
    let filteredArr = (arr,value  )=> {return arr.filter( el => el.title === value)

    }

    let newArray = filteredArr(device.infoDescription, strValue).map(el => el.deviceId)




    setIdValue(newArray)
    console.log(JSON.stringify(newArray ))
}, [device.value])


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
                                        onClick={() => device.setValue(el.title)}
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








