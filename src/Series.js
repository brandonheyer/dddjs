export default class {
    constructor ( data = [], label = '' ) {
        this.data = data;
        this._label = label;
    }

    set data ( data ) {
        this._data = data;
    }
}
