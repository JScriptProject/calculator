const keys = document.querySelectorAll(".key");
const displayResult = document.querySelector(".display-result");
const typedKey = document.querySelector(".typed-key");
let eleArr = [];
const processData = (nextEle) => {
    if (eleArr.length == 1 && eleArr[0] == 0) {
        console.log("zero there");
        eleArr.pop();
    }
    if (nextEle !== "=") {
        if (nextEle == "×") {
            nextEle = "*";
        } 
    
        if (nextEle == "÷") {
            nextEle = "/";
        }

        eleArr.push(nextEle);
    }

    const elementVal = eleArr.join("");
    console.log(elementVal);
    typedKey.innerText = elementVal;
    return elementVal;
};

keys.forEach((key) => {
    key.addEventListener("click", (e) => {
        let resultVal = "ERR";
        const pressedKey = e.target.value;
        if (pressedKey) {
            if (pressedKey == "CE") {
                eleArr = [];
                processData(0);
                displayResult.innerText = 0;
            } else {
                resultVal = processData(pressedKey);
            }

            if (pressedKey == "=") {
                const calculatedResult = eval(resultVal).toFixed(8).replace(/\.?0+$/, '');

                displayResult.innerText = calculatedResult;
            }
        }

        if (!key.classList.contains("btn-light")) {
            key.classList.add("btn-light");
        }

        setTimeout(() => {
            if (key.classList.contains("btn-light")) {
                key.classList.remove("btn-light");
            }
        }, 200);
    });
});
