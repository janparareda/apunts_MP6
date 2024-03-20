const paraules = ['gat', 'ordinador', 'platja', 'llibre', 'javascript'];
let paraulaSecreta = '';
let lletresEndevinades;
let intentsRestants;
let guanys = false;

function seleccionarParaulaAleatoria() {
  paraulaSecreta = paraules[Math.floor(Math.random() * paraules.length)];
  lletresEndevinades = Array(paraulaSecreta.length).fill('_');
  intentsRestants = 6;
}

function mostrarProgresDelJoc() {
  alert(`Paraula: ${lletresEndevinades.join(' ')}\nIntents restants: ${intentsRestants}\n`);
}

function gestionarEntrada() {
  while (intentsRestants > 0 && lletresEndevinades.includes('_')) {
    const lletraIntroduida = prompt('Introdueix una lletra:');
    if (lletraIntroduida === null) {
      return; // L'usuari ha cancel·lat el prompt, sortim de la funció.
    }
    const lletra = lletraIntroduida.toLowerCase();
    if (lletra.length === 1 && /^[a-zàáâäæãåāçćčđďèéêëēėęěîïíīįìøōõòóœøőõßśšûüùúūůŵÿýżžźñ]+$/.test(lletra)) {
      if (!lletresEndevinades.includes(lletra) && !paraulaSecreta.includes(lletra)) {
        intentsRestants--;
      }
      for (let i = 0; i < paraulaSecreta.length; i++) {
        if (paraulaSecreta[i].toLowerCase() === lletra) {
          lletresEndevinades[i] = paraulaSecreta[i];
        }
      }
      mostrarProgresDelJoc();
    } else {
      alert('Si us plau, introdueix una sola lletra vàlida.');
    }
  }
  comprovarGuanyarOPerdre();
}

function comprovarGuanyarOPerdre() {
  if (!lletresEndevinades.includes('_')) {
    guanys = true;
    alert('Felicitats! Has guanyat!');
  } else if (intentsRestants === 0) {
    alert(`Oh no! Has perdut! La paraula era: ${paraulaSecreta}`);
  }

  if (confirm(guanys ? 'Vols jugar una altra vegada?' : 'Vols intentar-ho de nou?')) {
    inicialitzarJoc();
  }
}

function inicialitzarJoc() {
  guanys = false;
  seleccionarParaulaAleatoria();
  mostrarProgresDelJoc();
  gestionarEntrada();
}

// Iniciar el joc
inicialitzarJoc();
