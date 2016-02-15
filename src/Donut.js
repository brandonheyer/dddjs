import Pie from './Pie';

export default class extends Pie {
    _initializeArc () {
        this._arc = d3.svg.arc()
            .innerRadius( this.innerRadius )
            .outerRadius( this.outerRadius );
    }

    get innerRadius () {
        return this.radius / 3;
    }

    get outerRadius () {
        return this.radius;
    }
}
