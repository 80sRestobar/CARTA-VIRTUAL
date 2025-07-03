function mostrarCarta(tipo) {
  document.getElementById("menuInicial").classList.remove('visible');
  document.getElementById("visorCarta").classList.add('visible');

  if (tipo === "platos") {
    document.getElementById('pdfviewer').href = "assets/carta-cocina.pdf";
  } else if (tipo === "cocteles") {
    document.getElementById('pdfviewer').href = "assets/carta-cocteles.pdf";
  }
}

function back() {
  document.getElementById('visorCarta').classList.remove('visible');
  document.getElementById('menuInicial').classList.add('visible');
  document.getElementById('pdfviewer').href = "";
}
