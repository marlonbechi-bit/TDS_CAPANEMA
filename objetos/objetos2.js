const carro = {
    modelo: "Ford Galaxie",
    ano: 1978,
    valor: "R$ 250.000,00",
    cor: "Verde",
    ligar: function () {
        console.log("Carro ligado!");
    }

}

console.log(carro.modelo);
carro.ligar();
