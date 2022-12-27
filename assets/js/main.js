function escopo() {
    const form = document.querySelector(".form"); 
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const inputPeso = e.target.querySelector("#peso");
        const inputAltura = e.target.querySelector("#altura");
        const altura = Number(inputAltura.value);
        const peso = Number(inputPeso.value);
        if(!peso || peso >= 500){
            setResultado('Peso inválido', false);
            return;
        }

        if(!altura || altura >= 3){
            setResultado('Altura inválida', false);
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);
        const msg = `O seu IMC é igual a ${imc}. Considerado como ${nivelImc}.`
        setResultado(msg, true);
    });

    function criaP(){
        const p = document.createElement("p");
        return p;
    }

    function setResultado(msg, isValid){
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = criaP();
        p.innerHTML = msg;      
        resultado.appendChild(p);
    }

    function getImc(peso, altura){
        const imc = peso / Math.pow(altura, 2);
        return imc.toFixed(2);
    }

    function getNivelImc(imc){
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if(imc >= 39.9){
            return nivel[5];
        } 
        if(imc >= 34.9){
            return nivel[4];
        } 
        if(imc >= 29.9){
            return nivel[3];
        } 
        if(imc >= 24.9){
            return nivel[2];
        } 
        if(imc >= 18.5){
            return nivel[1];
        }
        if(imc < 18.5){
            return nivel[0];
        }
    }
}
escopo();