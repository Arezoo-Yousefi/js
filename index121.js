const game = ["Grand Theft Auto V", "The Last of Us Remastered", "Persona 5", "Metal Gear Solid V", "Uncharted 4", "Journey", "Bloodborne", "The Witcher 3", "Diablo III"];
game[0] = "FIFA 18";
game[3] = "FIFA 17";
game[2] = "FIFA 16";
for(let i = 0; i <= game.length - 1; i++){
    console.log(game[i]);
}