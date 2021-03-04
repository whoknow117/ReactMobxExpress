import {makeAutoObservable} from "mobx";


export default class DeviceStore {
    constructor() {
        this._types = [

        ]
        this._brands = [


        ]
        this._devices = [

        ]
        this._selectedType = {}
        this._selectedBrand = {}
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

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get selectedBrand() {
       return this._selectedBrand
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

