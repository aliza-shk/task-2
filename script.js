document.addEventListener("DOMContentLoaded", loadNotes);

// Save Note
function saveNote() {
    let noteInput = document.getElementById("noteInput").value.trim();
    
    if (noteInput) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(noteInput);
        localStorage.setItem("notes", JSON.stringify(notes));
        alert("Note Saved!");
        document.getElementById("noteInput").value = "";
    }
}

// Load Notes
function loadNotes() {
    let notesList = document.getElementById("notesList");
    
    if (notesList) {
        notesList.innerHTML = "";
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        
        notes.forEach((note, index) => {
            let noteItem = document.createElement("div");
            noteItem.className = "note-item";
            noteItem.innerHTML = `
                <p>${note}</p>
                <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
            `;
            notesList.appendChild(noteItem);
        });
    }
}

// Delete Note
function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}