const d = new Date();
const startTime = d.getTime();
function Timer(starttime) {
    setInterval(() => {
        var start_time = startTime;
        var current_time = new Date().getTime();
        var difference = current_time - start_time;
        var minutes = Math.floor((difference % (60 * 60 * 1000)) / (1000 * 60));
        var seconds = Math.floor((difference % (60 * 1000)) / 1000);
        var milliseconds = Math.floor(difference % 1000);
        document.getElementById("timer").innerHTML =
            "Time: " + minutes + "m " + seconds + "s " + milliseconds + "ms";
    }, 1);
}
function randomNumber(low, high) {
    var create_randomNum = parseInt(
        Math.floor(Math.random() * (high - low + 1) + low)
    );
    return create_randomNum;
}
const Alert_for_Algo = async (algo) => {
    if (algo === 0) {
        var alert = (document.querySelector(".setAlert").innerHTML =
            "PLEASE SELECT AN ALGORITHM!");
        return alert;
    } else if (algo != 0) {
        var removealert = (document.querySelector(".setAlert").innerHTML = "");
        return removealert;
    }
};
const Alert_for_speed = async (speed) => {
    if (speed === 0) {
        var alert = (document.querySelector(".speedAlert").innerHTML =
            "YOU CAN ALSO CHOOSE DIFFERENT SPEED MODES FROM SPEED MENU");
        setTimeout(() => {
            var removeAlert = (document.querySelector(".speedAlert").innerHTML =
                "");
            return removeAlert;
        }, 6000);
        speed = 0.2;
    }
};
function count_comparisons(property) {
    var counts = (document.getElementById("comparisons").innerHTML =
        "Comparisons: " + property);
    return counts;
}
function count_swaps(property) {
    var counts = (document.getElementById("No_of_swaps").innerHTML =
        "Swaps: " + property);
    return counts;
}
const start = async () => {
    let algo = Number(document.querySelector(".algo_drop").value);
    let speed = Number(document.querySelector(".speed_drop").value);
    let algorithm = new Algorithm(speed);
    await Alert_for_speed(speed);
    await Alert_for_Algo(algo);
    Timer(startTime);
    if (algo === 1) await algorithm.BubbleSort();
    if (algo === 2) await algorithm.InsertionSort();
    if (algo === 3) await algorithm.shelleSort();
    if (algo === 4) await algorithm.SelectionSort();
    if (algo === 5) await algorithm.MergeSort();
    if (algo === 6) await algorithm.QuickSort();
    var stopTime = document.getElementById("timer").innerHTML;
    document.getElementById("timer").remove();
    document.getElementById("showTime").innerHTML = stopTime;
};

const RenderScreen = async () => {
    await RenderList();
};

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
        bar.style.height = `${4.5 * (1 / 16) * element}em`;
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

const response = () => {
    let Navbar = document.querySelector(".navbar");
    if (Navbar.className === "navbar") {
        Navbar.className += " responsive";
    } else {
        Navbar.className = "navbar";
    }
};

document
    .querySelector(".start_start")
    .addEventListener("click", start, response);
document.querySelector(".size_drop").addEventListener("change", RenderScreen);
window.onload = RenderScreen;
