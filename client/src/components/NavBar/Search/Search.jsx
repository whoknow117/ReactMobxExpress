import React, {useContext, useEffect, useState} from 'react';
import classes from './Search.module.scss';
import SearchIcon from "../../../assets/SearchIcon/SearchIcon";
import {fetchDevices} from "../../../http/deviceApi";
import {Context} from "../../../index";
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../../../utils/consts";
import BasketButton from "../../BasketButton/BasketButton";
import {observer} from "mobx-react-lite";


const Search =  observer(() => {

    const changeInput = (id) => {
        setValue("")

    }
    const [value,setValue] = useState("")

    const {device} = useContext(Context)
    const history = useHistory()
    useEffect(() => {

        fetchDevices(null,null,null,null,value,1,20).then(data =>  device.setSearchDevice(data.rows) )

    },[value ])


const productRoute = (id) => {
    history.push(DEVICE_ROUTE + '/' + id)
}




    return (

            <div className={classes.searchForm}>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Поиск по товарам"
                    value={value}
                    className={classes.input} type="text"/>
                <button className={classes.searchBtn}>
                    <SearchIcon/>
                </button>
                <div className={`${classes.searchList} ${device.searchDevice.length !== 0 && value.trim() !== "" ? classes.activeList : ""}`}>

                    {device.searchDevice.map((el, idx) => {
                        let images = el.img
                        let img = JSON.parse(images)
                        return (
                            <div onClick={() => changeInput(el.id)} className={`${classes.searchItem} ${ device.searchDevice.length !== 0 ? classes.active :""}`}>

                        <div onClick={() => {productRoute(el.id)} } className={classes.wrapper}>
                            <div className={classes.image}>
                                <img src={process.env.REACT_APP_API_URL + img[0]} alt=""/>
                            </div>
                            <div className={classes.name}>{el.name}</div>
                        </div>
                        <div></div>
                       <div className={classes.btnWrapper}>
                           <BasketButton icon product={el}/>
                       </div>

                    </div>)}) }

                </div>
            </div>

    );
});

export default Search;