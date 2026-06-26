let pacientes = [];
const formulario = document.getElementById('formPersonas');
const cuerpoTabla = document.getElementById('cuerpoTabla');

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function renderizarTabla() {
  cuerpoTabla.innerHTML = '';
  pacientes.forEach((p, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${p.nom}</td>
      <td>${p.ape}</td>
      <td>${p.eda}</td>
      <td>${p.alt} m</td>
      <td>${p.pes} kg</td>
      <td>${calcularIMC(p.pes, p.alt)}</td>
      <td><button class="btn-rojo" onclick="borrar(${index})">X</button></td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}

function borrar(index) {
  pacientes.splice(index, 1);
  renderizarTabla();
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nuevoPaciente = {
    nom: document.getElementById('nom').value,
    ape: document.getElementById('ape').value,
    eda: document.getElementById('eda').value,
    alt: parseFloat(document.getElementById('alt').value),
    pes: parseFloat(document.getElementById('pes').value)
  };
  pacientes.push(nuevoPaciente);
  formulario.reset();
  renderizarTabla();
});