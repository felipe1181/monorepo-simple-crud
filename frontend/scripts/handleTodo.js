const baseURL = "http://localhost:4000";

const handleTodo = {
  async createTodo(payload) {
    const response = await fetch(`${baseURL}/todo`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const responseJson = await response.json();
    return responseJson;
  },
  async listTodo() {
    const response = await fetch(`${baseURL}/todo`);
    const responseJson = await response.json();
    return responseJson;
  },
};

export default handleTodo;
