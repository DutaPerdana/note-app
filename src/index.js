/* eslint-disable linebreak-style */
import './script/header-note.js';
import './script/input-note.js';
import './script/card-note.js';
import './script/container-grid-note.js';
import './script/loading.js';
import notesData from './script/data.js';
import './style/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.querySelector('grid-container');
  if (gridContainer) {
    gridContainer.renderNotes(notesData);
  }

  const formNote = document.getElementById('form-note');
  formNote.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('titleNote').value;
    const content = document.getElementById('contentNote').value;

    const newNote = {
      id: `notes-${Math.random().toString(36).substr(2, 9)}`,
      title,
      body: content,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    notesData.push(newNote);
    if (gridContainer) {
      gridContainer.renderNotes(notesData);
    }

    // Kosongkan form
    formNote.reset();
  });
});

// Fungsi untuk menghapus catatan berdasarkan id
const remove = (id) => {
  // Hapus catatan dari array notesData
  const notesDataa = notesData.filter((note) => note.id !== id);

  // Render ulang grid container
  const gridContainer = document.querySelector('grid-container');
  if (gridContainer) {
    gridContainer.renderNotes(notesDataa);
    alert("data berhasil di hapus");
  }
};

window.remove = remove;
