function q2() {
    var n = prompt("Enter N");
    var seed = prompt("Enter seed");

    var cur = n;

    for (var i = 1; i <= 3; i++) {
        if (cur % 2 == 0) {
            cur = cur / 2 + seed;
        } else {
            cur = cur * 3 - seed;
        }
    }

    var mid = 0;

    if (cur >= 100 && cur <= 999) {
        mid = ((cur - (cur % 10)) / 10) % 10;
    }

    if (cur >= 100 && cur <= 999 && mid == seed) {
        alert("YES, " + cur);
    } else {
        alert("NO, " + cur);
    }
}