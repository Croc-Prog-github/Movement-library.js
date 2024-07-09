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
      this.achieve.setXY(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    },

    idElement: (id) => {
      const target = document.getElementById(id);
      if (target) {
        const rect = target.getBoundingClientRect();
        this.achieve.setXY(rect.left + window.scrollX, rect.top + window.scrollY);
      } else {
        console.error("The element with the id: " + id + " doesn't exist.");
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
    this.achieve.setXY(x, y);
    setTimeout(() => {
      this.element.style.transition = ''; // Rimuove la transizione dopo che è completata
    }, seconds * 1000);
  }

  punteInDirection(degrees) {
    this.element.style.transform = `rotate(${degrees}deg)`;
  }

  punteTowardsId(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      const rect = target.getBoundingClientRect();
      const elementRect = this.element.getBoundingClientRect();
      const deltaX = rect.left - elementRect.left;
      const deltaY = rect.top - elementRect.top;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      this.punteInDirection(angle);
    } else {
      console.error("The element with the id: " + targetId + " doesn't exist.");
    }
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