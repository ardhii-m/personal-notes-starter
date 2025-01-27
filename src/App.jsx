import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import { LocaleProvider } from "./contexts/localeContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function NotesApp() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [locale, setLocale] = React.useState(() => {
    return localStorage.getItem('locale') || 'id';
  });
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  React.useEffect(() => {
    async function fetchUserData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    fetchUserData();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  async function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={themeContextValue}>
        <LocaleProvider value={localeContextValue}>
          <div
            className="app-container"
            data-theme={theme === "dark" ? "dark" : "light"}
          >
            <header>
              <h1 className="note-app__header">
                {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
              </h1>
              <Navigation />
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={themeContextValue}>
      <LocaleProvider value={localeContextValue}>
        <div
          className="app-container"
          data-theme={theme === "dark" ? "dark" : "light"}
        >
          <header>
            <h1 className="note-app__header">
              {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
            </h1>
            <Navigation logout={onLogout} name={authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/archives" element={<ArchivePage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default NotesApp;
