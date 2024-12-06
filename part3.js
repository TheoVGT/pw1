const form = document.getElementById('userForm');
const tableBody = document.querySelector('#userTable tbody');

// Carregar dados do localStorage ao iniciar
let users = JSON.parse(localStorage.getItem('users')) || [];

// Atualizar tabela com dados salvos
function updateTable() {
  tableBody.innerHTML = '';
  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.age}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Adicionar novo usuário
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  const newUser = { name, email, age };
  users.push(newUser);

  // Salvar no localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Limpar formulário e atualizar tabela
  form.reset();
  updateTable();
});

// Atualizar tabela ao carregar a página
updateTable();