function ChangeImage(){
    var pic = document.getElementById("bulb");
    if(pic.src.match("on")){
        console.log("on");
        pic.src= "off bulb.jpg";
    }
    else{
        console.log("off");
        pic.src= "on bulb.jpg";
    }
}