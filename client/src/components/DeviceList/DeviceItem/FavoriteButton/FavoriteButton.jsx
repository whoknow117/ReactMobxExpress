import React, {useContext, useEffect, useState} from 'react';
import classes from './FavoriteButton.module.scss';


import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import Heart from "../../../../assets/Heart/Heart";

const FavoriteButton = observer(({favorite,fArray}) => {


    const {device} = useContext(Context);

    const [favor, setFavor] = useState([])
    const [favoritItem, setFavoritItem] = useState([])
    useEffect(() => {

        let updatedFavorite = localStorage.getItem('favorite')

        if (updatedFavorite) {
            device.setStorageFavorite(JSON.parse(updatedFavorite))
        }

    }, [device.favorite])

    let favorParse = JSON.stringify(favor)
    let favorParse1
    if (favorParse) {
        favorParse1 = JSON.parse(favorParse)
    }

    let count = 0;

    const addFavorite = () => {


            let updatedFavorite = [...device.storageFavorite, {...favorite}]
            device.setFavorite(updatedFavorite)
            let newFavorite = JSON.stringify(device.favorite)
            let parseFavorite = JSON.parse(newFavorite)
            localStorage.setItem('favorite', JSON.stringify(parseFavorite))

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