import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import ListGroup from "react-bootstrap/ListGroup";
import {observer} from "mobx-react-lite";
import {fetchCategories} from "../../http/deviceApi";


const TypeBar = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => device.setCategories(data))
    },[])

    return (
        <div>
            <ListGroup>
                {device.categories.map(type =>
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