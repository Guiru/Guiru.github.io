    const botonBuscarPelicula = document.getElementById('botonObtenerDatos');
    const pelicula = document.getElementById('pelicula').value;
   
    botonBuscarPelicula.addEventListener('click', buscaDatos);

    function buscaDatos(){
        string url = 'https://omdbapi.com/?t=' + pelicula + '&apikey=b62fe9a9';
        
        const respuesta = JSON.parse(url);
        console.log("Hola buenos días");
        window.open(url, '_blank');
    }
