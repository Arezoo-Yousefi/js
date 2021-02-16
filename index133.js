let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
for (let i = 0; i<mutants.length; i++){
    if(mutants[i] !== "Magneto"){
    console.log(mutants[i]);
    }else{
    break;
    }
}
const mutants1 =[];
const mutants2 = [];
if(mutants.indexOf("Magneto") != -1){
  for(let i = 0; i < mutants.indexOf("Magneto"); i++){
  mutants1.push(mutants[i]);
  } 
  for(let i = mutants.indexOf("Magneto") + 1; i < mutants.length; i++){
      mutants2.push(mutants[i]);
  } 
  mutants = mutants1.concat(mutants2);  
}
for(i = 0; i < mutants.length; i++){
console.log(mutants[i].toUpperCase());
}