const formularioPortafolio = document.querySelector('.contacto__formulario');

formularioPortafolio.addEventListener('submit', function (event) {
    
    event.preventDefault(); // Evita el envío del formulario

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    const emailSimbolos = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validación nombre
    if (nombre === '' || !/^[A-Za-z\s]+$/.test(nombre)) {
        alert('Nombre inválido, solo letras y espacios permitidos, y no puede estar vacío.');
        return; // Detiene la ejecución si hay un error
    }
    console.log('Nombre válido');

    // Validación correo
    if (email === '' || !emailSimbolos.test(email)) {
        alert('Por favor, introduce un correo electrónico válido y no vacío.');
        return; // Detiene la ejecución si hay un error
    }
    console.log('Correo electrónico válido: ' + email);

    // Validación asunto
    if (asunto === '') {
        alert('El asunto no puede estar vacío.');
        return; // Detiene la ejecución si hay un error
    }
    console.log('Asunto válido: ' + asunto);

    // Validación mensaje
    if (mensaje === '') {
        alert('El mensaje no puede estar vacío.');
        return; // Detiene la ejecución si hay un error
    }
    console.log('Mensaje válido: ' + mensaje);

    // Si todas las validaciones son correctas, enviar el formulario
    /* formularioPortafolio.submit(); // Envía el formulario */

    alert('Formulario enviado');

    // Construir el enlace mailto
    //nota: puede tener problemas en gestionarse el mailto en algunos navegadores. 
    const mailtoLink = `mailto:camiloalarcon11155@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`)}`;

    // Capturar el objeto mailtoLink en la consola
    console.log("Redirigiendo con mailtoLink:", mailtoLink);
    
    setTimeout(function() {
    window.open(mailtoLink, '_self');
    }, 100); // 100 milisegundos de retraso
});

