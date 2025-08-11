
const servico = localStorage.getItem('servicoEscolhido');

const horario = localStorage.getItem('horarioEscolhido')

document.getElementById('detalhesAgendamento').textContent = `Serviço: ${servico} | Horário: ${horario}`;


function agendar() {

  const nome = document.getElementById('nome').value;

  const email = document.getElementById('email').value

  const telefone = document.getElementById('telefone').value;

  const cpf = document.getElementById('cpf').value;


  alert(`Agendamento confirmado!\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nCPF: ${cpf}\nServiço: ${servico}\nHorário: ${horario}`);
