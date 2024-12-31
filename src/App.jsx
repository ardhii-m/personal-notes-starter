import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from "./pages/DetailPage";

function NotesApp() {

  return (
    <div className="app-container">
      <header>
        <h1 className="note-app__header">Notes App</h1>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>

    </div>
  );
}


export default NotesApp;