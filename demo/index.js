import * as ddd from '../src';

new ddd.Pie( new ddd.Data( [ 50, 25, 15, 10 ] ), '.chart-pie' ).render();
new ddd.Donut( new ddd.Data( [ 50, 25, 15, 10 ] ), '.chart-donut' ).render();
