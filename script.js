const elevi = [
	{ nume: 'Andrei Popescu', note: [8, 7, 9], medie: (8 + 7 + 9) / 3 },
	{ nume: 'Maria Ionescu', note: [10, 9, 10], medie: (10 + 9 + 10) / 3 },
	{ nume: 'Alexandru Dumitrescu', note: [7, 8, 6], medie: (7 + 8 + 6) / 3 },
	{ nume: 'Ioana Georgescu', note: [9, 8, 9], medie: (9 + 8 + 9) / 3 },
	{ nume: 'Mihai Marinescu', note: [6, 7, 8], medie: (6 + 7 + 8) / 3 },
	{ nume: 'Elena Vasilescu', note: [10, 10, 10], medie: (10 + 10 + 10) / 3 },
	{ nume: 'Gabriel Petrescu', note: [7, 8, 7], medie: (7 + 8 + 7) / 3 },
	{ nume: 'Ana Radu', note: [9, 9, 8], medie: (9 + 9 + 8) / 3 },
	{ nume: 'Cristian Stan', note: [8, 7, 6], medie: (8 + 7 + 6) / 3 },
	{ nume: 'Roxana Barbu', note: [10, 9, 8], medie: (10 + 9 + 8) / 3 },
];

const inputNumeElev = document.getElementById('nume-elev-input');
const butonAdaugareElev = document.getElementById('adauga-elev-btn');
const tabelElevi = document.getElementById('tabel-elevi');
const tabelNote = document.getElementById('tabel-note');

const sectiuneNote = document.getElementById('note-elev-wrapper');
const butonAscundereNote = document.getElementById('ascunde-note');
const containerNoteElev = document.getElementById('note-elev-wrapper');

const inputNota = document.getElementById('nota');
const butonAdaugareNota = document.getElementById('adauga-nota-btn');

afisareTabel(elevi);
butonAdaugareElev.addEventListener('click', adaugareElevInTabel);
inputNumeElev.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		adaugareElevInTabel();
	}
});
tabelElevi.addEventListener('click', trateazaActiuniTabelElevi);
tabelNote.addEventListener('click', trateazaActiuniTabeNote);
butonAscundereNote.addEventListener('click', ascundeSectiuneNote);
butonAdaugareNota.addEventListener('click', adaugaNotaInTabel);
inputNota.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		adaugaNotaInTabel();
	}
});

function adaugareElevInTabel() {
	const numeElev = inputNumeElev.value;
	if (numeElev.length > 2) {
		elevi.push({ nume: numeElev, medie: 0, note: [] });
		afisareTabel(elevi);
		inputNumeElev.value = '';
	} else {
		alert('Numele elevului trebuie sa contina minim 3 caractere');
	}
}

function afisareTabel(elevi) {
	const tableBody = tabelElevi.querySelector('tbody');
	tableBody.innerHTML = '';

	for (let i = 0; i <= elevi.length - 1; i++) {
		tableBody.innerHTML += `
         <tr id="elev_${i}">
            <td>${elevi[i].nume}</td>
            <td>${elevi[i].medie.toFixed(2)}</td>
            <td class="center"><button class="vezi-note">Vezi Notele</button></td>
            <td class="center"><button class="sterge-elev">X</button></td>
         </tr>
      `;
	}
}

function trateazaActiuniTabelElevi(e) {
	if (e.target.classList.contains('vezi-note')) {
		sectiuneNote.classList.remove('hide');
		const id = e.target.parentElement.parentElement.id;
		const index = id.split('_')[1];
		afiseazaNote(elevi[index]);
	} else if (e.target.classList.contains('sterge-elev')) {
		const id = e.target.parentElement.parentElement.id;
		const index = id.split('_')[1];

		elevi.splice(index, 1);
		afisareTabel(elevi);
	}
}

function trateazaActiuniTabeNote(e) {
	if (e.target.classList.contains('sterge-nota')) {
		const idNota = e.target.parentElement.parentElement.id;
		const indexNota = idNota.split('_')[1];

		const idTableBody = e.target.parentElement.parentElement.parentElement.id;
		const indexElev = idTableBody.split('_')[1];

		elevi[indexElev].note.splice(indexNota, 1);
		afiseazaNote(elevi[indexElev]);
	}
}

function ascundeSectiuneNote() {
	sectiuneNote.classList.add('hide');
}

function afiseazaNote(elev) {
	const index = elevi.indexOf(elev);
	const h1NumeElev = containerNoteElev.querySelector('h1');
	h1NumeElev.innerHTML = elev.nume;
	const tableBody = tabelNote.querySelector('tbody');

	tableBody.id = `elev_${index}`;
	tableBody.innerHTML = '';
	for (let i = 0; i <= elev.note.length - 1; i++) {
		tableBody.innerHTML += `
         <tr id="nota_${i}">
            <td>${elev.note[i].toFixed(2)}</td>
            <td class="center"><button class="sterge-nota">X</button></td>
         </tr>
      `;
	}
}

function adaugaNotaInTabel() {
    const nota = Number(inputNota.value);
    const idElev = tabelNote.querySelector('tbody').id;
    const indexElev = idElev.split('_')[1];

    elevi[indexElev].note.push(nota);
    elevi[indexElev].medie = calculeazaMedie(elevi[indexElev].note);

    afiseazaNote(elevi[indexElev]);
    afisareTabel(elevi);

    inputNota.value = ''; 
}

function calculeazaMedie(note) {
    if (note.length === 0) return 0;
    const suma = note.reduce((total, nota) => total + nota, 0);
    return suma / note.length;
}