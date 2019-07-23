const progress = document.getElementById( 'progress' );
let form = document.getElementById( 'form' );

function sendFile( event ) {
  event.preventDefault();
  let formData = new FormData( form );
  if ( formData ) {
    let xhr = new XMLHttpRequest();

    xhr.upload.addEventListener( 'progress', ( event ) => {
      progress.value = event.loaded / event.total;
    });

    xhr.open( 'POST',  'https://netology-slow-rest.herokuapp.com/upload.php' );
    xhr.send( formData );
  }
}

form.addEventListener( 'submit', sendFile );
