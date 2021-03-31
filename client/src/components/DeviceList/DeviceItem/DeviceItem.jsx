import React from 'react';
import classes from './DeviceItem.module.scss';
import {Card, Col, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory, useParams} from "react-router-dom";
import {DEVICE_ROUTE} from "../../../utils/consts";
import Heart from "../../../assets/Heart/Heart";
import BasketButton from "../../BasketButton/BasketButton";

const DeviceItem = observer(({dev}) => {

    const history = useHistory()
    const {id} = useParams()
    const sets = (id) => {
        if(id === 1) {
            return <div>шт</div>
        }
        if(id === 2) {
            return <div>м\п</div>
        }
        if(id === 3) {
            return <div>кг</div>
        }
        return
    }

    return (
        <div md={3} className={classes.wrapper} onClick={() => history.push(DEVICE_ROUTE + '/' + dev.id)}>
            <Card className={classes.card}>
                <Image className={classes.image} src={process.env.REACT_APP_API_URL + dev.img}/>
                <div className="text-black-50">Samsung</div>
                <div>
                    <div>{dev.rating}</div>
                </div>
                <div>
                    <div>

                        {dev.name}
                    </div>
                    <span>
                        price: {dev.price}
                        {
                       sets(dev.unitId)
                        }
                    </span>
                    <span className={classes.heart}>
                        <Heart/>
                    </span>
                    <BasketButton/>
                </div>

            </Card>
        </div>
    );
});

export default DeviceItem;