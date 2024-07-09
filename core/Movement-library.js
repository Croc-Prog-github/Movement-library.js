class Mover {
  constructor(element) {
    this.element = element;
    this.element.style.position = 'absolute'; // Assicurati che l'elemento sia posizionato in modo assoluto
  }
    
  raggiungi = {
    XY: (x, y) => {
      this.element.style.left = `${x}px`;
      this.element.style.top = `${y}px`;
    },

    idElement: (id) => {
      const target = document.getElementById(id);
      if (target) {
        const rect = target.getBoundingClientRect();
        this.raggiungi.XY(rect.left + window.scrollX, rect.top + window.scrollY);
      }
    },

    mouseFromEvent: (mouseEvent) => {
      const x = mouseEvent.clientX;
      const y = mouseEvent.clientY;
      this.raggiungi.XY(x, y);
    },

    mouse: () => {
      document.addEventListener('mousemove', (event) => {
        this.raggiungi.mouseFromEvent(event);
      });
    }
  }

  scivolaIn(seconds, x, y) {
    this.element.style.transition = `all ${seconds}s`;
    this.raggiungi.XY(x, y);
    setTimeout(() => {
      this.element.style.transition = ''; // Rimuove la transizione dopo che è completata
    }, seconds * 1000);
  }

  puntaInDirezione(degrees) {
    this.element.style.transform = `rotate(${degrees}deg)`;
  }

  cambiaX(dx) {
    const currentX = parseInt(this.element.style.left) || 0;
    this.raggiungi.XY(currentX + dx, parseInt(this.element.style.top) || 0);
  }

  cambiaY(dy) {
    const currentY = parseInt(this.element.style.top) || 0;
    this.raggiungi.XY(parseInt(this.element.style.left) || 0, currentY + dy);
  }
}