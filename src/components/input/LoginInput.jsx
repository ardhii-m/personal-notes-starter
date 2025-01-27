import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import LocaleContext from "../../contexts/localeContext";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { locale } = React.useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-login">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <button>{locale === "id" ? "Masuk" : "Login"}</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
