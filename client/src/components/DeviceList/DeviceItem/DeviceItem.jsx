import React, {useState} from 'react';
import classes from './DeviceItem.module.scss';
import {Card, Col, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory, useParams} from "react-router-dom";
import {DEVICE_ROUTE} from "../../../utils/consts";
import Heart from "../../../assets/Heart/Heart";
import BasketButton from "../../BasketButton/BasketButton";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import Rating from "../../Rating/Rating";
import Star from "../../Rating/Star/Star";
import StarIcon from "../../../assets/StarIcon/StarIcon";

const DeviceItem = observer(({dev, addProduct}) => {

    const history = useHistory()
    const {id} = useParams()

    const [value, setValue] = useState(5);

    let fArray = []
    const sets = (id) => {
        if (id === 1) {
            return <div>шт</div>
        }
        if (id === 2) {
            return <div>м\п</div>
        }
        if (id === 3) {
            return <div>кг</div>
        }
        return
    }

    return (
        <div className={classes.wrapper}>

            <Image onClick={() => history.push(DEVICE_ROUTE + '/' + dev.id)} className={classes.image}
                   src={process.env.REACT_APP_API_URL + dev.img}/>
            <div className="text-black-50">{dev.brandId}</div>

            <div className={classes.productInfo}>
                <h3 className={classes.productName}>
                    {dev.name}
                </h3>


                <FavoriteButton fArray={fArray} favorite={dev}/>
               <div className={classes.wrapperPriceBlock}>
                    <span className={classes.price}>
                         {dev.price}

                        <span className={classes.units}>

                       {
                           sets(dev.unitId)
                       }
                   </span>
                    </span>
                   <BasketButton product={dev}/>
               </div>
                <div className={classes.rating}>
                <Rating onClick={setValue} value={value}/>
                </div>

            </div>


        </div>
    );
});

export default DeviceItem;