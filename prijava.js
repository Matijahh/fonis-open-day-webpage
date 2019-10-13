window.onload = function() {
  document.getElementById('forma').style.opacity = 1;
};

/* Slanje forme klikom na submit */
const form = document.forms['prijava'];
const scriptURL =
  'https://script.google.com/macros/s/AKfycbymqt2S7hz0BN2DnKg-0pNX8w5ImEVDox2B2P169QoESIIAcbzb/exec';

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response =>{
       console.log('Success!', response)
       Swal.fire({
        text: 'Hvala na prijavljivanju za našu organizaciju! Vaša prijava je uspešno poslata!',
        type: 'success',
        confirmButtonText: 'Ok'
    })
    })
    .catch(error => {
      console.error('Error!', error.message)
      Swal.fire({
        text: 'Došlo je do greške!',
        type: 'error',
        confirmButtonText: 'Ok'
    })
    });
    
});