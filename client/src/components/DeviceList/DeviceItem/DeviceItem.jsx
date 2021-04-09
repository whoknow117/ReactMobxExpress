import React, {useEffect, useState} from 'react';
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
import {login} from "../../../http/userApi";

const DeviceItem = observer(({dev, addProduct}) => {

    const history = useHistory()
    const {id} = useParams()


    const [value, setValue] = useState(4);
    let [ image, setImage] = useState([])

    let img = JSON.stringify(dev.img)
    console.log(dev.img)

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

    console.log(JSON.parse(dev.img))
    let imgs = JSON.parse(dev.img)

    return (
        <div className={classes.wrapper}>

            <Image onClick={() => history.push(DEVICE_ROUTE + '/' + dev.id)} className={classes.image}
                   src={process.env.REACT_APP_API_URL +  imgs[1] }/>
            <div className="text-black-50"> </div>

            <div className={classes.productInfo}>
                <h3 className={classes.productName}>
                    {dev.name}
                </h3>

                <Rating onClick={setValue} value={value}/>
                <FavoriteButton fArray={fArray} favorite={dev}/>
               <div className={classes.wrapperPriceBlock}>
                    <span className={classes.price}>
                         {dev.price}

                        <span className={classes.units}>
₴
                       {/*{*/}
                       {/*    sets(dev.unitId)*/}
                       {/*}*/}
                   </span>
                    </span>
                   <BasketButton product={dev}/>
               </div>

                <div className={classes.available}>
                    <span className={classes.isAvailable}>В наличии:</span>
                    <span className={classes.quantity}>{dev.quantity}{
                        sets(dev.unitId)
                    }  </span>
                </div>
                <div className={classes.articleWrapper}>
                    <span className={classes.articleName}>артикул:</span>
                    <span className={classes.article}>{dev.article} </span>
                </div>

            </div>


        </div>
    );
});

export default DeviceItem;