function mostrarGaleria(tipo) {
    const galeriaIgreja = document.getElementById('galeria-igreja');
    const galeriaEmpresa = document.getElementById('galeria-empresa');
  
    galeriaIgreja.style.display = tipo === 'igreja' ? 'flex' : 'none';
    galeriaEmpresa.style.display = tipo === 'empresa' ? 'flex' : 'none';
  }
  