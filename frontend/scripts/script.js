import handleTodo from "./handleTodo.js";
const buttonSendMessage = document.querySelector(
  "#formControlButtonSendMessage"
);

async function createTodo() {
  const inputMessage = document.querySelector("#formControlInputMessage");
  await handleTodo.createTodo({ message: inputMessage.value });
  inputMessage.value = "";
  inputMessage.focus();
  renderTodo();
}

async function renderTodo() {
  const { data } = await handleTodo.listTodo();
  const table = document.querySelector("#tableListTodo tbody");
  table.innerHTML = data.map(
    (todo) => `
    <tr>
        <th scope="row">${todo.id}</th>
        <td>${todo.message}</td> 
    </tr>
`
  );
}
window.addEventListener("DOMContentLoaded", renderTodo);
buttonSendMessage.addEventListener("click", createTodo);
