import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/input/RegisterInput";
import { register } from "../utils/network-data";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/')
    }
  }

  return (
    <section className="register-page">
      <h2>Isi form untuk mendaftar akun.</h2>
      <RegisterInput register={onRegisterHandler}/>
      <p>Sudah punya akun ? <Link to='/'>Login disini</Link></p>
    </section>
  )
}

export default RegisterPage;