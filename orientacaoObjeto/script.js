class contaBancaria {
    constructor (agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo) {
            return "Operação inválida! Saldo indisponível."
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        if (valor <= 0){
            return "Valor para depósito inválido! Insira um valor maior que R$ 0,00"
        }
        this._saldo = this._saldo + valor;

        return this.saldo;
    }

}

class contaCorrente extends contaBancaria {
    constructor (agencia, numero, cartaoCredito) {
        super(agencia, numero,);
        this.tipo = 'Conta Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
}

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Conta Poupança';
    }

    sacar(valor){
        if (valor > this._saldo) {
            return "Operação inválida! Saldo indisponível."
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        if (valor <= 0){
            return "Valor para depósito inválido! Insira um valor maior que R$ 0,00"
        }
        this._saldo = this._saldo + valor;

        return this.saldo;
    }
}

class contaUniversitaria extends contaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Conta universitária';
    }

    sacar(valor){
        if (valor > 500){
            return 'Valor de saque excedido!'
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}