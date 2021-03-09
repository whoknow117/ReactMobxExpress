import React, {useContext, useEffect} from 'react';
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

const SubCategoryPage = observer(() => {

    const {device} = useContext(Context)


    const {typeId} = useParams()


    useEffect(() => {

        fetchInfosTypeKey(+typeId).then(data => {
            device.setInfo(data)

        })
        fetchDevices(device.selectedType.id, null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.selectedType, typeId])


    let infos = JSON.stringify(device.info)
    let infosParse = JSON.parse(infos)


    let newArr = []

    function notEqual(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].title === array[i++].title) {
                newArr.push(array[i])
            }
        }
        return newArr
    }

    let clearFilter = notEqual(infosParse)

    let descriptionArr = []

    function descriptionArray(arr) {
        arr.sort((prev, next) => {
            if (prev.title < next.title) return -1;
            if (prev.title > next.title) return 1;
        })
        return arr.reverse()
    }


    const newDescriptionArray = descriptionArray(infosParse)

    let description = []

    const filterDescription = (descr) => {
        for (let i = 0; i < descr.length; i++) {
            if (descr[i].description) {
                description.push(descr[i])

            }

        }
        return description


    }

    const filteredDescription = filterDescription(newDescriptionArray)


    const newFilterArr = []
    const newFilterArrActive = []

    const filterArr = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].description === arr[i++].description) {
                newFilterArr.push(arr[i])
            } else if (arr[i].description !== arr[i++].description) {
            }
            newFilterArr.push(arr[i])
        }
        return newFilterArrActive
    }


    let newRes = filterArr(filteredDescription)


    const res = filteredDescription.reduce((acc, item) => {


        if (acc[item.title]) {
            acc[item.title] = [...acc[item.title], item];
        } else {
            acc[item.title] = [item];

        }
        return acc;
    }, {});


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

                    <div>
                        {clearFilter.map((el, idx) => {


                            if (el) {
                                return <div key={el.id}>
                                    {
                                        el.title}
                                    <div className={classes.description}>
                                        {res[el.title].map((el, idx) => <div key={el.id}>{el.description}</div>)}
                                    </div>
                                </div>
                            } else {
                                return ""
                            }
                        })}
                    </div>


                </Col>
            </Row>
        </Container>
    );
});

export default SubCategoryPage;