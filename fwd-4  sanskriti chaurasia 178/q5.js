function q5() {
    var n = prompt("Enter N");
    var seed = prompt("Enter seed");

    var m = 0;
    var sum = 0;
    var skip = seed + 2;

    while (sum < n) {
        m++;
        if (m % skip != 0) {
            sum = sum + m;
        }
    }

    alert(m + " " + sum);
}