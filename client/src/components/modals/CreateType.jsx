import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {createType, fetchCategories} from "../../http/deviceApi";
import {Context} from "../../index";
import {login} from "../../http/userApi";

const CreateType = ({show, onHide}) => {

    const {device} = useContext(Context)
    const [value, setValue] = useState('')





     const [file,setFile] = useState(null)

    const selectFile = (e) => {
        setFile(e.target.files )
    }

    console.log(file)

    useEffect(() => {


        fetchCategories().then(data => device.setCategories(data))

    },[device.setSelectedCategory,file])


    const addType = () => {
        if(value.trim() !== "") {
            let formData = new FormData()

            formData.append('name', value)
            formData.append('categoryId', device.selectedCategory.id)
            // formData.append('img', file)
            for(let i=0; i < file.length; i++){
                formData.append('img',  file[i])
            }
            // createType({name: value, categoryId: device.selectedCategory.id,file}).then(data => setValue(data))

            createType(formData).then(data => data)

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
                    <Form.Control className="mt-3"
                                  onChange={selectFile}
                                  type="file"
                                  multiple
                    >

                    </Form.Control>
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