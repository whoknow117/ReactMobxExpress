import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {

   updateDevice,
} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";


const UpdateProduct = observer(({show, onHide}) => {

    const {device} = useContext(Context)
    let selDev = JSON.stringify(device.selectedDevice)
    let newDev = JSON.parse(selDev)
    let defaultName = newDev.aliasName
    let defaultName2 = newDev.name
    let oldPrice = newDev.price
    let oldQuantity = newDev.quantity
    let oldArticle = newDev.article
    // let oldBrandId = newDev.brandId
    // let oldTypeId = newDev.typeId
    // let oldUnitId = newDev.unitId
    // let oldCategoryId = newDev.categoryId
    // let oldImg = newDev.img


    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(device.selectedDevice.quantity)
    const [article, setArticle] = useState('')
    const [newAliasName, setNewAliasName] = useState("")
    const [price, setPrice] = useState(0)








    useEffect(() => {
        setName(defaultName2)
        setQuantity(oldQuantity)
        setArticle(oldArticle)
        setPrice(oldPrice)
        setNewAliasName(defaultName)
        // fetchAvailbale().then(data => device.setAvailable(data))
        // fetchCategories().then(data => device.setCategories(data))
        // fetchUnits().then(data => device.setUnit(data))
        // fetchDevices().then(data => device.setDevices(data.rows))
    }, [device.selectedDevice])








    const updateProduct = () => {

        // const formData = new FormData()
        // formData.append('name', name)
        //
        // formData.append('id', device.selectedDevice.id)
        // formData.append('price', `${price}`)
        // formData.append('aliasName', newAliasName)
        // formData.append('article', article)
        // formData.append('quantity',  `${quantity}` )
        // formData.append('availableId', device.selectedAvailable.id)
        // updateDevice(formData).then(data => data)

        updateDevice({
            id: device.selectedDevice.id,
            price: price,
            quantity: quantity,
            available: device.selectedAvailable.id,


        }).then(data => data)

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

                        {/*<Dropdown className="mt-3">*/}
                        {/*    <Dropdown.Toggle>{device.selectedType.name || "Выберете тип"}</Dropdown.Toggle>*/}
                        {/*    <Dropdown.Menu>*/}
                        {/*        {device.types.map(type =>*/}
                        {/*            <Dropdown.Item*/}
                        {/*                key={type.id}*/}
                        {/*                onClick={() => device.setSelectedType(type)}*/}
                        {/*            >*/}
                        {/*                {type.name}*/}
                        {/*            </Dropdown.Item>*/}
                        {/*        )}*/}
                        {/*    </Dropdown.Menu>*/}
                        {/*</Dropdown>*/}


                        {/*<Dropdown className="mt-3">*/}
                        {/*    <Dropdown.Toggle>{device.selectedBrand.name || "Выберете бренд"}</Dropdown.Toggle>*/}
                        {/*    <Dropdown.Menu>*/}
                        {/*        {device.brands.map(brand =>*/}
                        {/*            <Dropdown.Item*/}
                        {/*                key={brand.id}*/}
                        {/*                onClick={() => device.setSelectedBrand(brand)}*/}
                        {/*            >*/}
                        {/*                {brand.name}*/}
                        {/*            </Dropdown.Item>*/}
                        {/*        )}*/}
                        {/*    </Dropdown.Menu>*/}
                        {/*</Dropdown>*/}

                        {/*<Dropdown className="mt-3">*/}
                        {/*    <Dropdown.Toggle>{device.selectedUnit.name || "Выберете способ измерения"}</Dropdown.Toggle>*/}
                        {/*    <Dropdown.Menu>*/}
                        {/*        {device.unit.map(unit =>*/}
                        {/*            <Dropdown.Item*/}
                        {/*                key={unit.id}*/}
                        {/*                onClick={() => device.setSelectedUnit(unit)}*/}
                        {/*            >*/}
                        {/*                {unit.name}*/}
                        {/*            </Dropdown.Item>*/}
                        {/*        )}*/}
                        {/*    </Dropdown.Menu>*/}
                        {/*</Dropdown>*/}

                        <Dropdown className="mt-3">
                            <Dropdown.Toggle>{device.selectedAvailable.name || "В наличии"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.available.map(available =>
                                    <Dropdown.Item
                                        key={available.id}
                                        onClick={() => device.setSelectedAvailable(available)}
                                    >
                                        {available.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>


                        {/*<Form.Control*/}
                        {/*    onChange={(e) => setName(e.target.value)}*/}
                        {/*    className="mt-3"*/}
                        {/*value={name}*/}
                        {/*    placeholder="Введите название товара"*/}
                        {/*    type="text"*/}
                        {/*>*/}

                        {/*</Form.Control>*/}
                        <Form.Control
                            onChange={(e) => setPrice(+e.target.value)}
                            className="mt-3"
                            placeholder="Введите стоимость товара"
                            type="number"
                            value={price}
                        >

                        </Form.Control>






                        {/*<Form.Control*/}
                        {/*    onChange={(e) => setNewAliasName(e.target.value.toLowerCase())}*/}
                        {/*    className="mt-3"*/}
                        {/*    value={newAliasName}*/}
                        {/*    placeholder="Введите название для поля поиска"*/}
                        {/*    type="text"*/}
                        {/*>*/}

                        {/*</Form.Control>*/}

                        {/*<Form.Control*/}
                        {/*    onChange={(e) => setArticle(e.target.value)}*/}
                        {/*    className="mt-3"*/}
                        {/*    placeholder="Введите артикул"*/}
                        {/*    type="number"*/}
                        {/*>*/}

                        {/*</Form.Control>*/}
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