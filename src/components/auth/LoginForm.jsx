import styles from "../../components/auth/LoginForm.module.css";

const LoginForm = ({ email, password, setEmail, setPassword, handleLogin }) => {
  return (
    <div className={styles.loginContainer} >
      <h2>Iniciar Sesión</h2>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <div>
          <label>correo electronico:</label>
          <input
            type="email"
            placeholder="admin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        
        <div>
          <label>Contraseña:</label>
          <input
          
            type="password"
            placeholder="admin1234"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        

        <button
          className={styles.addBtnLogin}
          type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginForm;





















/*function LoginForm() {
    return (
    <form >
      <label>
        Correo:
        <input
          type="email"

        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value="{password}"
          
        />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;
*/