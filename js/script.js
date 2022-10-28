let iconos;
let selectors = [];

generarTablero();

function cargarIconos() {
  iconos = [
    `<img src="imagenes/cel.jpg">`,
    `<img src="imagenes/coca.jpg">`,
    `<img src="imagenes/dinero.jpg">`,
    `<img src="imagenes/formal.jpg">`,
    `<img src="imagenes/gangsta.jpg">`,
    `<img src="imagenes/gato.jpg">`,
    `<img src="imagenes/hasbulla.jpg">`,
    `<img src="imagenes/iphone.jpg">`,
    `<img src="imagenes/moto.jpg">`,
    `<img src="imagenes/saludo.jpg">`,
    `<img src="imagenes/ufc.jpg">`,
   /*  `<img src="imagenes/descarga.jpg">`,
    `<img src="imagenes/baño.jpg">`,
    `<img src="imagenes/burger.jpg">`,
    `<img src="imagenes/carota.jpg">`,
    `<img src="imagenes/chago.jpg">`,
    `<img src="imagenes/chef.jpg">`,
    `<img src="imagenes/despierto.jpg">`,
    `<img src="imagenes/mona.jpg">`,
    `<img src="imagenes/sasuke.jpg">`,
    `<img src="imagenes/tomando.jpg">`,
    `<img src="imagenes/pistola.jpg">`,
     */
    
  ];
}

function generarTablero() {
  cargarIconos();

  let tablero = document.getElementById("tablero");
  let tarjetas = [];
  let len = iconos.length + 4;
  for (let i = 0; i < len; i++) {
    tarjetas.push(`
        <div class="card-area" onclick="cardSelector(${i})">
            <div class="card" id="card${i}">
                <div class="face front" id="back${i}">
                ${iconos[0]}
                </div>
                <div class="face back"><img src="imagenes/hasburama.jpg"></div>
            </div>
        </div>
      `);
    if (i % 2 == 1) {
      iconos.splice(0, 1);
    }
  }
  tarjetas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = tarjetas.join("");
}

function cardSelector(i) {
  let card = document.getElementById("card" + i);
  if (card.style.transform != "rotateY(180deg)") {
    card.style.transform = "rotateY(180deg)";
    selectors.push(i);
  }
  if (selectors.length == 2) {
    desSelectors(selectors);
    selectors = [];
  }
}

function desSelectors(selectors) {
  setTimeout(() => {
    let back1 = document.getElementById("back" + selectors[0]);
    let back2 = document.getElementById("back" + selectors[1]);

    if (back1.innerHTML != back2.innerHTML) {
      let c1 = document.getElementById("card" + selectors[0]);
      let c2 = document.getElementById("card" + selectors[1]);
      c1.style.transform = "rotateY(0deg)";
      c2.style.transform = "rotateY(0deg)";
    } else {
      back1.style.opacity = 0.1;
      back2.style.opacity = 0.1;
    }
  }, 1000);
}
