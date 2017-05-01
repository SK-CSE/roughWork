/*
https://www.hackerrank.com/challenges/array-left-rotation
*/

function processData(input) {
    //Enter your code here
    var arr = input.split('\n');
    var arr1 = arr[1].split(' ');
    var inputNo = arr[0].split(' ');
    var n = parseInt(inputNo[0],10);
    var d = parseInt(inputNo[1],10);
    var temp1 = arr1.slice(0,d);
    var temp2 = arr1.slice(d,n);
    var temp3 = temp2.concat(temp1);
    var res = "";
    temp3.forEach(function(x){
        res +=x+" ";
    });
    console.log(res);
}  

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});