import React, {useContext, useEffect, useState} from 'react';
import classes from './Search.module.scss';
import SearchIcon from "../../../assets/SearchIcon/SearchIcon";
import {fetchDevices} from "../../../http/deviceApi";
import {Context} from "../../../index";

const Search = () => {


    const [value,setValue] = useState("")
    const [array,setArray] = useState([])
    const {device} = useContext(Context)
    useEffect(() => {

        fetchDevices(null,null,null,null,value,1,20).then(data =>  device.setSearchDevice(data.rows) )

    },[value])

    console.log(JSON.stringify(device.searchDevice))



    const changeInput = () => {

    }


    return (

            <div className={classes.searchForm}>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={() => setValue("")}
                    value={value}
                    className={classes.input} type="text"/>
                <button className={classes.searchBtn}>
                    <SearchIcon/>
                </button>

                <div className={`${classes.searchList} ${value ? classes.activeList : ""}`}>

                    {device.searchDevice.map((el, idx) => <div className={`${classes.searchItem} ${ value ? classes.active :""}`}>{el.name}</div>)}

                </div>
            </div>

    );
};

export default Search;