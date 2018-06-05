export default class apiData {
    constructor() {
        this.dataObj = {};
    }

    getData() {
        return this.dataObj;
    }

    setData(key, value) {
        this.dataObj[key] = value;
    }
}