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

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var plus=0;
    var minus=0;
    var zero=0;
    for(var i=0;i<n;i++){
        if(arr[i]==0){
           zero++; 
        }else{
        if(arr[i]<0){
            minus++;
        }else{
            plus++;
        }
        }
    }
console.log(parseFloat(plus/n).toFixed(6));
    console.log(parseFloat(minus/n).toFixed(6));
    console.log(parseFloat(zero/n).toFixed(6));
}
