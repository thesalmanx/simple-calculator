let expression = document.getElementById("display").value
let solution;

function display(number){

        if (number === '=') {
            solution = eval(expression)
            document.getElementById("display").value = solution
            expression = ""

        } else if (number === "ac") {
            document.getElementById("display").value = ""
            expression = ""
        } else if (number == "de") {
            expression = expression.slice(0, -1)
            document.getElementById("display").value = expression
        } else {
            expression += number;
            document.getElementById("display").value = expression
        }
        
}