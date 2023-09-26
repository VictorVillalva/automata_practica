var count =0

function convertirAMayusculas(input) {
    input.value = input.value.toUpperCase();
}
function accion(){

    count ++
    console.log(count);
    // if(count === 1){
    //     validarCodigo();
    // }else{
    //     limpiar();
    //     validarCodigo();
    // }
    validarCodigo()
}

function limpiar(){
    q1.style.backgroundColor = "rgb(212, 212, 212)";
    q2.style.backgroundColor = "rgb(212, 212, 212)";
    q3.style.backgroundColor = "rgb(212, 212, 212)";
    q4.style.backgroundColor = "rgb(212, 212, 212)";
    q5.style.backgroundColor = "rgb(212, 212, 212)";
    q6.style.backgroundColor = "rgb(212, 212, 212)";
    q7.style.backgroundColor = "rgb(212, 212, 212)";
    q8.style.backgroundColor = "rgb(212, 212, 212)";
    q9.style.backgroundColor = "rgb(212, 212, 212)";
    q10.style.backgroundColor = "rgb(212, 212, 212)";
    q11.style.backgroundColor = "rgb(212, 212, 212)";
    q12.style.backgroundColor = "rgb(212, 212, 212)";
    q13.style.backgroundColor = "rgb(212, 212, 212)";
    q14.style.backgroundColor = "rgb(212, 212, 212)";
    q15.style.backgroundColor = "rgb(212, 212, 212)";
    q16.style.backgroundColor = "rgb(212, 212, 212)";
    q17.style.backgroundColor = "rgb(212, 212, 212)";
    q18.style.backgroundColor = "rgb(212, 212, 212)";
    q19.style.backgroundColor = "rgb(212, 212, 212)";
    resultado.textContent = ``;
}

//Validacion de cadena
function validarCodigo() {
    if (count == 0){
        const datos = document.getElementById("inputDatos").value;
        const valida = automataPersonalizado(datos);
        const resultado = document.getElementById("resultado");
        const dibujo = automata(datos);
        console.log(dibujo);
        console.log(count);
        count= count+1

        if (valida) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cadena Valida",
                showConfirmButton: false,
                timer: 1500,
                color: "#082f49",
            });
        } else {
            resultado.textContent = `Codigo "${datos}" no es válido`;
            resultado.style.color = "#ac0d0d";
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Cadena no valida",
                text: "Verifique el codigo",
                showConfirmButton: false,
                timer: 1500,
                background: "#082f49",
                color: "#FFFFFF",
            });
        }
    }else{
        limpiar()
        const datos = document.getElementById("inputDatos").value;
        const valida = automataPersonalizado(datos);
        const resultado = document.getElementById("resultado");
        const dibujo = automata(datos);
        console.log(dibujo);
        console.log(count);
        count= count+1

        if (valida) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cadena Valida",
                showConfirmButton: false,
                timer: 1500,
                color: "#082f49",
            });
        } else {
            resultado.textContent = `Codigo "${datos}" no es válido`;
            resultado.style.color = "#ac0d0d";
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Cadena no valida",
                text: "Verifique el codigo",
                showConfirmButton: false,
                timer: 1500,
                background: "#082f49",
                color: "#FFFFFF",
            });
        }
    }




//Prueba 1
    // if (valida) {
    //     Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Cadena Valida",
    //         showConfirmButton: false,
    //         timer: 1500,
    //         color: "#082f49",
    //     });
    // } else {
    //     resultado.textContent = `Codigo "${datos}" no es válido`;
    //     resultado.style.color = "#ac0d0d";
    //     Swal.fire({
    //         position: "center",
    //         icon: "error",
    //         title: "Cadena no valida",
    //         text: "Verifique el codigo",
    //         showConfirmButton: false,
    //         timer: 1500,
    //         background: "#082f49",
    //         color: "#FFFFFF",
    //     });
    // }
}

//Pasamos dato como variable para verificar en esta función
function automataPersonalizado(datos) {
    //Patron de mi automata TR-0001-A | UL-9999-Z
    const patron =
        /^(T[R-Z]-(0{3}[1-9]|0{2}[1-9][0-9]|0[1-9][0-9]{2}|[1-9][0-9]{3})-[A-Z]|U[A-L]-(0{3}[1-9]|0{2}[1-9][0-9]|0[1-9][0-9]{2}|[1-9][0-9]{3})-[A-Z])$/;

    return patron.test(datos);
}

