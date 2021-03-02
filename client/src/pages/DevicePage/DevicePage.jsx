import React from 'react';
import classes from './DevicePage.module.scss';
import {Card, Col, Container, Image, Row} from "react-bootstrap";


const DevicePage  = () => {

    const device  = {
        id: 3,
        name: "Redmi NOTE pro",
        price: 30000,
        rating: 0,
        img: 'https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max-pacific-blue_1_.jpeg'
    }
    const description = [
        {id:1, title:"Оперативная память", description: '3'},
        {id:2, title:"Длинна", description: '2'},
        {id:3, title:"Высота", description: '123'},
        {id:4, title:"Обьем", description: '111'},
        {id:5, title:"Оперативная память", description: '5'},
    ]

    return (
        <Container className="mt-3  ">
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{device.name}</h2>
                    <div className="d-flex align-items-center justify-content-center">
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card>
                    <h3>{device.price}</h3>
                    <button>Добавить в корзину</button>
                </Card>
            </Col>

            </Row>
            <Row className="d-flex flex-column text-sm-left">
                <h2>Характеристики</h2>
                {description.map((info,index) =>
                    <Row
                        key={info.id}
                        style={{background: index%2 === 0 ? '#f3f3f3' : '#fff'}}

                    >
                        {info.title} : {info.description}

                    </Row>

                )}
            </Row>
        </Container>
    );
};

export default DevicePage;