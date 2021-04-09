import React, {useContext, useEffect, useState} from 'react';
import {Button,   Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {
    createDevice,
    fetchAvailbale,
    fetchBrands,
    fetchCategories,
    fetchDevices,
    fetchTypes,
    fetchUnits
} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";
import { fetchInfos} from "../../http/categoryInfoApi";
import {useParams} from "react-router-dom";
import DescriptionInput from "./DescriptionInput/DescriptionInput";

const CreateDevice = observer(({show, onHide}) => {

    const {device} = useContext(Context)
    const [infoDescription, setInfoDescription] = useState([])

    const [name, setName] = useState('')

    const [quantity, setQuantity] = useState('')
    const [article, setArticle] = useState('')
    const [aliasName, setAliasName] = useState('')
    const [price, setPrice] = useState(0)
    const [clear, setClear] = useState(false)
    const [file, setFile] = useState(null)




    useEffect(() => {

        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchAvailbale().then(data => device.setAvailable(data))
        fetchCategories().then(data => device.setCategories(data))
        fetchUnits().then(data => device.setUnit(data))
        // fetchDevices().then(data => device.setDevices(data.rows))
    }, [device.selectedType, device.selectedUnit,device.selectedAvailable  ])


    useEffect(() => {
        fetchInfos(device.selectedType.id).then(data => device.setInfo(data))
    }, [device.selectedType, device.selectedUnit,device.selectedAvailable ])


    const selectFile = (e) => {
        setFile(e.target.files)
    }

    console.log(file)
    const addDevice = () => {

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('aliasName', aliasName)
        // formData.append('img', file)

            formData.append('img', file )

        formData.append('brandId', device.selectedBrand.id)
        formData.append('article', article)
        formData.append('quantity', quantity)
        formData.append('availableId', device.selectedAvailable.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('unitId', device.selectedUnit.id)
        formData.append('categoryId', device.selectedCategory.id)
        formData.append('info', JSON.stringify(device.info))
        formData.append('infoDescription', JSON.stringify(infoDescription))
        console.log(JSON.stringify(infoDescription))
        createDevice(formData).then(data => data)
        setInfoDescription([])
        setClear(true)
    }

    const changeInfoDescription = (value) => {
        setInfoDescription([...infoDescription, {
            'title': value,

        }])

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
                        <Dropdown className="mt-3">
                            <Dropdown.Toggle>{device.selectedUnit.name || "Выберете способ измерения"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.unit.map(unit =>
                                    <Dropdown.Item
                                        key={unit.id}
                                        onClick={() => device.setSelectedUnit(unit)}
                                    >
                                        {unit.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
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

                        <Dropdown className="mt-3">
                            <Dropdown.Toggle> {device.selectedCategory.name || "Выберете категорию"} </Dropdown.Toggle>
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
                            onChange={(e) => setAliasName(e.target.value.toLowerCase())}
                            className="mt-3"
                            placeholder="Введите название для поля поиска"
                            type="text"
                        >

                        </Form.Control>

                        <Form.Control
                            onChange={(e) => setArticle(+e.target.value)}
                            className="mt-3"
                            placeholder="Введите артикул"
                            type="number"
                        >

                        </Form.Control>
                        <Form.Control
                            onChange={(e) => setQuantity(+e.target.value)}
                            className="mt-3"
                            placeholder="Введите количество товара"
                            type="number"
                        >

                        </Form.Control>

                        <Form.Control className="mt-3"
                                      onChange={selectFile}
                                      type="file"
                                      multiple
                        >

                        </Form.Control>
                        <hr/>

                        {device.info.map((el, idx) => <div>
                            <div key={el.id}>
                                {el.title}
                                {el.id}

                                <DescriptionInput

                                    changeDescription={changeInfoDescription}
                                />


                            </div>

                        </div>)}

                        {/*<Button onClick={addInfo}>Добавить новое свойство </Button>*/}
                        {/*{*/}
                        {/*    info.map(i =>*/}
                        {/*        <Row key={i.number}>*/}
                        {/*            <Col md={4} className="mt-3">*/}
                        {/*                <Form.Control*/}
                        {/*                    value={i.title}*/}

                        {/*                    onChange={(e)=> changeInfo('title',e.target.value,i.number)}*/}
                        {/*                    placeholder="Введите название характеристики"*/}
                        {/*                />*/}
                        {/*            </Col>*/}
                        {/*            <Col md={4} className="mt-3">*/}
                        {/*                <Form.Control*/}
                        {/*                    value={i.description}*/}
                        {/*                    onChange={(e)=> changeInfo('description',e.target.value,i.number)}*/}
                        {/*                    placeholder="Введите описание характеристики"*/}
                        {/*                />*/}
                        {/*            </Col>*/}

                        {/*            <Col md={4} className="mt-3">*/}
                        {/*                <Button>Удалить</Button>*/}
                        {/*            </Col>*/}
                        {/*        </Row>*/}
                        {/*    )*/}
                        {/*}*/}

                        {/*{device.info.map(i => {*/}

                        {/*        return (*/}
                        {/*            <div key={i.id}>*/}
                        {/*                <div>{i.title}*/}
                        {/*                    {i.id}*/}

                        {/*                </div>*/}
                        {/*                <input*/}

                        {/*                    onChange={(e) => addDescription(e.target.value,i.id)}*/}

                        {/*                    type="text"/>*/}
                        {/*        </div>)*/}
                        {/*    }*/}
                        {/*)}*/}
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




