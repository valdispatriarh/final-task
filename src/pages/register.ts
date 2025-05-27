const RegisterPage = (): Node => {
    const div = document.createElement('div');

    div.innerHTML = `
    <h1>Register</h1>
    <form>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="repeat password" />
      <button>register</button>
    </form>
  `;
    return div;
};
export default RegisterPage;
