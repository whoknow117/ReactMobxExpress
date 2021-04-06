import React, {useContext, useEffect, useState} from 'react';
import classes from './Favorites.module.scss';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchBrands, fetchCategories, fetchDevices, fetchTypes} from "../../http/deviceApi";


const Favorites = observer(() => {
    const {device} = useContext(Context)
    const [storFavorite, setStorFavorite] = useState([])
    const [favoriteCount, setFavoriteCount] = useState(null)


    useEffect(() => {
        setFavoriteCount(device.storageFavorite.length)
        let favoriteStore = JSON.parse(localStorage.getItem('favorite'))
        setStorFavorite(favoriteStore)




    }, [ favoriteCount,device.storageFavorite,device.cartCounter, device.sum, device.storageCart ])
    console.log(JSON.stringify(device.storageFavorite)  )

    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.favoriteTitle}>Избранное</h1>
                <div className={classes.favoriteBlock}>
                    {storFavorite.map(el => {
                        return (
                            <div className={classes.favoriteItem}>
                                <div className={classes.image}>
                                    <img src={process.env.REACT_APP_API_URL + el.img} alt=""/>
                                </div>
                                <h1>{el.name}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
});

export default Favorites;