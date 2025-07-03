function mostrarCarta(tipo) {
  document.getElementById("menuInicial").classList.remove('visible');
  document.getElementById("visorCarta").classList.add('visible');

  if (tipo === "platos") {
    document.getElementById('pdfviewer').src = "assets/Carta Cocina - 80\'s Restobar.pdf";
  } else if (tipo === "cocteles") {
    document.getElementById('pdfviewer').src = "assets/Carta de Cócteles - 80\'s Restobar.pdf";
  }
}

function volver() {
  document.getElementById('visorCarta').classList.remove('visible');
  document.getElementById('menuInicial').classList.add('visible');
  document.getElementById('pdfviewer').src = '';
}
