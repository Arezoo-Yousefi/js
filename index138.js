let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
let newMutant = mutants.map((mutant) =>{
    if(mutant === "Professor X" || mutant === "Logan" || mutant === "Phoenix" || mutant === "Gambit"){
        return("<3 " + mutant);
    }else{
        return(mutant);
    }
});
console.log(mutants);
console.log(newMutant);