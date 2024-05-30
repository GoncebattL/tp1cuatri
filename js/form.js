document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let valid = true;

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '') {
            valid = false;
            alert('Por favor, ingrese su nombre.');
        } else if (!validateText(nombre)) {
            valid = false;
            alert('El nombre solo puede contener letras.');
        }

        if (apellido === '') {
            valid = false;
            alert('Por favor, ingrese su apellido.');
        } else if (!validateText(apellido)) {
            valid = false;
            alert('El apellido solo puede contener letras.');
        }
        if (correo === '') {
            valid = false;
            alert('Por favor, ingrese su correo electrónico.');
        } else if (!validateEmail(correo)) {
            valid = false;
            alert('Por favor, ingrese un correo electrónico válido.');
        }

        if (telefono === '') {
            valid = false;
            alert('Por favor, ingrese su teléfono.');
        } else if (!validatePhone(telefono)) {
            valid = false;
            alert('Por favor, ingrese un número de teléfono válido.');
        }

        if (mensaje === '') {
            valid = false;
            alert('Por favor, ingrese su mensaje.');
        }


        if (valid) {
            alert('Formulario enviado con éxito.');
            form.submit();
        }
    });


    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[0-9]+$/;
        return re.test(phone);
    }

    function validateText(text) {
        const re = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        return re.test(text);
    }
});