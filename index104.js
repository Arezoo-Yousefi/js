const fibonacci = function(){
    let f0 = 0;
    let f1 = 1;
    let sum = 0;
    for(let i = 1; i <= 10; i++)
    {
        console.log(sum);
        f0 = f1;
        f1 = sum;
        sum = f0 + f1;
    }
}
fibonacci();
fibonacci();
fibonacci();