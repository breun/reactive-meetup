var Rx = require('rxjs/Rx');
var streams = require('../../util/example-streams.js');

streams.word$
    .scan((sum, item) => sum + ' ' + item)
    .subscribe((x) => console.log(x));
