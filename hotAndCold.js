//https://www.hackerrank.com/contests/hourrank-20/challenges/hot-and-cold

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function isSatisfiable(c1, c2, h1, h2){
    // Complete this function
    
    if(c2>=c1){
       var x = c2 
    }else{
        var x = c1 
    }
    if(x<= h1 && x<=h2){
        return 'YES';
    }else{
        return 'NO';
    }
}

function main() {
    // Return "YES" if all four conditions can be satisfied, and "NO" otherwise
    var c1_temp = readLine().split(' ');
    var c1 = parseInt(c1_temp[0]);
    var c2 = parseInt(c1_temp[1]);
    var h1 = parseInt(c1_temp[2]);
    var h2 = parseInt(c1_temp[3]);
    var result = isSatisfiable(c1, c2, h1, h2);
    process.stdout.write(""+result+"\n");

}
