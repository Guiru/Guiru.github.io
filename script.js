    const botonBuscarPelicula = document.getElementById('botonObtenerDatos');
    const pelicula = document.getElementById('pelicula');

    botonBuscarPelicula.addEventListener('click', buscaDatos);

    function buscaDatos(){
      const url = 'https://omdbapi.com/?t=' + pelicula;
      window.open(url, '_blank');
    }
