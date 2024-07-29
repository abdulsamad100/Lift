const lift = document.querySelector("#lift");
const changeFloor = (floorNum) => {
    lift.style.paddingBottom = `${floorNum}px`;
}