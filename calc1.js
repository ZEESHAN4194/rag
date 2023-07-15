// var operators = ["+", "-", "/", "*"];
var arr = [];
var enterdata = "";
var tempdata = "";
// var sum=0; 
var result = '';
var temarr = [];
// var cleardata=  "";
var lastClicked = "";
// var bracketSwitch = "";
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
            // console.log('kali',arr);
        } else {
            arr.push(tempdata);
            tempdata = "";

        }
        arr.push(input);


        console.log('tts',tempdata);


    } else {

        // enterdata += input;
        // tempdata = "";

        tempdata += input;
        // input= Number(input);
        tempdata = Number(tempdata);



    }


}


function bracketfun(input) {
    document.getElementById("disp").value += input;
    // console.log("temp2",input);
    console.log("tmp1", tempdata);
    if (tempdata !== null) {
        arr.push(tempdata);
        // console.log("tjohuihnui");
    }

    tempdata = "";
    arr.push(input);
    console.log("tempdata2", tempdata);

    result = arr[0];

}

function forsubArr(newArr) {
    return newArr;
}

function equalclick() {

    if (tempdata == "") {

    } else {
        arr.push(tempdata);
    }




    newArr = arr.filter(forsubArr);
// console.log('tesin',newArr);
    index1 = newArr.indexOf("(");
    index2 = newArr.indexOf(")");
    // var mainsplice=newArr.splice(index1 + 1, index2);
    // var indesplc = slice(index1 + 1, index2);



    // // for brackets condition.................


    // for (let j = 0; j < newArr.length; j++) {
    // console.log('tes', newArr);

    if (newArr.includes("(")) {

        // console.log('brarray',newArr);
        for (let i = index1 + 1; i < index2; i++) {
            temarr.push(newArr[i]);
            console.log('t', newArr[i]);

        }

        console.log('newdat', temarr);

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
                if (temarr[j] === 0) dbz = 1;
                tr = temarr[j - 1] - temarr[j + 1];
                temarr.splice(j - 1, 3, tr);
                j = 0;

            }
        }

        for (let j = 0; j < temarr.length; j++) {
            if (temarr[j] === '+') {
                if (temarr[j] === 0) dbz = 1;
                tr = temarr[j - 1] + temarr[j + 1];

                temarr.splice(j - 1, 3, tr);
                j = 0;
                console.log('dffjsdafjsdakfh', tr);


            }
        }
        result2 = temarr[0];
        console.log("res2", result2);
        // result2 = "";
        // 
        newArr.splice(index1, index2+2, result2);
        temarr = [];
    }
  

// result2 =arr
console.log("jhjh", newArr);


if (newArr != "(") {

    // console.log('hi');
    //     return false;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === '/') {
            if (newArr[i] === 0) dbz = 1;
            tr = newArr[i - 1] / newArr[i + 1];
            newArr.splice(i - 1, 3, tr);
            // console.log(tr);
            i = 0;
        }

    }
    // console.log("divide", newArr);


    for (i = 0; i < newArr.length; i++) {

        if (newArr[i] === '*') {
            tr = newArr[i - 1] * newArr[i + 1];
            newArr.splice(i - 1, 3, tr);
            // console.log("multi", tr);
            i = 0;

        }
    }


    for (i = 0; i < newArr.length; i++) {

        if (newArr[i] === '-') {
            tr = newArr[i - 1] - newArr[i + 1];
            newArr.splice(i - 1, 3, tr);
            // console.log(tr);
            i = 0;
        }




    }

    for (i = 0; i < newArr.length; i++) {

        if (newArr[i] === '+') {
            tr = Number(newArr[i - 1]) + Number(newArr[i + 1]);

            newArr.splice(i - 1, 3, tr);
            // console.log(tr);
            // console.log(arr);
            i = 0;
        }

    }
} else {
    return false;
}



result = newArr[0];
console.log('resutl',result);

newArr = [];

// console.log('res', result);

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