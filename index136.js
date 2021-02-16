let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
let newMutant = [];
mutants.forEach(function(mutant){
    if(mutant == "Iceman" || mutant == "Logan" || mutant == "Phoenix"){
        newMutant.push(mutant);
    }
})
console.log(newMutant.toString());