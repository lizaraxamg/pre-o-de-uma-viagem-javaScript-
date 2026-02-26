class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm; // Coloquei o ponto e vírgula ;)
    }

    calcularGastoDePercurso(distancia, precoCombustivel) {
        // Aqui usamos 'distancia', que é o nome que você deu no parâmetro
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro("Fiat", "Prata", 1/12);
console.log(uno.calcularGastoDePercurso(70, 5).toFixed(2)); 

const palio = new Carro("Fiat", "Azul", 1/10);
console.log(palio.calcularGastoDePercurso(80, 5).toFixed(2));
