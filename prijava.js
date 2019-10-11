var maxBrojPitanja = 7;

window.onload = function() {
  document.getElementById('forma').style.opacity = 1;
};

/* Slanje forme klikom na submit */
const form = document.forms['prijava'];
const scriptURL =
  '';

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
  send();
});

/* Promena pitanja i brisanje unetih odgovora klikom na drugi tim u selektoru */
function change() {
  let tim = document.getElementById('tim').value;

  document.getElementById('change').innerText = tim;

  pitanja(tim);
  reset();
}

/* Izmena pitanja pri promeni tima u selektoru i sakrivanje polja za pitanja koja su visak (ukoliko ima manje pitanja od max broja pitanja) */
function pitanja(tim) {

  let spisakPitanja = [
    'Zbog čega se prijavljuješ baš za ' +
      tim +
      ' tim i na koji način želiš da doprineseš radu ovog tima?',
    'Koja iskustva imaš, a misliš da će ti značiti u radu ovog tima',
    'Šta želiš da naučiš radom u ovom timu?',
    'Šta je najvažnije što mora postojati kako bi ovaj tim dobro funkcionisao i zašto?',
    'Koja su tvoja očekivanja od koordinatora tima?'
  ];

  for (let i = 0; i < spisakPitanja.length; i++) {
    let rbr = i + 1;
    let id = 'pitanje#' + rbr;
    document.getElementById(id).innerText = spisakPitanja[i];
  }

  for (let i = spisakPitanja.length + 1; i <= maxBrojPitanja; i++) {
    let idQ = 'pitanje#' + i;
    let idA = 'pitanje #' + i;
    document.getElementById(idQ).style.display = 'none';
    document.getElementById(idA).style.display = 'none';
  }

  if (tim === 'CR') {
    rbr = spisakPitanja.length + 1;
    let id = 'pitanje#' + rbr;
    let idQ = id;
    let idA = 'pitanje #' + rbr;
    document.getElementById(id).innerText = 'Šta je burek?';
    document.getElementById(idQ).style.display = 'block';
    document.getElementById(idA).style.display = 'block';
  }

  document.getElementById('pitanja').style.display = 'block';
}

/* Brisanje unetih odgovora nakon promene izbora tima */
function reset() {
  for (let i = 1; i <= maxBrojPitanja; i++) {
    let id = 'pitanje #' + i;
    document.getElementById(id).value = '';
  }
}

/* Sakrivanje forme i prikaz poruke nakon submitovanja */
function send() {
  document.getElementById('form').style.display = 'none';
  document.getElementById('poruka').style.display = 'block';
}

/******* za vise timova sa razlicitim pitanjima *******/

/* za svaki tim napraviti poseban array sa pitanjima na pocetku koda
var pitanjaTIM = ['',
    '',
    '',
    '',
    '',
    '',
    ''
]

/* ovaj deo se ubacuje u funkciju pitanja 
switch (tim) {
        case 'tim': for (let i = 0; i < pitanjaTIM.length; i++) {
                        let rbr = i + 1;
                        let id = 'pitanje#' + rbr;
                        document.getElementById(id).innerText = pitanjaTIM[i];
                    }

                    for (let i = spisakPitanja.length + 1; i <= maxBrojPitanja; i++) {
                        let idQ = 'pitanje#' + i;
                        let idA = 'pitanje #' + i;
                        document.getElementById(idQ).style.display = 'none';
                        document.getElementById(idA).style.display = 'none';
                    }
                    break;
    }
*/
