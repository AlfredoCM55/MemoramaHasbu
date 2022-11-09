let iconos;
let selectors = [];
let puntos;
const aciertoColor = document.getElementById("button")
const aciertoColor1 = document.getElementById("btnColor")
const aciertoColor2 = document.getElementById("btnColor1")


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
    `<img src="imagenes/descarga.jpg">`,
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
     
    
  ];
}



function generarTablero() {
  aciertoColor.style.background= "white";
  aciertoColor1.style.background= "white"
  aciertoColor2.style.background= "white"

  puntos = 0
  document.getElementById("puntos").innerHTML = "Puntos:" + puntos
  cargarIconos();
  selectors = []
  let tablero = document.getElementById("tablero");
  let tarjetas = [];
  for (let i = 0; i < 16; i++) {
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
      aciertoColor.style.background= "red"
      aciertoColor1.style.background= "red"
      aciertoColor2.style.background = "white"
    } else {
      
      aciertoColor.style.background= "green"
      aciertoColor1.style.background= "white"
      aciertoColor2.style.background= "green"
      
      
      
      puntos++;
      document.getElementById("puntos").innerHTML = "Puntos: " + puntos
    }
  }, 1000);


     
  }

