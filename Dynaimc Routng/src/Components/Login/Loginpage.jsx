import { useState } from "react";
import styles from "./Logi.module.css";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (email && password) {
      alert("Login In Succesfully");
    } else {
      alert("Login Frirst");
    }
  };

  return (
    <div className={styles.form}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Loginpage;
