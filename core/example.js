document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('movable');
  const mover = new Mover(element);

  // Raggiungi una posizione casuale
  mover.raggiungi.randomXY();

  // Raggiungi la posizione del puntatore del mouse al click
  /*document.addEventListener('click', (event) => {
    mover.raggiungi.mouseFromEvent(event);
  });*/

  // Scivola in 1 secondo alla posizione (200, 200)
  //mover.scivolaIn(1, 200, 200);

  // Punta in direzione 45 gradi
  mover.puntaInDirezione(90);

  // Cambia la posizione X di 50 pixel
  //mover.cambiaX(50);

  // Cambia la posizione Y di 50 pixel
  //mover.cambiaY(50);

  // Raggiungi la posizione del mouse quando viene chiamato
  //mover.raggiungi.mouse();
});