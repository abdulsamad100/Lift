const liftTime = 1000;
const chainTime = 1200;
const waitTimeAfterOpen = 1000;
const floorSelector = '#floor-';
let liftQueue = [];
const lift = document.querySelector('#lift');
const chain = document.querySelector('#chain');
let isMoving = false;

const changeFloor = (chainHeight, floor) => {
  if (isMoving) {
    const btnPressed = document.querySelector(`${floorSelector}${floor}`);
    btnPressed.style.backgroundColor = 'red';
    btnPressed.disabled="disabled";
    liftQueue.push({ CH: chainHeight, f: floor });
    return;
  }
  isMoving = true;
  const toMove = { CH: chainHeight, f: floor };
  const btnPressed = document.querySelector(`${floorSelector}${toMove.f}`);
  btnPressed.style.backgroundColor = 'red';
  btnPressed.disabled="disabled";
  lift.src = 'Lift-Close.png';
  setTimeout(() => {
    chain.style.transition = `${chainTime}ms`;
    chain.style.height = `${toMove.CH}px`;
    setTimeout(() => {
      lift.src = 'Lift-Open.png';
      btnPressed.style.backgroundColor = '';
      btnPressed.disabled="";
      console.backgroundColor
      setTimeout(() => {
        isMoving = false;
        if (liftQueue.length > 0) {
          const nextMove = liftQueue.shift();
          changeFloor(nextMove.CH, nextMove.f);
        }
      }, waitTimeAfterOpen);
    }, chainTime);
  }, liftTime);
};