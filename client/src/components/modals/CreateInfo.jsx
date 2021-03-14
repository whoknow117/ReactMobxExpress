import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {createInfo, fetchInfos} from "../../http/categoryInfoApi";
import {fetchTypes} from "../../http/deviceApi";
import {Context} from "../../index";

const CreateInfo = ({show, onHide}) => {

    const {device} = useContext(Context)
    const [value, setValue] = useState('')


    useEffect(() => {
        fetchTypes(device.setSelectedType.id).then(data => device.setTypes(data))
    }, [device.selectedType])


    const addInfo = () => {
        if (value.trim() !== "") {
            createInfo({title: value, typeId: device.selectedType.id}).then(data => setValue(data))


        }
    }

    debugger;
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новую Характеристику
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle> {"Выберете тип"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => device.setSelectedType(type)}
                                >
                                    {type.name}
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
                <Button variant="outline-dark" onClick={addInfo}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateInfo;