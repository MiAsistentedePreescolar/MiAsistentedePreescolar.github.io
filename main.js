// Prueba de que funciona poner: console.log("Hola mundo! desde la consola");
//Texto en movimiento como si se escribiera
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

    typewriter.typeString('Materiales para educadoras')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Disfruta y trabaja!')
    .pauseFor(2500)
    .deleteChars(8)
    .typeString('<strong>mejora tú trabajo!</strong>')
    .pauseFor(2500)
    .start();