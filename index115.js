function getLongerText(text1, text2){
    let long;
    if(text1.length > text2.length ){
        long = text1;
    }else if(text2.length > text1.length){
        long = text2;
    }else {
        long = "same";
    }
    console.log(long);
}
getLongerText("Arezoo", "Ali");
getLongerText("Mantra", "Parmida");
getLongerText("Arezoo", "Mantra");