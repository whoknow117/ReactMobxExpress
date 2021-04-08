import React, {useContext, useEffect, useState} from 'react';
import classes from './Favorites.module.scss';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/consts";



const Favorites = observer(() => {
    const {device} = useContext(Context)
    const [storFavorite, setStorFavorite] = useState([])
    const [favoriteCount, setFavoriteCount] = useState(null)

    const [click,setClick] = useState(false)

    const history = useHistory()



    useEffect(() => {
        setFavoriteCount(device.storageFavorite.length)
        let favoriteStore =  localStorage.getItem('favorite')
        let favoriteCounts =  JSON.parse(localStorage.getItem('favoriteCounter'))

        setFavoriteCount(favoriteCounts)



        if (favoriteStore) {
            setStorFavorite(JSON.parse(favoriteStore))





        }


    }, [     ])

    const removeAllFavorite = () => {
        setClick(!click)
        localStorage.removeItem('favoriteCounter')
        localStorage.removeItem('favorite')

        history.push(SHOP_ROUTE)
    }

    return (
        <div className={classes.container}>
            <button onClick={removeAllFavorite} >del</button>
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