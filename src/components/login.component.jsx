let Login = () => {
  return (
    <div>
      <section className="card-body">
  <div className="login-box">
    <p>Login</p>
    <form>
      <div className="user-box">
        <input required="true" name type="email" />
        <label>Email</label>
      </div>
      <div className="user-box">
        <input required="true" name type="password" />
        <label>Password</label>
      </div>
      <a href="#">Submit</a>
    </form>
  </div>
</section>

    </div>
  );
};

export default Login;
