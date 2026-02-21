function mostrarInfo(parte) {
  const titulo = document.getElementById("titulo");
  const descripcion = document.getElementById("descripcion");
  const imagen = document.getElementById("imagen");
  const modal = document.getElementById("modal");

  const info = {
    cpu: {
      titulo: "Procesador (CPU)",
      texto: "Se coloca alineando las marcas y asegurándolo con cuidado.",
      img: "https://t3.ftcdn.net/jpg/01/20/19/10/360_F_120191062_GiuDkiHSY1ObTgAofwJ5kp1s9uB6ldlr.jpg"
    },
    ram: {
      titulo: "Memoria RAM",
      texto: "Se inserta presionando hasta que encajen los seguros.",
      img: "https://compubit.com.co/wp-content/uploads/2023/04/Porque-es-importante-la-memoria-RAM-2-3-1024x535.jpg"
    },
    disco: {
      titulo: "Disco Duro / SSD",
      texto: "Se instala y conecta con cable de datos y energía.",
      img: "https://ss628.liverpool.com.mx/xl/1108422323.jpg"
    },
    placa: {
      titulo: "Placa Madre",
      texto: "Es la base donde se conectan todos los componentes.",
      img: "https://periodicotecno.com.mx/wp-content/uploads/2023/12/placa-madre.jpg"
    },
    fuente: {
      titulo: "Fuente de Poder",
      texto: "Distribuye la energía a todos los componentes.",
      img: "https://pcmartcolombia.com/wp-content/uploads/2020/09/PSU-004-1-min-2048x2048.jpg"
    }
  };

  titulo.innerText = info[parte].titulo;
  descripcion.innerText = info[parte].texto;
  imagen.src = info[parte].img;

  modal.classList.remove("oculto");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("oculto");
}

let ordenCorrecto = ["placa", "cpu", "ram", "disco", "fuente"];
let paso = 0;

function ensamblar(event, parte) {
  const estado = document.getElementById("estado");

  if (parte === ordenCorrecto[paso]) {
    paso++;
    event.target.classList.add("correcto");
    event.target.style.pointerEvents = "none";
    actualizarProgreso();

    if (paso === ordenCorrecto.length) {
      estado.innerText = "¡PC ensamblada correctamente!";
    } else {
      estado.innerText = "Paso actual: " + (paso + 1);
    }
  } else {
    event.target.classList.add("incorrecto");
    setTimeout(() => {
      event.target.classList.remove("incorrecto");
    }, 400);
    estado.innerText = "Orden incorrecto";
  }
}

function actualizarProgreso() {
  const porcentaje = (paso / ordenCorrecto.length) * 100;
  document.getElementById("barraProgreso").style.width = porcentaje + "%";
}

document.getElementById("formulario").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("mensajeFinal").innerText =
    "Registro completado. Excelente trabajo";
});

