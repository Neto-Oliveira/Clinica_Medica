pacientes = []

function addPaciente() {
  const input = document.getElementById('entrada')
  pacientes.push(input.value)
  console.log(pacientes)
  input.focus()
  rederizar()
  return (input.value = '')
}

function rederizar() {
  const lista = document.getElementById('listapacientes')

  lista.innerHTML = pacientes
    .map((paciente, index) => {
      //passando uma função para dentro de outra função atraves do  .map ela

      return `
            <li>
                ${paciente}
                <button id="urgencia"onclick="adicionarUrgencia(${index})"> Urgência </button>
                <button id="updPaciente"onclick="deletarPaciente(${index})"> Atendido </button>
            </li>
        `
    })
    .join('')
}

function adicionarUrgencia(index) {
  const paciente = pacientes[index]
  pacientes.splice(index, 1)

  pacientes = [paciente, ...pacientes] /// estudar esse ... spread operator

  rederizar()
}

function deletarPaciente(index) {
  pacientes.splice(index, 1)
  rederizar()
}

document.getElementById('addpaciente').addEventListener('click', addPaciente)
