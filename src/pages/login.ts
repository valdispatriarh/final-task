const LoginPage = (): Node => {
    const div = document.createElement('div');
    div.innerHTML = `
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  `;
    return div;
};
export default LoginPage;
