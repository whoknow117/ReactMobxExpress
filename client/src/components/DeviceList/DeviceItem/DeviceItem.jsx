import React from 'react';

import {Card, Col, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../../../utils/consts";

const DeviceItem = observer(({dev}) => {

    const history = useHistory()

    return (
        <Col md={3} className={'mt-3'} onClick={() => history.push(DEVICE_ROUTE + '/' + dev.id)}>
            <Card border={'light'} style={{width: 150, cursor: 'pointer'}}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + dev.img}/>
                <div className="text-black-50">Samsung</div>
                <div>
                    <div>{dev.rating}</div>
                </div>
                <div>
                    {dev.name}
                    {dev.price}
                </div>

            </Card>
        </Col>
    );
});

export default DeviceItem;