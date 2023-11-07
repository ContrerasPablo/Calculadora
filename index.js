const numero1 = document.getElementById("numero1");
        const numero2 = document.getElementById("numero2");
        const sumaButton = document.getElementById("suma");
        const restaButton = document.getElementById("resta");
        const multiplicacionButton = document.getElementById("multiplicacion");
        const divisionButton = document.getElementById("division");
        const resultado = document.getElementById("resultado");

        sumaButton.addEventListener("click", function() {
            resultado.value = parseFloat(numero1.value) + parseFloat(numero2.value);
        });

        restaButton.addEventListener("click", function() {
            resultado.value = parseFloat(numero1.value) - parseFloat(numero2.value);
        });

        multiplicacionButton.addEventListener("click", function() {
            resultado.value = parseFloat(numero1.value) * parseFloat(numero2.value);
        });

        divisionButton.addEventListener("click", function() {
            const num2 = parseFloat(numero2.value);
            if (num2 !== 0) {
                resultado.value = parseFloat(numero1.value) / num2;
            } else {
                resultado.value = "No se puede dividir por 0";
            }
        });