### from Hackerrank hourrank-19 conest

[click here for question](https://www.hackerrank.com/contests/hourrank-19/challenges/recover-the-array)

solution :
```js
file = file.map(Number);
    var count =0;
    var x = file[0];
   
    function inc(x){
      if(x< file.length){
        count++;
        var y = x+1+file[x+1];
        inc(y);
      }
    }
    
     inc(x);
    console.log(count);
```
