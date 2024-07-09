class Mover {
  constructor(element) {
    this.element = element;
    this.element.style.position = 'absolute'; // Assicurati che l'elemento sia posizionato in modo assoluto
  }
    
  achieve = {
    XY: (x, y) => {
      this.element.style.left = `${x}px`;
      this.element.style.top = `${y}px`;
    },

    randomXY: () => {
      this.achieve.XY((Math.random() * window.innerWidth), (Math.random() * window.innerHeight));
    },

    idElement: (id) => {
      const target = document.getElementById(id);
      if (target) {
        const rect = target.getBoundingClientRect();
        this.achieve.XY(rect.left + window.scrollX, rect.top + window.scrollY);
      }
    },

    mouseFromEvent: (mouseEvent) => {
      const x = mouseEvent.clientX;
      const y = mouseEvent.clientY;
      this.achieve.XY(x, y);
    },

    mouse: () => {
      const moveToMouse = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        this.achieve.XY(x, y);
      };
      document.addEventListener('mousemove', moveToMouse, { once: true });
    }
  }

  glideAt(x, y, seconds) {
    this.element.style.transition = `all ${seconds}s`;
    this.achieve.XY(x, y);
    setTimeout(() => {
      this.element.style.transition = ''; // Rimuove la transizione dopo che è completata
    }, seconds * 1000);
  }

  punteInDirection(degrees) {
    this.element.style.transform = `rotate(${degrees}deg)`;
  }

  changeX(dx) {
    const currentX = parseInt(this.element.style.left) || 0;
    this.achieve.XY(currentX + dx, parseInt(this.element.style.top) || 0);
  }

  changeY(dy) {
    const currentY = parseInt(this.element.style.top) || 0;
    this.achieve.XY(parseInt(this.element.style.left) || 0, currentY + dy);
  }
}