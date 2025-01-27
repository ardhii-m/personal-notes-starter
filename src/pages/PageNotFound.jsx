import React from "react";
import LocaleContext from "../contexts/localeContext";

function PageNotFound() {
  const { locale } = React.useContext(LocaleContext);
  return (
    <section>
      <h2>404</h2>
      <p>{locale === "id" ? "Halaman Tidak Ditemukan" : "Page Not Found"}</p>
    </section>
  );
}

export default PageNotFound;
