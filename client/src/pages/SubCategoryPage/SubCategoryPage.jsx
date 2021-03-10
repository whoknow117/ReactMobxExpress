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

    function descriptionArray(arr) {
        arr.sort((prev, next) => {
            if (prev.title < next.title) return -1;
            if (prev.title > next.title) return 1;
        })
        return arr.reverse()
    }


    const newDescriptionArray = descriptionArray(infosParse)
    console.log(newDescriptionArray)

    const newArray1 = []
    const newArray2 = []

    for (let i = 0; i < newDescriptionArray.length; i++) {
        if (newDescriptionArray[i].description === newDescriptionArray[i++].description) {
            newArray1.push(newDescriptionArray[i])
        } else {
            newArray2.push(newDescriptionArray[i])
        }
    }
    // console.log(newArray1)

    let newArray = newDescriptionArray.reduce((acc, item) => {
        if (acc[item.description]) {
            acc[item.description] = [...acc[item.description]]
        } else {
            acc[item.description] = [item]
        }
        return acc

    }, {})


    // let oKNewArray = Object.keys(newArray)

    // console.log(newArray)

    // const newArray1=[]
    // const newArray2=[]
    // let firstItem = filteredDescription[0]
    //
    // for (let i = 0; i < filteredDescription.length; i++){
    //     if( firstItem !== filteredDescription[i++].description){
    //         newArray1.push(filteredDescription[i])
    //
    //     } else {
    //        console.log('what')
    //     }
    // }
    // console.log(newArray1)


    const res = newDescriptionArray.reduce((acc, item) => {


        if (acc[item.title]) {
            acc[item.title] = [...acc[item.title], item];
        } else {
            acc[item.title] = [item];

        }
        return acc;
    }, {});
    console.log('res', res)


    let resultArr = {
        'цвет': 'green',
        'q': '111',
    }

    window.resultArr = resultArr


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

                                        {
                                            res[el.title].map((el) => {
                                                return <div>{el.description}</div>
                                            })
                                        }

                                        {/*{

                                            res[el.title].forEach((el, idx, array) => {
                                                debugger

                                                resultArr[el.title] = el.description

                                                // for (let i = 0; i < res[el.title].length; i ++){
                                                //     resultArr.push(el.description)
                                                //
                                                //      12if(el.description === resultArr[0]){
                                                //         return
                                                //     } else {
                                                //         resultArr.push([el.description])
                                                //     }
                                                // }

                                            })
                                        }*/}
                                        {/*{*/}
                                        {/*    res[el.title].filter((el) => {*/}
                                        {/*        debugger*/}
                                        {/*        return el.description !== resultArr[el.title]*/}
                                        {/*    })*/}
                                        {/*}*/}

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