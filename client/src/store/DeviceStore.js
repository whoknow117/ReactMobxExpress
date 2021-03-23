import {makeAutoObservable} from "mobx";


export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._categories = []
        this._info = []
        this._arrayId = []
        this._value = ""
        this._infoDescription = []
        this._selectedType = {}
        this._unit = []
        this._selectedUnit = []
        this._activeBar = false
        this._selectedBrand = {}
        this._selectedCategory = {}
        this._selectedInfo = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 24
        makeAutoObservable(this)
    }


    setSelectedUnit (selectedUnit) {
        this._selectedUnit = selectedUnit
    }

    setValue (value) {
        this._value = value
    }

    setUnit(unit) {
        this._unit = unit
    }

    setArrayId (arrayId) {
        this._arrayId = arrayId
    }

    setSelectedInfo(selectedInfo) {
        this._selectedInfo = selectedInfo
    }

    setActive(activeBar) {
        this._activeBar = activeBar
    }

    setInfoDescription(infoDescription) {
        this._infoDescription = infoDescription
    }

    setInfo(info) {
        this._info = info
    }

    setPage(page) {
        this._page = page
    }

    setLimit(limit) {
        this._limit = limit
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
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

    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setCategories(categories) {
        this._categories = categories
    }


    get selectedUnit () {
        return this._selectedUnit
    }

    get unit() {
        return this._unit
    }

    get activeBar() {
        return this._activeBar
    }

    get value () {
        return this._value
    }

    get arrayId () {
        return this._arrayId
    }

    get infoDescription() {
        return this._infoDescription
    }

    get info() {
        return this._info
    }

    get selectedCategory() {
        return this._selectedCategory
    }

    get categories() {
        return this._categories
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

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get page() {
        return this._page
    }

    get selectedInfo () {
        return this._selectedInfo
    }

}

