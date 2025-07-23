function mostrarCarta(tipo) {
  // Oculta menú
  document.getElementById("menuInicial").classList.remove('visible');
  document.getElementById("menuInicial").classList.add("novisible");

  // Muestra visor
  document.getElementById("visorCarta").classList.remove("novisible");
  document.getElementById("visorCarta").classList.add('visible');

  // Muestra botón "Volver"
  document.getElementById("botonAtras").classList.remove("novisible");

  // Muestra link al PDF
  const pdfviewer = document.getElementById("pdfLink");
  pdfviewer.classList.remove("novisible");
  pdfviewer.classList.add("visible");

  // Muestra botones del slider
  document.querySelectorAll(".slider-button").forEach(btn => {
    btn.classList.remove("novisible");
  });

  // Referencia al contenedor
  const contenedor = document.getElementById("cartaImagenes");
  contenedor.innerHTML = "";

  let folder = "";
  let cantidad = 0;

  if (tipo === "platos") {
    folder = "carpetacocina";
    cantidad = 8;
    pdfviewer.href = "assets/carta-cocina-tr.pdf";
  } else if (tipo === "cocteles") {
    folder = "carpetabarra";
    cantidad = 8;
    pdfviewer.href = "assets/carta-cocteles-tr.pdf";
  }

  // Espera a que se carguen todas las imágenes antes de hacer scroll
  let loadedImages = 0;

  for (let i = 1; i <= cantidad; i++) {
    const img = document.createElement("img");
    img.src = `assets/${folder}/${i}.jpg`;

    img.onload = () => {
      loadedImages++;
      if (loadedImages === cantidad) {
        // Cuando todas las imágenes se han cargado
        contenedor.scrollLeft = 0;
      }
    };

    contenedor.appendChild(img);
  }
}


function back() {
  // Oculta visor
  document.getElementById('visorCarta').classList.remove('visible');
  document.getElementById("visorCarta").classList.add('novisible');

  // Oculta botón "Volver"
  document.getElementById("botonAtras").classList.add("novisible");

  // Muestra menú inicial
  document.getElementById('menuInicial').classList.remove('novisible');
  document.getElementById('menuInicial').classList.add('visible');

  // Oculta el enlace al PDF
  const pdfviewer = document.getElementById("pdfLink");
  pdfviewer.href = "";
  pdfviewer.classList.remove("visible");
  pdfviewer.classList.add("novisible");

  // Oculta botones del slider
  document.querySelectorAll(".slider-button").forEach(btn => {
    btn.classList.add("novisible");
  });

  // Limpia imágenes
  document.getElementById("cartaImagenes").innerHTML = "";
}

function scrollSlider(direction) {
  const container = document.getElementById("cartaImagenes");
  const scrollAmount = container.clientWidth;
  container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}



