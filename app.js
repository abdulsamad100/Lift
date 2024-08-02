const liftTime = 1000;
const chainTime = 1200;
const waitTimeAfterOpen = 1000;
const floorSelector = '#floor-';
let liftQueue = [];
const lift = document.querySelector('#lift');
const chain = document.querySelector('#chain');
let isMoving = false;
let gDelay = 0;
let gStatus = true;
let currentFloor = 'G';

const changeFloor = (chainHeight, floor) => {
  gStatus = false;
  if (isMoving) {
    const btnPressed = document.querySelector(`${floorSelector}${floor}`);
    btnPressed.style.backgroundColor = 'red';
    btnPressed.disabled = true;
    liftQueue.push({ CH: chainHeight, f: floor });
    return;
  }
  isMoving = true;
  const toMove = { CH: chainHeight, f: floor };
  const btnPressed = document.querySelector(`${floorSelector}${toMove.f}`);
      btnPressed.style.transition = '.5s';
      btnPressed.style.backgroundColor = 'red';
  btnPressed.disabled = true;
  lift.src = 'Lift-Close.png';
  setTimeout(() => {
    chain.style.transition = `${chainTime}ms`;
    chain.style.height = `${toMove.CH}px`;
    setTimeout(() => {
      lift.src = 'Lift-Open.png';
      btnPressed.style.transition = '.5s';
      btnPressed.style.backgroundColor = '';
      btnPressed.disabled = false;
      currentFloor = floor;
      setTimeout(() => {
        isMoving = false;
        if (liftQueue.length > 0) {
          const nextMove = liftQueue.shift();
          changeFloor(nextMove.CH, nextMove.f);
        } else {
          setGround();
        }
      }, waitTimeAfterOpen);
    }, chainTime);
  }, liftTime);
};

const setGround = () => {
  gDelay = 0;
  gStatus = true;
  const chkGStatus = () => {
    if (!gStatus) {
      return;
    }
    if (gDelay >= 10) {
      if (currentFloor !== 'G') {
        changeFloor('375', 'G');
      }
    } else {
      gDelay++;
      setTimeout(chkGStatus, 1000);
    }
  };
  chkGStatus();
};

setGround();