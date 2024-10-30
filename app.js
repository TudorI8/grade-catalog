const elevi = [
	{ nume: 'James Carter', note: [8, 7, 9], medie: (8 + 7 + 9) / 3 },
	{ nume: 'Emily Thompson', note: [10, 9, 10], medie: (10 + 9 + 10) / 3 },
	{ nume: 'Oliver Brooks', note: [7, 8, 6], medie: (7 + 8 + 6) / 3 },
	{ nume: 'Sophia Richardson', note: [9, 8, 9], medie: (9 + 8 + 9) / 3 },
	{ nume: 'Benjamin Cooper', note: [6, 7, 8], medie: (6 + 7 + 8) / 3 },
	{ nume: 'Amelia Clark', note: [10, 10, 10], medie: (10 + 10 + 10) / 3 },
	{ nume: 'Jack Bennett', note: [7, 8, 7], medie: (7 + 8 + 7) / 3 },
	{ nume: 'Charlotte Foster', note: [9, 9, 8], medie: (9 + 9 + 8) / 3 },
	{ nume: 'Henry Mitchell', note: [8, 7, 6], medie: (8 + 7 + 6) / 3 },
	{ nume: 'Mia Turner', note: [10, 9, 8], medie: (10 + 9 + 8) / 3 },
];

const inputNumeElev = document.getElementById('nume-elev-input');
const butonAdaugareElev = document.getElementById('adauga-elev-btn');
const tabelElevi = document.getElementById('tabel-elevi');
const tabelNote = document.getElementById('tabel-note');

const sectiuneNote = document.getElementById('student_grades_wrapper');
const butonAscundereNote = document.getElementById('ascunde-note');
const containerNoteElev = document.getElementById('student_grades_wrapper');

const inputNota = document.getElementById('nota');
const butonAdaugareNota = document.getElementById('adauga-nota-btn');

afisareTabel(elevi);
butonAdaugareElev.addEventListener('click', adaugareElevInTabel);
inputNumeElev.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		adaugareElevInTabel();
	}
});
document.querySelector('#sort-pupil-asc').addEventListener('click', function () {
    sorteazaElevi('asc');
});
document.querySelector('#sort-pupil-desc').addEventListener('click', function () {
    sorteazaElevi('desc');
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
document.querySelector('#sort-grade-asc').addEventListener('click', function () {
    sorteazaNoteElev('asc');
});
document.querySelector('#sort-grade-desc').addEventListener('click', function () {
    sorteazaNoteElev('desc');
});

function adaugareElevInTabel() {
	const numeElev = inputNumeElev.value;
	if (numeElev.length > 2) {
		elevi.push({ nume: numeElev, medie: 0, note: [] });
		afisareTabel(elevi);
		inputNumeElev.value = '';
	} else {
		alert("The student's name must contain at least 3 characters");
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
            <td class="center"><button class="vezi-note">See grades</button></td>
            <td class="center"><button class="sterge-elev">X</button></td>
         </tr>
      `;
	}
}

function sorteazaElevi(order) {
    elevi.sort(function (a, b) {
        if (order === 'asc') {
            return a.medie - b.medie;
        } else {
            return b.medie - a.medie;
        }
    });
    afisareTabel(elevi);
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
		elevi[indexElev].medie = calculeazaMedie(elevi[indexElev].note);
		
		afiseazaNote(elevi[indexElev]);
		afisareTabel(elevi);
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

    if (!elevi[indexElev].note) { 
        elevi[indexElev].note = []; 
    }

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

function sorteazaNoteElev(order) {
    const idElev = tabelNote.querySelector('tbody').id;
    const indexElev = idElev.split('_')[1];

    elevi[indexElev].note.sort(function (a, b) {
        if (order === 'asc') {
            return a - b;
        } else {
            return b - a;
        }
    });
    afiseazaNote(elevi[indexElev]);
}