//TR-0001-A
function automata(datos) {
    //Patrones
    const newPatron1 = /^(T[R-Z]-0{3}[1-9]-[A-Z])$/;
    const newPatron2 = /^(T[R-Z]-0{2}[1-9][0-9]-[A-Z])$/;
    const newPatron3 = /^(T[R-Z]-0[1-9][0-9]{2}-[A-Z])$/;
    const newPatron4 = /^(T[R-Z]-[1-9][0-9]{3}-[A-Z])$/;

    const newPatron5 = /^(U[A-L]-0{3}[1-9]-[A-Z])$/;
    const newPatron6 = /^(U[A-L]-0{2}[1-9][0-9]-[A-Z])$/;
    const newPatron7 = /^(U[A-L]-0[1-9][0-9]{2}-[A-Z])$/;
    const newPatron8 = /^(U[A-L]-[1-9][0-9]{3}-[A-Z])$/;
    //Los circulos
    const q1 = document.getElementById("q1");
    const q2 = document.getElementById("q2");
    const q3 = document.getElementById("q3");
    const q4 = document.getElementById("q4");
    const q5 = document.getElementById("q5");
    const q6 = document.getElementById("q6");
    const q7 = document.getElementById("q7");
    const q8 = document.getElementById("q8");
    const q9 = document.getElementById("q9");
    const q10 = document.getElementById("q10");
    const q11 = document.getElementById("q11");
    const q12 = document.getElementById("q12");
    const q13 = document.getElementById("q13");
    const q14 = document.getElementById("q14");
    const q15 = document.getElementById("q15");
    const q16 = document.getElementById("q16");
    const q17 = document.getElementById("q17");
    const q18 = document.getElementById("q18");
    const q19 = document.getElementById("q19");

    //VALIDACION DE RECORRIDO

    if (newPatron1.test(datos)) {
        q1.style.backgroundColor = "blue";
        q3.style.backgroundColor = "blue";
        q4.style.backgroundColor = "blue";
        q5.style.backgroundColor = "blue";
        q6.style.backgroundColor = "blue";
        q7.style.backgroundColor = "blue";
        q8.style.backgroundColor = "blue";
        q9.style.backgroundColor = "blue";
        q10.style.backgroundColor = "blue";
    }else{
        console.log("no lo valida bien")
    }

    if(newPatron2.test(datos)){
        q1.style.backgroundColor = "blue";
        q3.style.backgroundColor = "blue";
        q4.style.backgroundColor = "blue";
        q5.style.backgroundColor = "blue";
        q6.style.backgroundColor = "blue";
        q7.style.backgroundColor = "blue";
        q14.style.backgroundColor = "blue";
        q15.style.backgroundColor = "blue";
        q9.style.backgroundColor = "blue";
        q10.style.backgroundColor = "blue";
    }else{
        console.log("no valida bien")
    }

    if(newPatron3.test(datos)){
        q1.style.backgroundColor = "blue";
        q3.style.backgroundColor = "blue";
        q4.style.backgroundColor = "blue";
        q5.style.backgroundColor = "blue";
        q6.style.backgroundColor = "blue";
        q11.style.backgroundColor = "blue";
        q12.style.backgroundColor = "blue";
        q13.style.backgroundColor = "blue";
        q9.style.backgroundColor = "blue";
        q10.style.backgroundColor = "blue";
    }else{
        console.log("no valida bien")
    }

    if(newPatron4.test(datos)){
        q1.style.backgroundColor = "blue";
        q3.style.backgroundColor = "blue";
        q4.style.backgroundColor = "blue";
        q5.style.backgroundColor = "blue";
        q16.style.backgroundColor = "blue";
        q17.style.backgroundColor = "blue";
        q18.style.backgroundColor = "blue";
        q19.style.backgroundColor = "blue";
        q9.style.backgroundColor = "blue";
        q10.style.backgroundColor = "blue";
    }else{
        console.log("no valida bien")
    }

    if(newPatron5.test(datos)){
        q2.style.backgroundColor = "blue";
        q3.style.backgroundColor = "blue";
        q4.style.backgroundColor = "blue";
        q5.style.backgroundColor = "blue";
        q6.style.backgroundColor = "blue";
        q7.style.backgroundColor = "blue";
        q8.style.backgroundColor = "blue";
        q9.style.backgroundColor = "blue";
        q10.style.backgroundColor = "blue";
    }else{
        console.log("no valida bien")
    }

    if(newPatron6.test(datos)){
        q2.style.backgroundColor = "blue";
        q3.style.backgroundColor = "blue";
        q4.style.backgroundColor = "blue";
        q5.style.backgroundColor = "blue";
        q6.style.backgroundColor = "blue";
        q7.style.backgroundColor = "blue";
        q14.style.backgroundColor = "blue";
        q15.style.backgroundColor = "blue";
        q9.style.backgroundColor = "blue";
        q10.style.backgroundColor = "blue";
    }else{
        console.log("no valida bien")
    }

    if(newPatron7.test(datos)){
        q2.style.backgroundColor = "blue";
        q3.style.backgroundColor = "blue";
        q4.style.backgroundColor = "blue";
        q5.style.backgroundColor = "blue";
        q6.style.backgroundColor = "blue";
        q11.style.backgroundColor = "blue";
        q12.style.backgroundColor = "blue";
        q13.style.backgroundColor = "blue";
        q9.style.backgroundColor = "blue";
        q10.style.backgroundColor = "blue";
    }else{
        console.log("no valida bien")
    }

    if(newPatron8.test(datos)){
        q2.style.backgroundColor = "blue";
        q3.style.backgroundColor = "blue";
        q4.style.backgroundColor = "blue";
        q5.style.backgroundColor = "blue";
        q16.style.backgroundColor = "blue";
        q17.style.backgroundColor = "blue";
        q18.style.backgroundColor = "blue";
        q19.style.backgroundColor = "blue";
        q9.style.backgroundColor = "blue";
        q10.style.backgroundColor = "blue";
    }else{
        console.log("no valida bien")
    }


}
