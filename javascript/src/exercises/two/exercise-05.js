var Rx = require('rxjs/Rx');

// The point$ stream represents a the number of earned points by a player/team for a number of games.
var point$ = require('../../util/example-streams.js').point$;

// With the introduction of the "OV chipkaart" in the Netherlands, every person that wishes to travel by train needs to
// check in and check out with their "OV chipkaart". Many railway stations have adopted gates which (in the future) can
// only be opened by either checking in or checking out. The gateCheckEvent$ stream below represents the checkins and 
// checkouts for such a gate at a railway station.
var gateCheckEvent$ = require('../../util/railway-streams.js').gateCheckEvents$;

// ASSIGNMENT: Define the gateIsFree$ stream based on the provided gateCheckEvent$. This stream should emit boolean
// values, where true indicates that the gate is free and false indicates that is occupied (being used by someone).
//
// Note that the stream should emit alternating values, i.e. two successive values may not be the same. For example,
// "true, true, false" is not a valid output, while "true, false, true" is okay.
//
// A gate is considered to be free if in the last 1,5 seconds nobody has checked in or out. Initially the gate is
// considered to be free, so your output should always start with "true".
//
// HINT: To specify the 1,5 second interval use the GATE_OCCUPY_TIME constant in combination with TimeUnit.MILLISECONDS.
//
// HINT: Solve this assignment using divide and conquer. First try to define two streams, one that tells whenever the
// gate is occupied and another that tells when the gate is free. Next find a way to combine those streams to get the
// desired output.
gateCheckEvent$
    .subscribe((i) => console.log(i));