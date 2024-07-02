//Speed Detector
function checkSpeed(speed) {
    //if the user inputs an invalid number or character
if (isNaN(speed)){
    console.log("invalid input.Please enter a number.");
}
    const speedLimit=70;
    let demeritPoints=0;
    if(speed > speedLimit){
        demeritPoints=Math.ceil((speed-speedLimit)/5);
    }
    if(demeritPoints===0){
        console.log('Ok');
    }else{
        console.log('Points',demeritPoints);
        if(demeritPoints>12){
            console.log('License suspended');
        }
    }
}
let speed=Number(prompt('enter car speed(km|hr)'));//where the driver inputs the speed
checkSpeed(speed);//checks the users/drivers input and places it as an argument