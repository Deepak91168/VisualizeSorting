var x = 0;
var y = 0;
("use strict");
class Algorithm {
    constructor(time) {
        this.list = document.querySelectorAll(".cell");
        this.size = this.list.length;
        this.time = time;
        this.functionhelp = new Helper(this.time, this.list);
    }
    // SELECTION SORT
    SelectionSort = async () => {
        for (let i = 0; i < this.size; i++) {
            let MI = i;
            for (let j = i; j < this.size; j++) {
                await this.functionhelp.mark_bar(j);
                await this.functionhelp.mark_Sel(MI);
                if (await this.functionhelp.isgreater(MI, j)) {
                    await this.functionhelp.unmark_bar(MI);
                    MI = j;
                }
                await this.functionhelp.unmark_bar(j);
                await this.functionhelp.mark_Sel(MI);
            }
            await this.functionhelp.mark_bar(MI);
            await this.functionhelp.mark_bar(i);
            await this.functionhelp.delay();
            await this.functionhelp.swap(MI, i);
            await this.functionhelp.unmark_bar(MI);
            this.list[i].setAttribute("class", "cell done");
        }
    };

    InsertionSort = async () => {
        for (let i = 1; i < this.size; i++) {
            let j = i - 1;
            while (j >= 0 && (await this.functionhelp.isgreater(j, j + 1))) {
                await this.functionhelp.mark_bar(j);
                await this.functionhelp.mark_bar_insertion(j + 1);
                await this.functionhelp.delay();
                await this.functionhelp.swap(j, j + 1);
                await this.functionhelp.unmark_bar(j);
                await this.functionhelp.unmark_bar(j + 1);
                j = j - 1;
            }
        }
        for (let i = 0; i < this.size; i++) {
            this.list[i].setAttribute("class", "cell done");
        }
    };

    BubbleSort = async () => {
        for (let i = 0; i < this.size - 1; i++) {
            for (let j = 0; j < this.size - i - 1; j++) {
                await this.functionhelp.mark_bar(j);
                await this.functionhelp.mark_bar(j + 1);
                if (await this.functionhelp.isgreater(j, j + 1)) {
                    await this.functionhelp.swap(j, j + 1);
                }
                await this.functionhelp.unmark_bar(j);
                await this.functionhelp.unmark_bar(j + 1);
            }
            this.list[this.size - i - 1].setAttribute("class", "cell done");
        }
        this.list[0].setAttribute("class", "class done");
    };

    // MERGE SORT
    MergeSort = async () => {
        await this.MergeDivider(0, this.size - 1);
        for (let counter = 0; counter < this.size; ++counter) {
            this.list[counter].setAttribute("class", "cell done");
        }
    };

    MergeDivider = async (start, end) => {
        if (start < end) {
            let mid = start + Math.floor((end - start) / 2);
            await this.MergeDivider(start, mid);
            await this.MergeDivider(mid + 1, end);
            await this.Merge(start, mid, end);
        }
        x++;
        console.log(x);
    };

    Merge = async (start, mid, end) => {
        let newList = new Array();
        let frontcounter = start;
        let midcounter = mid + 1;

        while (frontcounter <= mid && midcounter <= end) {
            let fvalue = Number(this.list[frontcounter].getAttribute("value"));
            let svalue = Number(this.list[midcounter].getAttribute("value"));
            if (fvalue >= svalue) {
                newList.push(svalue);
                ++midcounter;
            } else {
                newList.push(fvalue);
                ++frontcounter;
            }
        }
        while (frontcounter <= mid) {
            newList.push(Number(this.list[frontcounter].getAttribute("value")));
            ++frontcounter;
        }
        while (midcounter <= end) {
            newList.push(Number(this.list[midcounter].getAttribute("value")));
            ++midcounter;
        }

        for (let c = start; c <= end; ++c) {
            this.list[c].setAttribute("class", "cell current");
        }
        for (
            let c = start, point = 0;
            c <= end && point < newList.length;
            ++c, ++point
        ) {
            await this.functionhelp.delay();
            this.list[c].setAttribute("value", newList[point]);
            this.list[c].style.height = `${4.5 * (1 / 16) * newList[point]}em`;
        }
        for (let c = start; c <= end; ++c) {
            this.list[c].setAttribute("class", "cell");
        }
    };
    //Quick Sort
    QuickSort = async () => {
        await this.QuickDivider(0, this.size - 1);
        for (let c = 0; c < this.size; ++c) {
            this.list[c].setAttribute("class", "cell done");
        }
    };

    QuickDivider = async (start, end) => {
        if (start < end) {
            let pivot = await this.Partition(start, end);
            await this.QuickDivider(start, pivot - 1);
            await this.QuickDivider(pivot + 1, end);
            y++;
            console.log(y);
        }
    };

    Partition = async (start, end) => {
        let pivot = this.list[end].getAttribute("value");
        let prev_index = start - 1;

        await this.functionhelp.mark_Sel(end);
        for (let c = start; c < end; ++c) {
            let currValue = Number(this.list[c].getAttribute("value"));
            await this.functionhelp.mark_bar(c);
            if (currValue < pivot) {
                prev_index += 1;
                await this.functionhelp.mark_bar(prev_index);
                await this.functionhelp.swap(c, prev_index);
                await this.functionhelp.unmark_bar(prev_index);
            }
            await this.functionhelp.unmark_bar(c);
        }
        await this.functionhelp.swap(prev_index + 1, end);
        await this.functionhelp.unmark_bar(end);
        return prev_index + 1;
    };
}
