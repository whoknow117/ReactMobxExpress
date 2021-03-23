import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchCategories, fetchDevices, fetchTypes} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";
import {createInfoDescription, fetchInfos} from "../../http/categoryInfoApi";
import {useParams} from "react-router-dom";
import DescriptionInput from "./DescriptionInput/DescriptionInput";

const CreateDevice = observer(({show, onHide}) => {

    const {device} = useContext(Context)
    const [infoDescription, setInfoDescription] = useState([])
    const [info, setInfo] = useState([])
    const [value, setValue] = useState("")

    const [productType, setProductType] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [clear,setClear] = useState(false)
    const [file, setFile] = useState(null)

    const params = useParams()


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchCategories().then(data => device.setCategories(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [device.selectedType ])


    useEffect(() => {
        fetchInfos(device.selectedType.id).then(data => device.setInfo(data))
    }, [device.selectedType])


    // const addInfo = () => {
    //     setInfo([...info, {title: '', description: '', number: Date.now()}])
    // }
    // const removeInfo = (number) => {
    //     setInfo(info.filter(i => i.number !== number))
    // }

    // const changeInfo = (key, value, number) => {
    //     setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    // }

    // const changeInfoDescription = () => {
    //     setInfoDescription([...infoDescription,{
    //         title: value,
    //
    //     } ])
    //     setValue("")
    // }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }


    const addDevice = () => {

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('categoryId', device.selectedCategory.id)
        formData.append('info', JSON.stringify(device.info))
        formData.append('infoDescription', JSON.stringify(infoDescription))
        console.log(JSON.stringify(infoDescription))
        createDevice(formData).then(data => data)
        setInfoDescription([])
        setClear(true)
    }

    const changeInfoDescription = (value) => {
        setInfoDescription([...infoDescription,{
            'title': value,

        } ])

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
                            type="text"
                        >

                        </Form.Control>


                        {/*<Form.Control*/}
                        {/*    onChange={(e) => setColor(e.target.value)}*/}
                        {/*    className="mt-3"*/}
                        {/*    placeholder="Введите цвет товара"*/}
                        {/*    type="text"*/}
                        {/*>*/}

                        {/*</Form.Control>*/}


                        {/*<Form.Control*/}
                        {/*    onChange={(e) => setMade(e.target.value)}*/}
                        {/*    className="mt-3"*/}
                        {/*    placeholder="Введите производство товара"*/}
                        {/*    type="text"*/}
                        {/*>*/}

                        {/*</Form.Control>*/}


                        <Form.Control className="mt-3"
                                      onChange={selectFile}
                                      type="file"
                        >

                        </Form.Control>
                        <hr/>

                        {device.info.map((el,idx) => <div>
                            <div key={el.id}>
                                {el.title}
                                {el.id}
                                {/*<input onBlur={changeInfoDescription} onChange={(e) =>setValue(e.target.value)} type="text"/>*/}
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




