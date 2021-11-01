"use strict";
const start = async () => {
    let algo = Number(document.querySelector(".algo_drop").value);
    let speed = Number(document.querySelector(".speed_drop").value);

    if (speed === 0) {
        speed = 1;
    }

    await Alert_for_Algo(algo);

    let algorithm = new Algorithms(speed);
    if (algo === 1) await algorithm.BubbleSort();
    if (algo === 2) await algorithm.MergeSort();
};
const Alert_for_Algo = async (algo) => {
    if (algo === 0) {
        var alert = (document.querySelector(".setAlert").innerHTML =
            "Please select an Algorithm !");
        return alert;
    } else if (algo != 0) {
        var removealert = (document.querySelector(".setAlert").innerHTML = "");
        return removealert;
    }
};
const RenderScreen = async () => {
    await RenderList();
};

const RenderList = async () => {
    let size = Number(document.querySelector(".size_drop").value);
    if (size === -1) {
        size = randomNumber(5, 150);
    }
    await clear();
    let list = await randomList(size);
    const arrayNode = document.querySelector(".array");
    for (const element of list) {
        const bar = document.createElement("div");
        bar.className = "cell";
        bar.setAttribute("value", String(element));
        bar.style.height = `${4 * element}px`;
        arrayNode.appendChild(bar);
    }
};

const RenderArray = async (sorted) => {
    let size = Number(document.querySelector(".size_drop").value);
    await clear();
    let list = await randomList(size);
    if (sorted) list.sort((a, b) => a - b);
    const arrayNode = document.querySelector(".array");
    const divnode = document.createElement("div");
    divnode.className = "s-array";
    for (const element of list) {
        const dnode = document.createElement("div");
        dnode.className = "s-cell";
        dnode.innerText = element;
        divnode.appendChild(dnode);
    }
    arrayNode.appendChild(divnode);
};

function randomNumber(low, high) {
    var create_randomNum = parseInt(
        Math.floor(Math.random() * (high - low + 1) + low)
    );
    return create_randomNum;
}

const randomList = async (Length) => {
    let list = new Array();
    for (let counter = 0; counter < Length; counter++) {
        var NewrandomNumber = randomNumber(1, 100);
        list.push(NewrandomNumber);
    }
    return list;
};

const clear = async () => {
    document.querySelector(".array").innerHTML = "";
};

const response = () => {
    let Navbar = document.querySelector(".navbar");
    if (Navbar.className === "navbar") {
        Navbar.className += " responsive";
    } else {
        Navbar.className = "navbar";
    }
};

document.querySelector(".icon").addEventListener("click", response);
document.querySelector(".start").addEventListener("click", start);
document.querySelector(".size_drop").addEventListener("change", RenderScreen);
window.onload = RenderScreen;
