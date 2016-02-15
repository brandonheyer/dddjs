import d3 from 'd3';

import Chart from './Chart';
import * as Helpers from './Helpers';

export default class extends Chart {
    _initializeArc () {
        this._arc = d3.svg.arc()
            .innerRadius( 0 )
            .outerRadius( this.radius );
    }

    constructor ( data, selector ) {
        super( data, selector );

        this._initializeArc();

        this._pie = d3.layout.pie();
        this._colors = d3.scale.category10();
    }

    render () {
        super.render();

        var self = this;

        this._mainGroup = this._svg.append( 'g' )
            .attr(
                'transform',
                Helpers.translateString( this.width / 2, this.height / 2 )
            );

        this._arcGroups = this._mainGroup
            .selectAll( '.arc' )
                .data( this._pie( this._data ) )
            .enter()
                .append( 'g' )
                    .attr( 'class', 'arc' );

        this._arcGroups.append( 'path' )
            .attr( 'd', this._arc )
            .style( 'fill', ( datum, index ) => { return self._colors( index ); } );

    }

    get radius () {
        return ( Math.min( this.width, this.height ) - this.padding ) / 2;
    }

    get padding () {
        return 10;
    }
}
