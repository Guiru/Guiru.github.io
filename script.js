document.addEventListener('DOMContentLoaded', () => {
    const openUrlButton = document.getElementById('openUrlButton');
    const urlInput = document.getElementById('urlInput');

    const botonBuscarPelicula = document.getElementById('botonObtenerDatos');

    openUrlButton.addEventListener('click', () => {
        const url = urlInput.value.trim();
        if (url) {
            // Verifica que la URL comience con http:// o https://
            const validUrl = /^https?:\/\//i.test(url) ? url : 'http://' + url;
            window.open(validUrl, '_blank');
        } else {
            alert('Por favor, escribe una URL válida.');
        }
    });
});
