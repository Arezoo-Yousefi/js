const femaleStudents = ["Arezoo", "Neda", "Ala", "Anita", "Mantra"];
const maliStudents = ["Ali", "Ahmad", "Reza", "Sadegh", "Hasan"];
const students = femaleStudents.concat(maliStudents);
const sortedList = students. sort();
for (let i = 0; i < femaleStudents.length; i++){
    console.log(`${femaleStudents[i]}: ${i + 1}`);
}
let i = 0
while(i < maliStudents.length){
    console.log(`${maliStudents[i]}: ${i + 1}`);
    i++;
}
for (i = 0; i < students.length; i++){
    console.log(students[i]);
}