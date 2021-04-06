import React from 'react';
import classes from './DeviceItem.module.scss';
import {Card, Col, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory, useParams} from "react-router-dom";
import {DEVICE_ROUTE} from "../../../utils/consts";
import Heart from "../../../assets/Heart/Heart";
import BasketButton from "../../BasketButton/BasketButton";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

const DeviceItem = observer(({dev,addProduct}) => {

    const history = useHistory()
    const {id} = useParams()
    let fArray = []
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
        <div md={3} className={classes.wrapper} >
            <Card  className={classes.card}>
                <Image  onClick={() => history.push(DEVICE_ROUTE + '/' + dev.id)} className={classes.image} src={process.env.REACT_APP_API_URL + dev.img}/>
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
                    {/*<span className={classes.heart}>*/}
                    {/*   */}
                    {/*</span>*/}
                    <FavoriteButton fArray={fArray} favorite={dev}/>

                    <BasketButton  product={dev}/>
                </div>

            </Card>
        </div>
    );
});

export default DeviceItem;