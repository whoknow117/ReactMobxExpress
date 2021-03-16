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
            console.log(data)
            device.setInfo(data)

        })
        fetchDevices(typeId, null, null, 1, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.selectedType, typeId])


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

                                    </div>





                </Col>
            </Row>
        </Container>
    );
});

export default SubCategoryPage;








// const filter = (arr) => {
//     const cash = {}
//     const filtered = []
//     arr.forEach(el => {
//         if(!cash[el.description]) {
//             cash[el.description] = el;
//             filtered.push(el)
//         }
//     })
//     return filtered
// }