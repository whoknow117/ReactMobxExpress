import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {

    const {device} = useContext(Context)
    const [info, setInfo] = useState([])


    const addInfo = () => {
        setInfo([...info,{title:'',description:'', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter( i => i.number !== number))
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
                            <Dropdown.Toggle>Выберети тип</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type =>
                                    <Dropdown.Item
                                        key={type.id}

                                    >
                                        {type.name}
                                    </Dropdown.Item>

                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="mt-3">
                            <Dropdown.Toggle>Выберети бренд</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand =>
                                    <Dropdown.Item
                                        key={brand.id}

                                    >
                                        {brand.name}
                                    </Dropdown.Item>

                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control className="mt-3"
                            placeholder="Введите название товара"
                                      type="text"
                        >

                        </Form.Control>
                        <Form.Control className="mt-3"
                                      placeholder="Введите стоимость товара"
                                      type="number"
                        >

                        </Form.Control>
                        <Form.Control className="mt-3"

                                      type="file"
                        >

                        </Form.Control>
                        <hr/>
                        <Button onClick={addInfo} >Добавить новое свойство </Button>
                        {
                            info.map(i =>
                            <Row key={i.number}>
                                <Col md={4} className="mt-3">
                                    <Form.Control
                                    placeholder="Введите название характеристики"
                                    />
                                </Col>
                                <Col md={4} className="mt-3">
                                    <Form.Control
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
                    <Button variant="outline-dark"  onClick={onHide}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateDevice;