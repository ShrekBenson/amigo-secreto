// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const friends = [];
const friendsList = document.getElementById('listaAmigos');
const inputFriend = document.getElementById('amigo');
const result = document.getElementById('resultado');

function addFriend() {
  
  friends.push(inputFriend.value);
  if (inputFriend.value) {
    friendsList.innerHTML = null;
    
    friends.forEach(friend => {
      const listItem = document.createElement('li');
      const listParagraph = document.createElement('p');
  
      listParagraph.innerText = friend;
      listItem.appendChild(listParagraph);
      friendsList.appendChild(listItem)
    });
  } else {
    alert('Ingresa el nombre de un amigo');
  }  
  inputFriend.value = '';
}

function sortFriend() {
  const listItem = document.createElement('li');
  const resultText = document.createElement('h2');
  const selection = Math.floor(Math.random() * friends.length);

  resultText.innerText = `El amigo sorteado secreto es: ${friends[selection]}`;
  listItem.appendChild(resultText);
  friends.length ? result.appendChild(listItem) : alert('La lista de amigos está vacía');
}