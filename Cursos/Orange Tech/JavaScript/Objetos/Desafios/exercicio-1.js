class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastodePercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const fox = new Carro('Volkswagen', 'Cinza', 1/9.7);
console.log(fox.calcularGastodePercurso(70, 5));