import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/input/LoginInput";
import { login } from "../utils/network-data";
import LocaleContext from "../contexts/localeContext";

function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>
        {locale === "id"
          ? "Silahkan masuk untuk menggunakan."
          : "Please Login to use the app."}
      </h2>
      <LoginInput login={onLogin} />
      <p>
        {locale === "id" ? "Belum punya akun?" : "New user ?"}{" "}
        <Link to="/register">
          {locale === "id" ? "Daftar disini." : "Register Here."}
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
