function mostrarCarta(tipo) {
  document.getElementById("menuInicial").classList.remove('visible');
  document.getElementById("menuInicial").classList.add("novisible");
  document.getElementById("visorCarta").classList.remove("novisible")
  document.getElementById("visorCarta").classList.add('visible');

  const contenedor = document.getElementById("cartaImagenes");
  contenedor.innerHTML = "";

  let folder = "";
  let cantidad = 0;

  if (tipo === "platos") {
    folder = "carpetacocina";
    cantidad = 8;
  } else if (tipo === "cocteles") {
    folder = "carpetabarra";
    cantidad = 7;
  }

  for (let i = 1; i <= cantidad; i++) {
    const img = document.createElement("img");
    img.src = `assets/${folder}/${i}.png`;
    contenedor.appendChild(img);
  }
}


function back() {
  document.getElementById('visorCarta').classList.remove('visible');
  document.getElementById("visorCarta").classList.add('novisible');
  document.getElementById('menuInicial').classList.remove('novisible');
  document.getElementById('menuInicial').classList.add('visible');
  document.getElementById('pdfviewer').src = "";
}
