function mostrarCarta(tipo) {
  // Oculta menú
  document.getElementById("menuInicial").classList.remove('visible');
  document.getElementById("menuInicial").classList.add("novisible");

  // Muestra visor
  document.getElementById("visorCarta").classList.remove("novisible");
  document.getElementById("visorCarta").classList.add('visible');

  // Muestra link al PDF
  const pdfviewer = document.getElementById("pdfLink");
  pdfviewer.classList.remove("novisible");
  pdfviewer.classList.add("visible");

  document.querySelectorAll(".slider-button").forEach(btn => {
  btn.classList.remove("novisible");
});

  const contenedor = document.getElementById("cartaImagenes");
  contenedor.innerHTML = "";

  let folder = "";
  let cantidad = 0;

  if (tipo === "platos") {
    folder = "carpetacocina";
    cantidad = 8;
    pdfviewer.href = "assets/carta-cocina.pdf";
  } else if (tipo === "cocteles") {
    folder = "carpetabarra";
    cantidad = 7;
    pdfviewer.href = "assets/carta-cocteles.pdf";
  }

  for (let i = 1; i <= cantidad; i++) {
    const img = document.createElement("img");
    img.src = `assets/${folder}/${i}.png`;
    contenedor.appendChild(img);
  }
}

function back() {
  // Oculta visor
  document.getElementById('visorCarta').classList.remove('visible');
  document.getElementById("visorCarta").classList.add('novisible');

  // Muestra menú inicial
  document.getElementById('menuInicial').classList.remove('novisible');
  document.getElementById('menuInicial').classList.add('visible');

  // Oculta el enlace al PDF
  const pdfviewer = document.getElementById("pdfLink");
  pdfviewer.href = "";
  pdfviewer.classList.remove("visible");
  pdfviewer.classList.add("novisible");

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


