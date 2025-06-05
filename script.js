const url = 'https://jsonplaceholder.typicode.com/users';
function loadUsers() {
  const list = document.getElementById('userList');
  list.innerHTML = ''; 
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.id} (${user.username}) (${user.phone})`;
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}
loadUsers();
document.getElementById('reloadBtn').addEventListener('click', loadUsers);

