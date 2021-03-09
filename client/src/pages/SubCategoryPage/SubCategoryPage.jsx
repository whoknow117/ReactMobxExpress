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

        fetchInfosTypeKey(+typeId ).then(data => {device.setInfo(data)

        })
        fetchDevices(device.selectedType.id, null,  null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    },  [device.selectedType, typeId])


    let infos = JSON.stringify(device.info)
    let infosParse = JSON.parse(infos)





    let newArr = []
    function notEqual (array){

        for(let i = 0; i < array.length; i ++)
        {
            if(array[i].title === array[i++].title ){
                newArr.push(array[i])
            }
        }
        return newArr
    }

    const clearFilter = notEqual(infosParse)


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

                    {clearFilter.map((el,idx) => {
                        // console.log(infosParse[idx].title)


                        if(infosParse[idx].title) {
                            return <div key={el.id}>{el.title}</div>
                        }
                        else {
                            return ""
                        }
                    })}

                    {/*{infosParse.filter( (info,idx) => info.typeId === device.selectedType.id && info[idx].title === info[idx + 1].title)*/}
                    {/*    .map( el => <div>{el.title}</div>)}*/}
                </Col>
             </Row>
         </Container>
    );
});

export default SubCategoryPage;