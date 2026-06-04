var datahora = document.getElementById("datahora");
datahora.innerHTML = new Date().toLocaleDateString();
    
var datahor = document.getElementById("datahor");
datahor.innerHTML = new Date().toLocaleDateString();
    
    
    function atualizarHora() {
        document.getElementById("hora").innerHTML =
            new Date().toLocaleTimeString();
    }

    setInterval(atualizarHora, 1000);
    atualizarHora();

    // Cronômetro regressivo de 15 minutos
    let tempoRestante = 15 * 60; // 15 minutos em segundos

    function atualizarCronometro() {
        let minutos = Math.floor(tempoRestante / 60);
        let segundos = tempoRestante % 60;

        document.getElementById("cronometro").innerHTML =
            `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

        if (tempoRestante > 0) {
            tempoRestante--;
        } else {
            clearInterval(intervaloCronometro);
            alert("Tempo esgotado!");
        }
    }

    const intervaloCronometro = setInterval(atualizarCronometro, 1000);
    atualizarCronometro();




