document.addEventListener('DOMContentLoaded', function () {
    let div = document.getElementById('divsito');

    div.addEventListener('dblclick', function () {
        alert('Hola! Soy el Div');
    });

    let boton = document.getElementById('btn');

    boton.addEventListener('click',() =>{
        alert('Hola!');
    });

});

