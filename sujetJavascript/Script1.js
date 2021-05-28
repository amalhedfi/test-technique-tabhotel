
function DivPar3(x) {
    let n = x.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += (x[i] - '0');
        if (sum == 3) {
            sum -= 3;
        }
        else if (sum == 6) {
            sum -= 6;
        }
        else if (sum == 9) {
            sum -= 9;
        }

    }
    return (sum == 0);
}


let x = "7291572";

let rst = DivPar3(x) ? "le chiffre est divisible par 3" : "le chiffre n'est pas divisible par 3 ";

console.log(rst)
