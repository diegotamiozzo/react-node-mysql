import React from 'react';
import './App.css';
import People from './pages/People';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>Sistema de Cadastro</h1>
          <p>Crie, leia, atualize e remova registros</p>
        </div>
      </header>

      <main className="app-main">
        <People />
      </main>

      <footer className="app-footer">
        <p>Full-Stack CRUD Application &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
