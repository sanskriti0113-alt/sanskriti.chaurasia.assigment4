function q4() {
    var base = prompt("Enter base");
    var dist = prompt("Enter distance");
    var late = prompt("Enter minutes late");
    var seed = prompt("Enter seed");

    var fare = base + 7 * dist;

    if (late > 15) {
        fare = fare + 20;
    }

    if (dist > 10) {
        fare = fare + (fare * 10) / 100;
    }

    if (seed % 2 == 1) {
        fare = fare - seed;
    } else {
        fare = fare + seed;
    }

    while (fare % 5 != 0) {
        fare++;
    }

    alert(fare);
}