import "./Login.css";

export function Login() {
  return (
    <div id="login">
      <h1>Login</h1>

      <input
        className="special-input user"
        type="text"
        placeholder="Username"
      ></input>
      <input
        className="special-input pass"
        type="password"
        placeholder="Password"
      ></input>
      <label>
        <input id="check" type="checkbox" /> I agree to the terms and conditions
      </label>
      <button>Login</button>
    </div>
  );
}
