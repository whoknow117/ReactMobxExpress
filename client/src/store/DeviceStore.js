import {makeAutoObservable} from "mobx";


export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Телефоны'},
            {id: 3, name: 'Микроволновки'},
            {id:4, name: 'Планешеты'},
            {id: 5, name: 'Ноутбуки'},
            {id: 6, name: 'Кофеварки'},
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Xiaomi'},

        ]
        this._devices = [
            {
                id: 1,
                name: "Iphone 12 pro",
                price: 30000,
                rating: 0,
                img: 'https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max-pacific-blue_1_.jpeg'
            },
            {
                id: 2,
                name: "Iphone 12 pro",
                price: 30000,
                rating: 0,
                img: 'https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max-pacific-blue_1_.jpeg'
            },
            {
                id: 3,
                name: "Iphone 12 pro",
                price: 30000,
                rating: 0,
                img: 'https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max-pacific-blue_1_.jpeg'
            },
            {
                id: 4,
                name: "Iphone 12 pro",
                price: 30000,
                rating: 0,
                img: 'https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max-pacific-blue_1_.jpeg'
            },
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }


    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    get selectedType() {
        return this._selectedType
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }




}

