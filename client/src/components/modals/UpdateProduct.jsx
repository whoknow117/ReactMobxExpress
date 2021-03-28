import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {
    fetchAvailbale,
    fetchCategories,
    fetchDevices,
    fetchUnits, updateDevice
} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";


const UpdateProduct = observer(({show, onHide}) => {

    const {device} = useContext(Context)
    let selDev = JSON.stringify(device.selectedDevice)
    let newDev = JSON.parse(selDev)
    let defaultName = newDev.aliasName


    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(device.selectedDevice.quantity)
    const [article, setArticle] = useState('')
    const [newAliasName, setNewAliasName] = useState("")
    const [price, setPrice] = useState(0)








    useEffect(() => {
        setNewAliasName(defaultName)
        fetchAvailbale().then(data => device.setAvailable(data))
        fetchCategories().then(data => device.setCategories(data))
        fetchUnits().then(data => device.setUnit(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [device.selectedDevice])





    console.log(device.selectedDevice.id)


    const updateProduct = () => {

        const formData = new FormData()
        formData.append('name', name)
        formData.append('id', device.selectedDevice.id)
        formData.append('price', `${price}`)
        formData.append('aliasName', newAliasName)
        formData.append('article', article)
        formData.append('quantity', quantity)
        formData.append('availableId', device.selectedAvailable.id)
        updateDevice(formData).then(data => data)


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
                        Обновить товар
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

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


                        <Form.Control
                            onChange={(e) => setNewAliasName(e.target.value.toLowerCase())}
                            className="mt-3"
                            value={newAliasName}
                            placeholder="Введите название для поля поиска"
                            type="text"
                        >

                        </Form.Control>

                        <Form.Control
                            onChange={(e) => setArticle(e.target.value)}
                            className="mt-3"
                            placeholder="Введите артикул"
                            type="number"
                        >

                        </Form.Control>
                        <Form.Control
                            onChange={(e) => setQuantity(e.target.value)}
                            className="mt-3"
                            placeholder="Введите количество товара"
                            type="number"
                        >

                        </Form.Control>


                        <hr/>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button variant="outline-dark" onClick={updateProduct}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
});

export default UpdateProduct;