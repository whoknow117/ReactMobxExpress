import React, {useContext, useEffect, useState} from 'react';
import classes from './FavoriteButton.module.scss';


import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import Heart from "../../../../assets/Heart/Heart";
import {updateAllDevice} from "../../../../http/deviceApi";
import {stringify} from "uuid";

const FavoriteButton = observer(({favorite,fArray}) => {


    let testArray = [{"article": 432123, "price": 2134, "quantity":14},
        {"article": 231555, "price": 1134, "quantity":44},
        {"article": 2315111, "price": 2131, "quantity":1134},]
    console.log(testArray)
    const {device} = useContext(Context);

    const [favor, setFavor] = useState([])

    useEffect(() => {

        let updatedFavorite = localStorage.getItem('favorite')

        if (updatedFavorite) {
            device.setStorageFavorite(JSON.parse(updatedFavorite))
        }

    }, [device.favorite])






    const addFavorite = () => {
        let updatedFavorite =[]
            if(device.storageFavorite) {
            updatedFavorite = [...device.storageFavorite, {...favorite}]
        }


            if(updatedFavorite){
                device.setFavorite(updatedFavorite)
                let newFavorite = JSON.stringify(device.favorite)
                let parseFavorite = JSON.parse(newFavorite)
                localStorage.setItem('favorite', JSON.stringify(parseFavorite))
            }


    }


    return (

        // сравнива id если есть в массиве в локале обьект с таким айди то дизейблим , но нихера не дизейблит :D disabled={uB.some( el =>  el.id === product.id)}
        <button disabled={device.storageFavorite.some(el => el.id === favorite.id)} className={classes.btn}

                onClick={addFavorite}
        >
            <Heart/>
        </button>
    );
});

export default FavoriteButton;