function q6() {
    var a = prompt("Enter correct answers");
    var b = prompt("Enter partial answers");
    var c = prompt("Enter wrong answers");

    var score = 3 * a + b - 2 * c;

    if (score < 0) {
        score = 0;
    }

    if (a + b + c > 50) {
        score = score - 10;
    }

    if (score >= 60) {
        alert(score + ", PASS");
    } else {
        alert(score + ", FAIL");
    }
}