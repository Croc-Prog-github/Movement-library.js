document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('movable');
  const mover = new Mover(element);

  // Raggiungi una posizione casuale
  mover.raggiungi.XY(Math.random() * window.innerWidth, Math.random() * window.innerHeight);

  // Raggiungi la posizione del puntatore del mouse al click
  document.addEventListener('click', (event) => {
    mover.raggiungi.mouseFromEvent(event);
  });

  // Scivola in 1 secondo alla posizione (200, 200)
  mover.scivolaIn(1, 200, 200);

  // Punta in direzione 45 gradi
  mover.puntaInDirezione(45);

  // Cambia la posizione X di 50 pixel
  mover.cambiaX(50);

  // Cambia la posizione Y di 50 pixel
  mover.cambiaY(50);
});