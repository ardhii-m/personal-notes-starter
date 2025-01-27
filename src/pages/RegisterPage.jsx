import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/input/RegisterInput";
import { register } from "../utils/network-data";
import LocaleContext from "../contexts/localeContext";

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>
        {locale === "id"
          ? "Isi form untuk mendaftar akun."
          : "Fill this form to create account."}
      </h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {locale === "id" ? "Sudah punya akun ?" : "Already have an account ?"}{" "}
        <Link to="/">{locale === "id" ? "Login disini." : "Login Here."}</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
