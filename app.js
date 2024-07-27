const lift=document.querySelector("#lift");
const changeFloor = (floorNum)=>{
    if(floorNum==0){
        lift.src="Lift-Close.png"
        lift.className="";
        lift.classList.add("ground");
        setTimeout(()=>{
            lift.src="Lift-Open.png"
        },1000)
    }
    else if(floorNum==1){
        lift.src="Lift-Close.png"
        lift.className="";
        lift.classList.add("first");
        setTimeout(()=>{
            lift.src="Lift-Open.png"
        },1000)
    }
    else if(floorNum==2){
        lift.src="Lift-Close.png"
        lift.className="";
        lift.classList.add("second");
        setTimeout(()=>{
            lift.src="Lift-Open.png"
        },1000)
    }
    else if(floorNum==3){
        lift.src="Lift-Close.png"
        lift.className="";
        lift.classList.add("third");
        setTimeout(()=>{
            lift.src="Lift-Open.png"
        },1000)
    }
}