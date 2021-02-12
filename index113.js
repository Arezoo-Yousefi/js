function getShapePerimeter(base, height){
    let perimeter;
    if(base == height){
        perimeter = base * 4;
    }else{
        perimeter = (base + height) * 2;
    }
    console.log(`${perimeter} is the shape perimeter`);
    if(perimeter > 100){
        console.log("the perimeter is too big");
    }else{
        console.log('The perimeter is fine');
    }
}
getShapePerimeter(4, 4);
getShapePerimeter(8, 6);
getShapePerimeter(25, 30);
getShapePerimeter(30, 30);