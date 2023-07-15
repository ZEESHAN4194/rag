var arr = [];
var enterdata = "";
var tempdata = "";
var result = '';
var temarr = [];
var lastClicked = "";
var dbz = '';
var tr = "";
let bracketSwitch = false;
// charAt();
var indesplc = "";
var tempdata2 = "";
var newArr = [];
var result2 = "";

function numberclick(input) {

    document.getElementById("disp").value += input;

    if (input == "/" || input == "*" || input == "+" || input == "-" || input == "(" || input == ")") {

        if (tempdata == "") {
        } else {
            arr.push(tempdata);
            tempdata = "";
        }
        arr.push(input);
    } else {
        tempdata += input;
        tempdata = Number(tempdata);
    }
}

function bracketfun(input) {
    document.getElementById("disp").value += input;
    if (tempdata !== null) {
        arr.push(tempdata);
        tempdata = "";
    }
    arr.push(input);
}

function forsubArr(newArr) {
    return newArr;
}

function equalclick() {

    //     if (tempdata == "") {
    // console.log('dataempty');
    //     } else {

    //     }
    arr.push(tempdata);
    newArr = arr.filter(forsubArr);
    arr = [];


    // // for brackets condition.................

    if (newArr.includes("(")) {
        index1 = newArr.indexOf("(");
        index2 = newArr.indexOf(")");
        for (let i = index1 + 1; i < index2; i++) {
            temarr.push(newArr[i]);
        }

        for (let j = 0; j < temarr.length; j++) {
            if (temarr[j] === '/') {
                if (temarr[j] === 0) dbz = 1;
                tr = temarr[j - 1] / temarr[j + 1];
                temarr.splice(j - 1, 3, tr);
                j = 0;
            }
        }


        for (let j = 0; j < temarr.length; j++) {
            if (temarr[j] === '*') {
                if (temarr[j] === 0) dbz = 1;
                tr = temarr[j - 1] * temarr[j + 1];
                temarr.splice(j - 1, 3, tr);
                j = 0;
            }
        }


        for (let j = 0; j < temarr.length; j++) {
            if (temarr[j] === '-') {
                tr = temarr[j - 1] - temarr[j + 1];
                temarr.splice(j - 1, 3, tr);
                j = 0;

            }
        }

        for (let j = 0; j < temarr.length; j++) {
            if (temarr[j] === '+') {
                tr = temarr[j - 1] + temarr[j + 1];
                temarr.splice(j - 1, 3, tr);
                j = 0;

            }
        }
        result = temarr[0];
        temarr = [];
        newArr.splice(index1, index2 + 2, result);
    }


    if (newArr != "(") {

        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === '/') {
                if (newArr[i] === 0) dbz = 1;
                tr = newArr[i - 1] / newArr[i + 1];
                newArr.splice(i - 1, 3, tr);
                i = 0;
            }

        }


        for (i = 0; i < newArr.length; i++) {

            if (newArr[i] === '*') {
                tr = newArr[i - 1] * newArr[i + 1];
                newArr.splice(i - 1, 3, tr);
                i = 0;

            }
        }


        for (i = 0; i < newArr.length; i++) {

            if (newArr[i] === '-') {
                tr = newArr[i - 1] - newArr[i + 1];
                newArr.splice(i - 1, 3, tr);
                i = 0;
            }

        }

        for (i = 0; i < newArr.length; i++) {

            if (newArr[i] === '+') {
                tr = Number(newArr[i - 1]) + Number(newArr[i + 1]);
                newArr.splice(i - 1, 3, tr);
                i = 0;
            }

        }
    }

    result = newArr[0];
    newArr = [];
    document.getElementById("disp").value = result;
    tempdata = result;
    // }
}

function clearinput() {
    result = '';
    arr = [];
    enterdata = "";
    tempdata = "";
    document.getElementById("disp").value = "";
}
