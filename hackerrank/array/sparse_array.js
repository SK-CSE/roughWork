// https://www.hackerrank.com/challenges/sparse-arrays

function processData(input) {
    //Enter your code here
    var inputArr = input.split('\n');
    var n = parseInt(inputArr[0],10);
    var fArr = inputArr.slice(1,n+1);
    var d = inputArr[n+1];
    var c = 0;
    var sArr = inputArr.slice(n+2,inputArr.length);
    sArr.forEach(function(x){
        fArr.forEach(function(y){
            if(x==y){
                c++;
            }
        });
        console.log(c);
        c = 0;
    });
    

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
