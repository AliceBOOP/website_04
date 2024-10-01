function normalFun() {
    console.log("Обычная функция")
}

normalFun();

() => {
    console.log("невызываемая стрелочная функция");
}

(() => {
    console.log("вызываемая стрелочная функция");
})()

function normFun(a, b) {
    console.log("normFun2: ", a + b);
}
normFun(3, 4);

((a, b) => {
    console.log("(a,b) =>:", a + b);
})(5, 6)

const calculator = {
    value: 0,
    setValue(initValue) {
        this.value = initValue;
        return this;
    },
    add(number) {
        this.value += number;
        return this;
    },
    getResult() {
        return this.value;
    }
}

let result = calculator.setValue(15).add(16).add(25).getResult();
console.log("calcResult: ", result)

document.getElementById("strEvent").addEventListener("click",
    () => {
        let inputStr = document.getElementById("strInput").value;
        console.log("strEvent called!");
        console.log(allCaps(inputStr));

        let pArray = document.getElementById("pDiv").getElementsByTagName("p");
        console.log(pArray);

        pArray[0].textContent = allCaps(inputStr);
        pArray[1].textContent = allLower(inputStr);
        pArray[2].textContent = reverseText(inputStr);
    }
)

function allCaps(str) {
    return str.toUpperCase();
}

function allLower(str) {
    return str.toLowerCase();
}

function reverseText(str) {
    return str.trim().split('').reverse().join('');
}

function task1(callback) {
    let t = Math.round(Math.random() * 5000);
    setTimeout(
        () => {
            console.log("Task 1 completed: ", t);
            callback();
        },
        t
    )
}


function task2(callback) {
    let t = Math.round(Math.random() * 5000);
    setTimeout(
        () => {
            console.log("Task 2 completed: ", t);
            callback();
        },
        t
    )
}


task1(() => {
    task2(() => {
        console.log("All tasks completed!");
    })
});

var promisesState1 = false;
var promisesState2 = true;

var promise1 = new Promise(
    function (resolve, reject) {
        if (promisesState1) {
            resolve("promise 1 successful!");
        } else {
            reject("promise 1 rejected!");
        }

    }
)

var promise2 = new Promise(
    function (resolve, reject) {
        if (promisesState2) {
            resolve("promise 2 successful!");
        } else {
            reject("promise 2 rejected!");
        }

    }
)

promise1.then(
    function(message){
        console.log(message);
        return promise2;
    }
).then(
    function(message){
        console.log(message);
        return console.log("All promises resolved!");
    }
).catch(
    function(message){
        console.log("do something else...")
    }
)
