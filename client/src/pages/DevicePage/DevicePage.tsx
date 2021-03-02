import React from 'react';
import classes from './DevicePage.module.scss';

type DevicePropsType = {

}

const DevicePage:React.FC<DevicePropsType> = () => {
    return (
        <div className={classes.device}>
            Device
        </div>
    );
};

export default DevicePage;