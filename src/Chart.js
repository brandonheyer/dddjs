import d3 from 'd3';

export default class {
    _createSvg () {
        if ( !this._svg ) {
            this._svg = this._element.append( 'svg' );

            this._svg.attr( {
                'height': this.height,
                'width': this.width
            } );
        }
    }

    constructor ( data, selector = 'body', options = {} ) {
        this._data = data;
        this.selector = selector;
        this._width = options.width || this.width;
        this._height = options.height || this.height;
        this._colors = options.colors || d3.scale.category10();
    }

    render () {
        this._createSvg();
    }

    set selector ( selector ) {
        this._selector = selector;
        this._element = d3.select( this._selector );
    }

    get selector () {
        return this._selector || 'body';
    }

    get height () {
        return this._height || 200;
    }

    get width () {
        return this._width || 300;
    }

    get colors () {
        return this._colors;
    }

    get padding () {
        return 10;
    }
}
