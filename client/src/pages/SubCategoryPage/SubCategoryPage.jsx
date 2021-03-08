import React, {useContext, useEffect} from 'react';
import classes from './SubCategoryPage.module.scss'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchBrands, fetchCategories, fetchDevices, fetchTypes} from "../../http/deviceApi";

const SubCategoryPage = observer(() => {

    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchCategories().then(data => device.setCategories(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(device.selectedType.id, null,  null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.selectedType])



    return (
        <div className={classes.sub}>
            {device.devices.map(dev => {
                return <div className={classes.item}>
                    <div>{dev.name} </div>
                    <div></div>

                </div>
            })}
        </div>
    );
});

export default SubCategoryPage;