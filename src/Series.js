import _ from 'underscore';

export default class {
    _processData ( data, label ) {
        if ( label ) {
            this.label = label;
        } else {
            if ( _.isArray( data ) && data.length && _.isString( data[ 0 ] ) ) {
                this.label = data.shift();
            }
        }

        this.data = data;
    }

    constructor ( data = [], label = '' ) {
        this._processData( data, label );
    }

    set label ( label ) {
        this._label = label;
    }

    get data () {
        return this._data;
    }

    set data ( data ) {
        this._data = data;
    }
}
