    const botonBuscarPelicula = document.getElementById('botonObtenerDatos');
    const pelicula = document.getElementById('pelicula');
   
    botonBuscarPelicula.addEventListener('click', buscaDatos);

    function buscaDatos(){
      const url = 'https://omdbapi.com/?t=' + pelicula + '?apikey=b62fe9a9');
      window.open(url, '_blank');
    }
