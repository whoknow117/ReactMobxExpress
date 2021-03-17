import React, {useContext, useEffect, useState} from 'react';
import classes from "../SubCategoryPage.module.scss";
import {v1} from "uuid";
import {Col} from "react-bootstrap";
import {Context} from "../../../index";
import {useParams} from "react-router-dom";
import {fetchDevices} from "../../../http/deviceApi";



const Filter = ({setColor, setPower}) => {

    useEffect(()=>{
        fetchDevices(typeId, null, null, null, null,1, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    },[setColor, setPower])

    const {device} = useContext(Context)
    const {typeId} = useParams()
    // const [color, setColor] = useState('')
    // const [power, setPower] = useState('')





    const filterTitleDescription = () => {
        return device.devices.map(el => el.color)
    }
    const filteredPower = () => {
        return device.devices.map(el => el.power)
    }

    const fP = filteredPower()
    const fD = filterTitleDescription()

  console.log(fP)





    const filterPower = (arr) => {
        const cash = {}
        const filtered = []
        arr.forEach(el => {
            if (!cash[el]) {
                cash[el] = el;
                filtered.push(el)
            }
        })
        return filtered
    }
    console.log(filteredPower()[0] === "")
    let pow = filterPower(filteredPower())
    if(filteredPower()[0] === ""){
        pow = ""
    }
    const filter = (arr) => {
        const cash = {}
        const filtered = []
        arr.forEach(el => {
            if (!cash[el]) {
                cash[el] = el;
                filtered.push(el)
            }
        })
        return filtered
    }

    const filt = filter(filterTitleDescription())


    console.log(filt)

    return (
        <div>
            <Col className={classes.filter} md={3}>
                <div className={classes.filterBlock}>
                    {filt[0] !== undefined ? <div className={classes.title}>Цвет </div> : ""}
                    {filt ? filt.map(el=> {
                        return (

                            <div key={v1()} onClick={()=> setColor(el)} className={classes.description}>{el}</div>
                        )
                    }): ""}
                </div>

                {pow[0] !== undefined || pow[0]  =="" ?
                    <div className={classes.filterBlock}>
                        {pow[0] !== undefined || pow[0] === ""    ? <div className={classes.title}>Мощьность </div> : ""}
                        {pow[0] !== undefined || pow[0] === "" ? pow.map(el => {
                            console.log(pow[0])

                            return (

                                <div key={v1()}  onClick={()=> setPower(el)} className={classes.description}>{el}</div>
                            )
                        }): ""}
                    </div> : ""}


            </Col>
        </div>
    );
};

export default Filter;