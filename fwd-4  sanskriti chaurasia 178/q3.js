function q3() {
    var n = prompt("Enter N");
    var k = prompt("Enter K");

    var ans = -1;

    for (var x = 0; x <= 100000; x++) {
        var num = n + x;

        var temp = num;
        var rev = 0;

        while (temp > 0) {
            var d = temp % 10;
            rev = rev * 10 + d;
            temp = (temp - d) / 10;
        }

        if (num == rev && num % k == 0) {
            ans = x;
            break;
        }
    }

    alert(ans);
}