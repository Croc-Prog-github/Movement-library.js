class Mover {
  constructor(element) {
    this.element = element;
    this.element.style.position = 'absolute'; // Imposta position: absolute
  }
    
  achieve = {
    setXY: (x, y) => {
      this.element.style.left = `${x}px`;
      this.element.style.top = `${y}px`;
    },

    randomXY: () => {
      this.achieve.setXY((Math.random() * window.innerWidth), (Math.random() * window.innerHeight));
    },

    idElement: (id) => {
      const target = document.getElementById(id);
      if (target) {
        const rect = target.getBoundingClientRect();
        this.achieve.setXY(rect.left + window.scrollX, rect.top + window.scrollY);
      } else {
        console.error("The element with the id: " + target + " dosen't exist.")
      }
    },

    mouseFromEvent: (mouseEvent) => {
      const x = mouseEvent.clientX;
      const y = mouseEvent.clientY;
      this.achieve.setXY(x, y);
    },

    /*mouse: () => {
      const moveToMouse = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        this.achieve.setXY(x, y);
      };
      document.addEventListener('mousemove', moveToMouse, { once: true });
    }*/
  }

  glideAt(x, y, seconds) {
    this.element.style.transition = `left ${seconds}s, top ${seconds}s`; // Animazione su left e top
    this.raggiungi.setXY(x, y);
    setTimeout(() => {
      this.element.style.transition = ''; // Rimuove la transizione dopo che è completata
    }, seconds * 1000);
  }

  punteInDirection(degrees) {
    this.element.style.transform = `rotate(${degrees}deg)`;
  }

  punteTowardsId(TargetId) { //Comment
    console.error("The element with the id: " + TargetId + " dosen't exist.")
  }

  changeX(dx) {
    const currentX = parseInt(this.element.style.left) || 0;
    this.achieve.setXY(currentX + dx, parseInt(this.element.style.top) || 0);
  }

  changeY(dy) {
    const currentY = parseInt(this.element.style.top) || 0;
    this.achieve.setXY(parseInt(this.element.style.left) || 0, currentY + dy);
  }
}