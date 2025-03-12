let plantHeight = 100; // Altura inicial da planta
let regado = 0; // Contador de quantas vezes a planta foi regada

function regar() {
  regado++;

  // A planta cresce e mostra uma mensagem diferente a cada vez que é regada
  if (regado === 1) {
    document.getElementById('mensagem').innerText = "A planta recebeu um pouco de água, está começando a crescer!";
  } else if (regado === 2) {
    document.getElementById('mensagem').innerText = "A planta está crescendo bem! Mais um pouco de amor e ela vai florescer!";
  } else if (regado >= 3) {
    document.getElementById('mensagem').innerText = "Uau! A planta cresceu bastante, ela está quase pronta para florescer!";
  }

  // A planta vai crescer com cada clique
  plantHeight += 20;
  document.getElementById('plant').style.height = `${plantHeight}px`;
}
