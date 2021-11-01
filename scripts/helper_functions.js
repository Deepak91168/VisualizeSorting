"use strict";
var swaps = 0;
var comparisons = 0;
class Helper {
    constructor(time, list = []) {
        this.time = parseInt(15 / time); //String to int
        this.list = list;
    }

    // markSpl = async (i) => {
    //     this.list[i].setAttribute("class", "cell");//min
    // };

    mark_bar = async (i) => {
        this.list[i].setAttribute("class", "cell current");
    };
    unmark_bar = async (i) => {
        this.list[i].setAttribute("class", "cell");
    };

    delay = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, this.time);
        });
    };
    isgreater = async (i1, i2) => {
        await this.delay();
        var v1 = Number(this.list[i1].getAttribute("value"));
        var v2 = Number(this.list[i2].getAttribute("value"));
        comparisons++;
        if (v1 > v2) {
            swaps++;
            count(swaps);
            return true;
        }
        return false;
    };
    swap = async (i1, i2) => {
        await this.delay();
        let v1 = this.list[i1].getAttribute("value");
        let v2 = this.list[i2].getAttribute("value");
        this.list[i1].setAttribute("value", v2);
        this.list[i1].style.height = `${4 * v2}px`;
        this.list[i2].setAttribute("value", v1);
        this.list[i2].style.height = `${4 * v1}px`;
    };
}

function count(property){
    var y = No_of_swaps;
    var x = (document.getElementById("No_of_swaps").innerHTML = +property);
    return x;
}
