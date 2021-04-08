import {makeAutoObservable} from "mobx";


export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._device = []
        this._categories = []
        this._available = []
        this._selectedAvailable = []
        this._info = []
        this._arrayId = []
        this._value = ""
        this._cartCounter = ""
        this._filterName = ""
        this._selectedDevice = {}
        this._infoDescription = []
        this._searchDevice = []
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
        this._cart = []
        this._storageCart = []
        this._storageCounter = []
        this._sum = null
        this._favorite = []
        this._storageFavorite = []
         


        makeAutoObservable(this)
    }

    setStorageFavorite (storageFavorite) {
        this._storageFavorite = storageFavorite
    }


    setFavorite (favorite) {
        this._favorite = favorite
    }

    setSum (sum) {
        this._sum = sum
    }

    setStorageCounter (storageCounter) {
        this._storageCounter = storageCounter
    }
    setStorageCart (storageCart) {
        this._storageCart = storageCart
    }

    setCartCounter (cartCounter) {
        this._cartCounter = cartCounter
    }

    setCart (cart) {
        this._cart = cart
    }

    setSelectedDevice (selectedDevice) {
        this._selectedDevice = selectedDevice
    }

    setSelectedAvailable (selectedAvailable) {
        this._selectedAvailable = selectedAvailable
    }

    setAvailable (available) {
        this._available = available
    }



    setDevice(device) {
        this._device = device
    }

    setFilterName (filterName) {
        this._filterName = filterName
    }

    setSearchDevice (searchDevice) {
        this._searchDevice = searchDevice
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


    get storageFavorite () {
        return this._storageFavorite
    }

    get favorite () {
        return this._favorite
    }

    get sum () {
        return this._sum
    }

    get storageCounter () {
        return this._storageCounter
    }

    get storageCart () {
        return this._storageCart
    }

    get cartCounter () {
        return this._cartCounter
    }

    get cart () {
        return this._cart
    }

    get selectedDevice () {
        return this._selectedDevice
    }

    get selectedAvailable () {
        return this._selectedAvailable
    }

    get available () {
        return this._available
    }

    get device () {
        return this._device
    }

    get filterName () {
        return this._filterName
    }


    get searchDevice () {
        return this._searchDevice
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

