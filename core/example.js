document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('movable');
  const mover = new Mover(element);

  // Raggiungi una posizione casuale
  //mover.achieve.randomXY();

  mover.achieve.setXY(0, 0)

  // Raggiungi la posizione del puntatore del mouse al click
  /*document.addEventListener('click', (event) => {
    mover.achieve.mouseFromEvent(event);
  });*/

  // Scivola in 1 secondo alla posizione (200, 200)
  mover.glideAt(200, 200, 5);

  // Punta in direzione 45 gradi
  mover.punteInDirection(90);

  // Cambia la posizione X di 50 pixel
  //mover.changeX(50);

  // Cambia la posizione Y di 50 pixel
  //mover.changeY(50);

  // Raggiungi la posizione del mouse quando viene chiamato
  //mover.achieve.mouse(); DEPRECATED
});