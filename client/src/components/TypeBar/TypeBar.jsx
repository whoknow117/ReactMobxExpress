import  React, {useContext, useEffect, useState} from 'react';
import classes from './TypeBar.module.scss';
import {Context} from "../../index";
import ListGroup from "react-bootstrap/ListGroup";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-bootstrap";
import {SUBCATEGORY_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import {fetchCategories, fetchTypes} from "../../http/deviceApi";


const TypeBar = observer(() =>  {

    const history = useHistory()

    const {device} = useContext(Context)
    const [mode, setMode] = useState(false)

    const setModeCallback = (type) => {
        device.selectedCategory(type)
        setMode(true)
    }
     useEffect(() => {
         console.log(device.categories)
         console.log(device.types)
         fetchTypes().then(data => device.setTypes(data))
         fetchCategories().then(data => device.setCategories(data))
     },[device.activeBar])

    return (
        <div className={classes.menu}>

            <ListGroup>
                {device.categories.map(type =>
                    <ListGroup.Item
                        active={type.id === device.selectedCategory.id}
                        // onClick={() => device.setSelectedCategory(type)}
                        style={{cursor: 'pointer', textAlign: 'left'}}
                        onMouseOver={() => {
                            device.setSelectedCategory(type)
                            setMode(true)
                        }}
                        onBlur={() => setMode(false)}
                        key={type.id}
                    >
                        {type.name}

                    </ListGroup.Item>
                )}
            </ListGroup>
            {mode ?
                <div
                    onMouseOver={() => setMode(true)}
                    onMouseLeave={() => setMode(false)}
                    className={classes.dropdown}
                >
                    {device.types.map(type => {
                        if (type.categoryId === device.selectedCategory.id) {
                            return <div
                                onClick={() => {
                                    history.push(SUBCATEGORY_ROUTE + '/' +  type.id)
                                    device.setSelectedType(type)
                                }}
                                key={type.id}
                            >
                                {type.name}</div>
                        }
                    })}
                </div>
                :
                ""
            }
        </div>
    );
});

export default TypeBar;