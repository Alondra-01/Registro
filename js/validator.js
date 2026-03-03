const formulario = document.getElementById("formulario");

formulario.addEventListener(
    "submit", function(event){
        event.preventDefault();

        const nombre = document.getElementById("name").value.trim();
        const edad = document.getElementById("age").value.trim()
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("phone").value.trim();

        //Elementos error
        const errorName = document.getElementById("errorName");
        const errorAge = document.getElementById("errorAge");
        const errorEmail = document.getElementById("errorEmail");
        const errorPhone = document.getElementById("errorPhone");

        const mensaje = document.getElementById("message");

        //Tecnica del Centinela
        let valido = true;
        if(nombre === ""){
            errorName.textContent = "El nombre es obligatorio";
            valido = false;
        } else{
            errorName.textContent = "";
        }

        if(valido){
            mensaje.textContent = "Registro correcto";
        }else{
            mensaje.textContent = "";
        }

        if(edad === ""){
            errorAge.textContent = "La edad es obligatoria";
            valido = false;
        }else{
            errorAge.textContent = "";
        }

        if(email === ""){
            errorEmail.textContent = "El correo es obligatorio";
            valido = false;
        }else{
            errorEmail.textContent = "";
        }

        if(telefono === ""){
            errorPhone.textContent = "El teléfono es obligatorio";
            valido = false;
        }else{
            errorPhone.textContent = "";
        }



    }
);