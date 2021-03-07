import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {createType, fetchCategories} from "../../http/deviceApi";
import {Context} from "../../index";

const CreateType = ({show, onHide}) => {

    const {device} = useContext(Context)
    const [value, setValue] = useState('')


    useEffect(() => {
        fetchCategories().then(data => device.setCategories(data))
    },[device.selectedCategory])


    console.log(device.selectedCategory.id)
    const addType = () => {
        if(value.trim() !== "") {
            createType({name: value, categoryId: device.selectedCategory.id}).then(data => setValue(data))

            onHide()

        }
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle> {"Выберете тип"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.categories.map(category =>
                                <Dropdown.Item
                                    key={category.id}
                                    onClick={() => device.setSelectedCategory(category)}
                                >
                                    {category.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-dark"  onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;