let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);


function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}


SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}


let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Banana") {
            alert("Found Banana!");
        }
    }
}


findTheBanana(L1);
findTheBanana(L2);


L1.forEach(item => {
    if (item === "Banana") alert("Found Banana in 1!");
});

L2.forEach(item => {
    if (item === "Banana") alert("Found Banana in 2!");
});


function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greetingMessage = "";

    if (h < 12) {
        greetingMessage = "Good morning!";
    } else if (h < 18) {
        greetingMessage = "Good afternoon!";
    } else if (h < 20) {
        greetingMessage = "Good evening!";
    } else {
        greetingMessage = "Good night!";
    }

    let greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerHTML = greetingMessage;
    }
}


if (window.location.href.includes("index.html")) {
    greetingFunc();
}
