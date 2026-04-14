function q1() {
    var l = prompt("Enter L");
    var r = prompt("Enter R");
    var k = prompt("Enter K");

    var count = 0;

    for (var i = l; i <= r; i++) {
        if (i % k == 0) {
            var num = i;
            var sum = 0;
            var zero = false;

            while (num > 0) {
                var d = num % 10;
                if (d == 0) {
                    zero = true;
                    break;
                }
                sum = sum + d;
                num = (num - d) / 10;
            }

            var prime = true;
            if (sum < 2) prime = false;

            for (var j = 2; j < sum; j++) {
                if (sum % j == 0) {
                    prime = false;
                    break;
                }
            }

            if (prime && !zero) {
                count++;
            }
        }
    }

    alert(count);
}