let firstPerson = ["Arezoo", "Yousefi", "1536 Salis", 41];
let secondPerson = ["Ali", "Miri", "1482 Salis", 47];
let stringFirstPerson =
 firstPerson.reduce((strings, info) =>{
    return strings + " " + info;
});
let stringSecondPerson = secondPerson.reduce((strings, info) =>{
    return strings + " " + info;
})
if(stringFirstPerson === stringSecondPerson){
    console.log( "they are the same")
}else {
    console.log(`different person\n${stringFirstPerson}\n${stringSecondPerson}`);
}