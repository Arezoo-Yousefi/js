let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
let removedItems = mutants.filter((mutant) =>{
    if(mutant !== "Magneto" && mutant !== "Iceman" && mutant!== "Gambit"){
        return mutant;
    }
})
console.log(removedItems);