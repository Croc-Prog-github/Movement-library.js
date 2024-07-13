const element = document.getElementById('element');
const mover = new MoverJS(element);

mover.achieve.randomXY();

//mover.achieve.setXY(0, 0)
//mover.achieve.idElement('movable2')

document.addEventListener('click', (event) => {
    mover.achieve.mouseFromEvent(event)
});

mover.punteTowardsId('movable2')
mover.glideAtIdElement('movable2', 3);

//mover.glideAt(0, 0, 5);
//mover.glideAt(mover.getRandomX(), mover.getRandomY(), 5)

//mover.punteInDirection(90);

//mover.changeX(50);
//mover.changeY(50);

//mover.achieve.mouse(); DEPRECATED
