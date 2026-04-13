const Login = () => {
  return (
      <>
        <form>
          <label htmlFor="email">Email:</label><br/>
          <input type="email" id="email" name="email"/><br/>
          <label htmlFor="password">password:</label><br/>
          <input type="password" id="password" name="password"/>
        </form>
        <button id="login">Login</button>
      </>
  );
};

export default Login;
