import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/localeContext";
import useInput from "../../hooks/useInput";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { locale } = React.useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-register">
      <input
        type="text"
        placeholder={locale === "id" ? "Nama" : "Name"}
        value={name}
        onChange={onNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <button>{locale === "id" ? "Daftar" : "Masuk"}</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
