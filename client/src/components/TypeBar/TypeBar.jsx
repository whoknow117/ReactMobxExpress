import React, {useContext} from 'react';
import {Context} from "../../index";
import ListGroup from "react-bootstrap/ListGroup";
import {observer} from "mobx-react-lite";
import classes from './TypeBar.module.scss'

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div>
            <ListGroup>
                {device.types.map(type =>
                    <ListGroup.Item
                        active={type.id === device.selectedType.id}
                        onClick={() => device.setSelectedType(type)}
                        style={{cursor: 'pointer', textAlign: 'left'}}

                        key={type.id}
                    >
                        {type.name}

                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
});

export default TypeBar;