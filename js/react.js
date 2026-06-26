const e = React.createElement;
const { useState } = React;

function App() {
  const [lista, setLista] = useState([]);
  const [form, setForm] = useState({ nom: '', ape: '', eda: '', alt: '', pes: '' });

  const manejarCambio = (evento) => {
    setForm({ ...form, [evento.target.name]: evento.target.value });
  };

  const guardar = (evento) => {
    evento.preventDefault();
    setLista([...lista, form]);
    setForm({ nom: '', ape: '', eda: '', alt: '', pes: '' });
  };

  const eliminar = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);
  };

  const getIMC = (peso, altura) => {
    return (peso / (altura * altura)).toFixed(2);
  };

  const formElement = e('form', { onSubmit: guardar },
    e('div', { className: 'campo' },
      e('label', null, 'Nombre'),
      e('input', { type: 'text', name: 'nom', value: form.nom, onChange: manejarCambio, placeholder: 'Ej: Lionel', required: true })
    ),
    e('div', { className: 'campo' },
      e('label', null, 'Apellido'),
      e('input', { type: 'text', name: 'ape', value: form.ape, onChange: manejarCambio, placeholder: 'Ej: Messi', required: true })
    ),
    e('div', { className: 'campo' },
      e('label', null, 'Edad'),
      e('input', { type: 'number', name: 'eda', value: form.eda, onChange: manejarCambio, placeholder: 'Ej: 36', required: true })
    ),
    e('div', { className: 'campo' },
      e('label', null, 'Altura (m)'),
      e('input', { type: 'number', step: '0.01', name: 'alt', value: form.alt, onChange: manejarCambio, placeholder: 'Ej: 1.70', required: true })
    ),
    e('div', { className: 'campo' },
      e('label', null, 'Peso (kg)'),
      e('input', { type: 'number', step: '0.1', name: 'pes', value: form.pes, onChange: manejarCambio, placeholder: 'Ej: 72.5', required: true })
    ),
    e('button', { type: 'submit', className: 'btn-rojo' }, 'Guardar Paciente')
  );

  const sectionForm = e('section', { className: 'caja' },
    e('h2', null, 'Registro de Pacientes (React)'),
    formElement
  );

  const tbody = e('tbody', null,
    lista.map((item, index) => {
      return e('tr', { key: index },
        e('td', null, item.nom),
        e('td', null, item.ape),
        e('td', null, item.eda),
        e('td', null, item.alt + ' m'),
        e('td', null, item.pes + ' kg'),
        e('td', null, getIMC(item.pes, item.alt)),
        e('td', null,
          e('button', { 
            type: 'button',
            className: 'btn-rojo', 
            onClick: () => eliminar(index) 
          }, 'Eliminar')
        )
      );
    })
  );

  const tablaElement = e('table', null,
    e('thead', null,
      e('tr', null,
        e('th', null, 'Nombre'),
        e('th', null, 'Apellido'),
        e('th', null, 'Edad'),
        e('th', null, 'Altura'),
        e('th', null, 'Peso'),
        e('th', null, 'IMC'),
        e('th', null, 'Acción')
      )
    ),
    tbody
  );

  const sectionTabla = e('section', { className: 'caja' },
    e('h2', null, 'Lista Generada'),
    tablaElement
  );

  return e('div', null, sectionForm, sectionTabla);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));