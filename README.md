# Movement-library.js
Una semplice libreria per JS che facilita la programmazione di movimenti e spostamenti per oggetti in 2d.

<div align="center">

  ![State](https://img.shields.io/badge/State%3A-Making-white?style=flat-square)
  <!-- [![CodeQL](https://github.com/Croc-Prog-github/Movement-library.js/actions/workflows/github-code-scanning/codeql/badge.svg?style=flat-square&branch=main)](https://github.com/Croc-Prog-github/Movement-library.js/actions/workflows/github-code-scanning/codeql) -->
</div>
<hr>
<div align="center">

  <!-- ![Downloads](https://img.shields.io/github/downloads/Croc-Prog-github/Movement-library.js/total) -->
  ![GitHub Repo stars](https://img.shields.io/github/stars/Croc-Prog-github/Movement-library.js?style=flat-square&color=yellow)
  ![GitHub repo size](https://img.shields.io/github/repo-size/Croc-Prog-github/Movement-library.js?style=flat-square)
  ![Code quality](https://img.shields.io/badge/Code%20Quality-B-chocolate?style=flat-square)
  ![Licenze](https://img.shields.io/badge/licenze-MIT-blue?style=flat-square&link=https%3A%2F%2Fgithub.com%2FCroc-Prog-github%2FMovement-library.js%2Fblob%2Fmain%2FLICENSE.md)
  <!-- ![Manteined](https://img.shields.io/badge/Aggiornamenti-SI!-green) -->
  <!-- ![Contributors](https://img.shields.io/github/contributors/Croc-Prog-github/Movement-library.js?style=flat-square) -->
</div>

## Utilizzo
Per utilizzare la libreria segui i passaggi sottostanti.
1. **Download**:
Scarica il file libreria (dall'ultimo Relase stabile) in base al linguaggio che utilizzi: [JavaScript](https://github.com/Croc-Prog-github/Probability-Manager.js/blob/v1.0.1/core/Probability-Manager.js) oppure [TypeScript](https://github.com/Croc-Prog-github/Probability-Manager.js/blob/v1.0.1/core/Probability-Manager.ts)
2. Sposta il file nella directory del tuo progetto.
3. **Dichiarazione con classe**: In un altro file JS o TS, inserisci in alto la stringa: `const mover = new MoverJS(element, position);` per dichiarare l'utilizzo della libreria. Se lo vuoi usare in nel tag script in html, dichiara in head: `<script src="/Movement-library.js"></script>` (eventualmente aggiorna il path).
4. **Dichiarazione con moduli ES6**: In un altro file JS o TS, inserisci in alto la stringa: `import mover from "https://raw.githubusercontent.com/Croc-Prog-github/Movement-library.js/refs/heads/main/core/Movement-library.js"`. Nota: questa stringa ti dà accesso all'ultimo commit sul file citato e potrebbe non essere stabile, usalo quando c'è un rilascio. 
5. Inizia a scrivere codice, usando i comandi illustrati appena sotto.

<!-- ## Comandi
In questa sezione sono specificati tutti i comandi utilizzabili, con la loro relativa spiegazione.<br>
**`MoverJS(element, position)`**(constructor) Aquisisce per la classe l'elemento e il tipo di posizionamento.
- **element**: l'elemento che deve essere mosso. Deve essere riempito con un selettore per HTML come: document.getElementById('player');
- **position**: Inserisci i valori (stringa) che vengono usati nella dichiarazione position in CSS. Esempio: "absolute", "relative",... -->
## Comandi

In questa sezione sono specificati tutti i comandi utilizzabili, con la loro relativa spiegazione.

**`MoverJS(element, position)`** (constructor)
Viene utilizzato per creare un'istanza di `MoverJS`, acquisendo l'elemento HTML e il suo tipo di posizionamento.
* **element**: L'elemento che deve essere mosso. Deve essere ottenuto tramite selettori come `document.getElementById('player')`.
* **position**: Una stringa che rappresenta il valore della proprietà `position` in CSS (es. `"absolute"`, `"relative"`, ...).<br>

**`mover.achieve.setXY(x, y)`**
Imposta manualmente le coordinate dell'elemento.
* **x**: La coordinata orizzontale in pixel.
* **y**: La coordinata verticale in pixel.<br>

**`mover.achieve.randomXY()`**
Posiziona l'elemento in una posizione casuale all'interno della finestra del browser.<br>

**`mover.achieve.idElement(id)`**
Posiziona l'elemento nella stessa posizione di un altro elemento HTML specificato tramite `id`.
* **id**: L'id dell'elemento HTML di riferimento.<br>

**`mover.achieve.mouseFromEvent(mouseEvent)`**
Posiziona l'elemento nelle coordinate correnti del mouse, prendendo i valori da un evento mouse.
* **mouseEvent**: L’evento `MouseEvent` da cui vengono estratte le coordinate (`clientX`, `clientY`).<br>

**`mover.getRandomX()`**
Restituisce una coordinata casuale sull’asse X, all’interno della larghezza della finestra del browser.<br>

**`mover.getRandomY()`**
Restituisce una coordinata casuale sull’asse Y, all’interno dell’altezza della finestra del browser.<br>

**`mover.glideAt(x, y, seconds)`**
Sposta l’elemento verso una posizione specifica (`x`, `y`) in un tempo determinato, con animazione fluida.
* **x**: Coordinata finale sull’asse X.
* **y**: Coordinata finale sull’asse Y.
* **seconds**: Tempo dell’animazione in secondi.<br>

**`mover.glideAtIdElement(id, seconds)`**
Sposta l’elemento verso la posizione di un altro elemento HTML (selezionato tramite `id`) in un tempo determinato.
* **id**: L’id dell’elemento di riferimento.
* **seconds**: Tempo dell’animazione in secondi.<br>

**`mover.punteInDirection(degrees)`**
Ruota l’elemento di un certo numero di gradi.
* **degrees**: il numero dell’angolo di rotazione in gradi (0 = verso destra, 90 = verso il basso).<br>

**`mover.punteTowardsId(targetId)`**
Ruota l’elemento in direzione di un altro elemento specificato tramite `id`.
* **targetId**: L’id dell’elemento verso cui ruotare.<br>

**`mover.changeX(dx)`**
Muove l’elemento di un certo valore lungo l’asse X, a partire dalla sua posizione attuale.
* **dx**: Valore in pixel da aggiungere (positivo = destra, negativo = sinistra).<br>

**`mover.changeY(dy)`**
Muove l’elemento di un certo valore lungo l’asse Y, a partire dalla sua posizione attuale.
* **dy**: Valore in pixel da aggiungere (positivo = giù, negativo = su).<br>
