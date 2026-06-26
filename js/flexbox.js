const juegos = [
  { nombre: 'CS:GO 2', genero: 'Shooter', puntaje: 8, desc: 'Juego táctico de disparos.' },
  { nombre: 'Minecraft', genero: 'Sandbox', puntaje: 10, desc: 'Construye tu propio mundo.' },
  { nombre: 'Valorant', genero: 'Shooter', puntaje: 9, desc: 'Shooter táctico con habilidades.' },
  { nombre: 'The Witcher 3', genero: 'RPG', puntaje: 10, desc: 'Mundo abierto y fantasía.' },
  { nombre: 'FIFA 24', genero: 'Deportes', puntaje: 7, desc: 'Simulador de fútbol.' },
  { nombre: 'Doom Eternal', genero: 'Shooter', puntaje: 9, desc: 'Acción frenética.' }
];

let listaActual = juegos;
let remarcarActivo = false;
const contenedor = document.getElementById('contenedorJuegos');

function pintarJuegos() {
  contenedor.innerHTML = '';
  listaActual.forEach(juego => {
    const claseDestacado = (remarcarActivo && juego.puntaje >= 9) ? ' destacado' : '';
    contenedor.innerHTML += `
      <div class="card${claseDestacado}">
        <h3>${juego.nombre}</h3>
        <p><strong>Género:</strong> ${juego.genero}</p>
        <p><strong>Puntaje:</strong> ${juego.puntaje}/10</p>
        <p>${juego.desc}</p>
      </div>
    `;
  });
}

document.getElementById('btnShooter').addEventListener('click', () => {
  listaActual = juegos.filter(j => j.genero === 'Shooter');
  pintarJuegos();
});

document.getElementById('btnPuntaje').addEventListener('click', () => {
  listaActual = [...juegos].sort((a, b) => b.puntaje - a.puntaje);
  pintarJuegos();
});

document.getElementById('btnRemarcar').addEventListener('click', () => {
  remarcarActivo = !remarcarActivo;
  pintarJuegos();
});

document.getElementById('btnTodos').addEventListener('click', () => {
  listaActual = juegos;
  remarcarActivo = false;
  pintarJuegos();
});

pintarJuegos();