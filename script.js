    const botonBuscarPelicula = document.getElementById('botonObtenerDatos');
    const pelicula = document.getElementById('pelicula').value;
   
    botonBuscarPelicula.addEventListener('click', buscaDatos);

    function buscaDatos(){
        const url = 'https://omdbapi.com/?t=' + pelicula + '&apikey=b62fe9a9';
        console.log("Hola buenos días");
        const respuesta = JSON.parse(url);
        respuesta;
        window.open(url, '_blank');
    }
