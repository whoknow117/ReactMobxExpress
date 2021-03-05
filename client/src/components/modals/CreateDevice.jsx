import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {

    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [])


    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const selectFile = (e) => {
        setFile(e.target.files[0])
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map( i => i.number === number ? {...i, [key]: value} : i))
    }



    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))

        createDevice(formData).then(data => onHide())

    }
    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавить новый товар
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown className="mt-3">
                            <Dropdown.Toggle>{device.selectedType.name || "Выберете тип"}</Dropdown.Toggle>
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
                        <Dropdown className="mt-3">
                            <Dropdown.Toggle>{device.selectedBrand.name || "Выберете бренд"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand =>
                                    <Dropdown.Item
                                        key={brand.id}
                                        onClick={() => device.setSelectedBrand(brand)}
                                    >
                                        {brand.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            onChange={(e) => setName(e.target.value)}
                            className="mt-3"
                            placeholder="Введите название товара"
                            type="text"
                        >

                        </Form.Control>
                        <Form.Control
                            onChange={(e) => setPrice(+e.target.value)}
                            className="mt-3"
                            placeholder="Введите стоимость товара"
                            type="number"
                        >

                        </Form.Control>
                        <Form.Control className="mt-3"
                                      onChange={selectFile}
                                      type="file"
                        >

                        </Form.Control>
                        <hr/>
                        <Button onClick={addInfo}>Добавить новое свойство </Button>
                        {
                            info.map(i =>
                                <Row key={i.number}>
                                    <Col md={4} className="mt-3">
                                        <Form.Control
                                            value={i.title}

                                            onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                            placeholder="Введите название характеристики"
                                        />
                                    </Col>
                                    <Col md={4} className="mt-3">
                                        <Form.Control
                                            value={i.description}

                                            onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                            placeholder="Введите описание характеристики"
                                        />
                                    </Col>

                                    <Col md={4} className="mt-3">
                                        <Button onClick={() => removeInfo(i.number)}>Удалить</Button>
                                    </Col>
                                </Row>
                            )
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button variant="outline-dark" onClick={addDevice}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
});

export default CreateDevice;