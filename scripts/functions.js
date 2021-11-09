"use strict";
var swaps = 0;
var comparisons = 0;
class Helper {
    constructor(time, list = []) {
        this.time = parseInt(15 / time); //String to int
        this.list = list;
    }
    mark_Sel = async (i) => {
        this.list[i].setAttribute("class", "cell selection");
    };

    mark_bar = async (i) => {
        this.list[i].setAttribute("class", "cell current");
    };

    mark_bar_insertion = async (i) => {
        this.list[i].setAttribute("class", "cell insertion");
    };

    unmark_bar = async (i) => {
        this.list[i].setAttribute("class", "cell");
    };

    isgreater = async (i1, i2) => {
        await this.delay();
        count_comparisons(comparisons);
        comparisons++;
        var v1 = Number(this.list[i1].getAttribute("value"));
        var v2 = Number(this.list[i2].getAttribute("value"));
        if (v1 > v2) {
            return true;
        }
        return false;
    };
    swap = async (i1, i2) => {
        await this.delay();
        let v1 = this.list[i1].getAttribute("value");
        let v2 = this.list[i2].getAttribute("value");
        this.list[i1].setAttribute("value", v2);
        this.list[i1].style.height = `${5 * v2}px`;
        this.list[i2].setAttribute("value", v1);
        this.list[i2].style.height = `${5 * v1}px`;
        count_swaps(swaps);
        swaps++;
    };
    delay = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, this.time);
        });
    };
}
