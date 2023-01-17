var iron6 = prompt("How far do you carry a 6 iron?");


var iron6LowRange = (+iron6 - 5);
var iron6HighRange = (+iron6 + 5);
var iron5 = (+iron6 + 10);
var iron5LowRange = (+iron5 - 5);
var iron5HighRange = (+iron5 + 5);
var iron4 = (+iron5 + 10);
var iron7 = (+iron6 - 10);
var iron7LowRange = (+iron7 - 5);
var iron7HighRange = (+iron7 + 5);
var iron4LowRange = (+iron4 - 5);
var iron4HighRange = (+iron4 + 5);
var iron8 = (+iron7 - 10);
var iron8LowRange = (+iron8 - 5);
var iron8HighRange = (+iron8 + 5);
var iron9 = (+iron8 - 10);
var iron9LowRange = (+iron9 - 5);
var iron9HighRange = (+iron9 + 5);
var pitchingWedge = (+iron9 - 15);
var pitchingWedgeLowRange = (+pitchingWedge - 5);
var pitchingWedgeHighRange = (+pitchingWedge + 5);
var gapWedge = (+pitchingWedge - 15);
var gapWedgeLowRange = (+gapWedge - 7.5);
var gapWedgeHighRange = (+gapWedge + 5);
var sandWedge = (+gapWedge - 15);
var sandWedgeLowRange = (+sandWedge -10);
var sandWedgeHighRange = (+sandWedge + 7.5);


var windDirection = [NNE, NEE, E, SEE, SSE, S, SSW, SWW, W, NWW, NNW, N];
var NNE = .666;
var N = 1;
var NEE = .333;
var E = 0;
var SEE = -0.25;
var SSE = -0.5;
var S = -0.75;
var SSW = -0.5;
var SWW = -0.25;
var W = 0;
var NNW = 0.6666;
var NWW = 0.33333;

var conditions = [wet, normal, dry, solid];
var wet = 1;
var normal = 0.98;
var dry = 0.95;
var solid = 0.916;









function   getClub (distance, windSpeed, windDirection, conditions) {

    var netDistance = distance + (+windDirection * +windSpeed);
    
    var netDistance = (+netDistance * +conditions);

    var netDistance = Math.round(netDistance);


    if (windDirection = N ) { solid = 0.975, dry = 0.985, normal = 0.995;}
    else if (windDirection = NNE ) { solid = 0.962, dry = 0.973, normal = 0.986;}
    else if (windDirection = NEE ) {solid = 0.95, dry = 0.968, normal = 0.967;}
    else if (windDirection = SEE ) {solid = 0.936, dry = 0.95, normal = 0.967;}
    else if (windDirection = SSE ) {solid = 0.924, dry = 0.95, normal = 0.967;}
    else if (windDirection = S ) {solid = 0.916, dry = 0.94, normal = 0.97;}
    else if (windDirection = SSW ) {solid = 0.936, dry = 0.95, normal = 0.967;}
    else if (windDirection = SWW ) {solid = 0.936, dry = 0.95, normal = 0.967;}
    else if (windDirection = NWW ) {solid = 0.95, dry = 0.968, normal = 0.986;}
    else if (windDirection = NNW ) {solid = 0.962, dry = 0.973, normal = 0.986;}
    else if (windDirection = E) { solid = 0.942, dry = 0.959, normal = 0.92;}
    else if (windDirection = W) { solid = 0.942, dry = 0.959, normal = 0.92;}
    



if (netDistance > iron4LowRange && netDistance < iron4HighRange) {
    alert("You want to hit a " + netDistance + " yard shot, so 4 iron");
} else if (netDistance == iron4LowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so soft 4 iron or hard 5 iron");
} else if (netDistance > iron5LowRange && netDistance < iron5HighRange) {
    alert("You want to hit a " + netDistance + " yard shot, so 5 iron");
} else if (netDistance == iron5LowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so soft 5 iron or hard 6 iron");
} else if (netDistance > iron6LowRange && netDistance < iron6HighRange) {
    alert ("You want to hit a " + netDistance + " yard shot, so 6 iron");
} else if (netDistance == iron6LowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so soft 6 iron or struck 7 iron");
} else if (netDistance > iron7LowRange && netDistance < iron7HighRange) {
    alert("You want to hit a " + netDistance + " yard shot, so 7 iron");
} else if (netDistance == iron7LowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so soft 7 iron or firm 8 iron");
} else if (netDistance > iron8LowRange && netDistance < iron8HighRange) {
    alert("You want to hit a " + netDistance + " yard shot, so 8 iron");
} else if (netDistance == iron8LowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so soft 8 iron or firm 9 iron");
} else if (netDistance > iron9LowRange && netDistance < iron9HighRange) {
    alert("You want to hit a " + netDistance + " yard shot, so 9 iron");
} else if (netDistance > pitchingWedgeHighRange && netDistance < iron9LowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so Ripped PW or easy 9");
} else if (netDistance > pitchingWedgeLowRange && netDistance < pitchingWedgeHighRange) {
    alert("You want to hit a " + netDistance + " yard shot, so Pitching Wedge");
} else if (netDistance > gapWedgeLowRange && netDistance < gapWedgeHighRange) {
    alert("You want to hit a " + netDistance + " yard shot, so Gap Wedge");
} else if (netDistance == pitchingWedgeLowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so soft PW or solid GW");
} else if (netDistance > gapWedgeHighRange && netDistance < pitchingWedgeLowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so gentle PW or ripped GW");
} else if (netDistance > sandWedgeLowRange && netDistance < sandWedgeHighRange) {
    alert("You want to hit a " + netDistance + " yard shot, so Sand Wedge");
} else if (netDistance == gapWedgeLowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so soft GW or smoked SW");
} else if (netDistance < sandWedgeLowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so Lob Wedge");
} else if (netDistance == iron9LowRange) {
    alert("You want to hit a " + netDistance + " yard shot, so soft 9 iron or firm PW");
}
}
getClub (190, 18, S, solid);

