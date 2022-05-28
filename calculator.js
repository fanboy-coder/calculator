let total = [];
let number1 = [];
let operator = [];
let number2 = [];
let display = [[], [], []];
let storedTotal = [];

function operate(operating, num1, num2) {
    if (operating === "add") {
        let result = Math.round((+num1 + +num2) *100) /100;
        total.push(result);
    }
    if (operating === "subtract") {
        let result = Math.round((num1 - num2) *100)/100;
        total.push(result);
    }
    if (operating === "multiply") {
        let result = Math.round((num1 * num2) *100)/100;
        total.push(result);
    }
    if (operating === "divide") {
        let result = Math.round((num1 / num2) *100)/100;
        total.push(result);
    }
    if (operating === "divide" && +num2 === 0) {
        total = "Error";
    }
    storedTotal.pop()
    storedTotal.push(total);
    document.getElementById("textbox").textContent = total;
    clear();
}

function clear() {
    total = [];
    number1 = [];
    operator = [];
    number2 = [];
    display = [[], [], []];
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        //having 0 as the default num1 when the user first presses an operator
        if (number1.length === 0 && storedTotal === 0 && button.classList.contains("operator")) {
            number1.push(0);
            display[0].push(number1);
            display[1].pop();
            display[1].push(button.id);
            document.getElementById("textbox").textContent = display.join("");
        }
        //clearing
        if (button.classList.contains("clear")) {
            clear();
            storedTotal.pop();
            document.getElementById("textbox").textContent = display.join("");
        }
        //adding num1
        if (button.classList.contains("number") && operator.length === 0 && number2.length === 0) {
            number1.push(button.id);
            num1 = number1.join("");
            display[0].pop();
            display[0].push(num1);
            document.getElementById("textbox").textContent = display[0];
        }
        //adding operator
        if (button.classList.contains("operator")) {
            operator.push(button.id);
            display[1].pop();
            display[1].push(button.innerHTML);
            document.getElementById("textbox").textContent = display.join("");
            if (number2.length === 1) {
                operator.pop();
                let operating = operator.toString();
                operate(operating, num1, num2);
                number1.push(storedTotal);
                operator.push(button.id);
                num1 = number1.join("");
                display[0].pop();
                display[0].push(num1);
                display[1].push(button.innerHTML);
                document.getElementById("textbox").textContent = display.join("");
            }
            if (number1.length === 0 && storedTotal.length === 1) {
                number1.push(storedTotal);
                operator.pop();
                operator.push(button.id);
                num1 = number1.join("");
                display[0].pop();
                display[0].push(num1);
                display[1].pop();
                display[1].push(button.innerHTML);
                document.getElementById("textbox").textContent = display.join("");
            }
        }
        //disable decimal button
        if (button.classList.contains("decimal")) {
            if(!number1.includes(".")) {
                number1.push(button.id);
                num1 = number1.join("");
                display[0].pop();
                display[0].push(num1);
                document.getElementById("textbox").textContent = display[0];
            }
            else if(!number2.includes(".") && operator.length === 1){
                number2.push(button.id);
                num2 = number2.join("");
                display[2].pop();
                display[2].push(num2);
                document.getElementById("textbox").textContent = display.join("");
            }
        }
        //adding num2
        if (button.classList.contains("number") && operator.length === 1) {
            number2.push(button.id);
            num2 = number2.join("");
            display[2].pop();
            display[2].push(num2);
            document.getElementById("textbox").textContent = display.join("");
        }
        //operating
        if (button.classList.contains("equals")) {
            if (number2.length === 0) {
                num2 = 0;
                document.getElementById("textbox").textContent = display[0];
            }
            let operating = operator.toString();
            operate(operating, num1, num2);
        }
        //delete last element in array
        if (button.classList.contains("back")) {
            if (operator.length === 0) {
                number1.pop();
                num1 = number1.join("");
                display[0].pop();
                display[0].push(num1);
                document.getElementById("textbox").textContent = display[0];
            }
            if (number2.length === 0) {
                operator.pop();
                display[1].pop();
                document.getElementById("textbox").textContent = display.join("");
            }
            if (operator.length === 1) {
                number2.pop();
                num2 = number2.join("");
                display[2].pop();
                display[2].push(num2);
                document.getElementById("textbox").textContent = display.join("");
            };
        }
    })
});

document.addEventListener("keydown", (e)=> {
    if (e.key == 1) {
    document.getElementById("1").click();
    }
    if (e.key == 2) {
        document.getElementById("2").click();
    }
    if (e.key == 3) {
        document.getElementById("3").click();
    }
    if (e.key == 4) {
        document.getElementById("4").click();
    }
    if (e.key == 5) {
        document.getElementById("5").click();
    }    
    if (e.key == 6) {
        document.getElementById("6").click();
    }    
    if (e.key == 7) {
        document.getElementById("7").click();
    }   
    if (e.key == 8) {
        document.getElementById("8").click();
    } 
    if (e.key == 9) {
        document.getElementById("9").click();
    } 
    if (e.key == 0) {
        document.getElementById("0").click();
    }
    if (e.key === ".") {
        document.getElementById(".").click();
    }
    if (e.key == ",") {
        document.getElementById(",").click();
    } 
    if (e.key == "Enter") {
        document.getElementById("equals").click();
    }
    if (e.key == "+") {
        document.getElementById("add").click();
    }
    if (e.key == "-") {
        document.getElementById("subtract").click();
    }
    if (e.key == "/") {
        document.getElementById("divide").click();
    }
    if (e.key === "*") {
        document.getElementById("multiply").click();
    }
    if (e.key === "Backspace") {
        document.getElementById("back").click();
    }
    if (e.key == "Delete") {
        document.getElementById("clear").click();
    }
})