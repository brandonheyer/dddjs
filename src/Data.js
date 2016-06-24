import _ from 'underscore';

import Series from './Series';

export default class {
    _processData() {
        if ( _.isArray( this._data ) && this._data.length ) {
            if ( _.isArray( this._data[ 0 ] ) ) {
                _.each( this._data, function( series ) {
                    this._series.push( new Series( series ) );
                } );
            } else {
                this._series.push( new Series( this._data ) );
            }
        } else if ( _.isNumber( this._data ) ) {
            this._series.push( new Series( [ this._data ] ) );
        }
    }

    constructor ( data ) {
        this._series = [];
        this.data = data;
    }

    series ( index ) {
        if  ( index < this._series.length && index >= 0 ) {
            return this._series[ index ];
        }

        return undefined;
    }

    get data () {
        return this._data;
    }

    set data ( data ) {
        this._data = data;
        this._processData();
    }
}
