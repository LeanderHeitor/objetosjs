// Objeto Material - Carro
class Carro {
    constructor(modelo, cor, anoFabricacao) {
        this.modelo = modelo;
        this.cor = cor;
        this.anoFabricacao = anoFabricacao;
        this.ligado = false;
        this.velocidade = 0;
    }

    ligar() {
        this.ligado = true;
        console.log(`O carro ${this.modelo} está ligado.`);
    }

    desligar() {
        this.ligado = false;
        this.velocidade = 0;
        console.log(`O carro ${this.modelo} está desligado.`);
    }

    acelerar() {
        if (this.ligado) {
            this.velocidade += 10;
            console.log(`O carro ${this.modelo} está acelerando. Velocidade: ${this.velocidade} km/h.`);
        } else {
            console.log(`Não é possível acelerar. O carro ${this.modelo} está desligado.`);
        }
    }
}

// Objeto Material - Livro
class Livro {
    constructor(titulo, autor, numPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
        this.aberto = false;
        this.paginaAtual = 1;
    }

    abrir() {
        this.aberto = true;
        console.log(`O livro "${this.titulo}" está aberto.`);
    }

    fechar() {
        this.aberto = false;
        console.log(`O livro "${this.titulo}" está fechado.`);
    }

    ler() {
        if (this.aberto) {
            console.log(`Lendo o livro "${this.titulo}", página ${this.paginaAtual}.`);
            this.paginaAtual++;
        } else {
            console.log(`Não é possível ler. O livro "${this.titulo}" está fechado.`);
        }
    }
}

// Objeto Abstrato - Conta Bancária
class ContaBancaria {
    constructor(numeroConta, saldo, tipoConta) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log('Saldo insuficiente para saque.');
        }
    }

    verificarSaldo() {
        console.log(`Saldo da conta ${this.numeroConta}: R$${this.saldo}`);
    }
}

// Objeto Abstrato - Usuário
class Usuario {
    constructor(nome, id, email) {
        this.nome = nome;
        this.id = id;
        this.email = email;
        this.notificacoes = [];
    }

    atualizarPerfil() {
        console.log(`Perfil do usuário ${this.nome} atualizado.`);
    }

    enviarMensagem() {
        console.log(`Mensagem enviada por ${this.nome}.`);
    }

    visualizarNotificacoes() {
        console.log(`Notificações para ${this.nome}: ${this.notificacoes.join(', ')}`);
    }
}

// Exemplos de uso
const meuCarro = new Carro('Sedan', 'Azul', 2022);
meuCarro.ligar();
meuCarro.acelerar();

const meuLivro = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1000);
meuLivro.abrir();
meuLivro.ler();

const minhaConta = new ContaBancaria('123456', 1000, 'Corrente');
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.verificarSaldo();

const novoUsuario = new Usuario('João', 'joao123', 'joao@example.com');
novoUsuario.atualizarPerfil();
novoUsuario.enviarMensagem();
novoUsuario.notificacoes.push('Novo seguidor', 'Nova mensagem');
novoUsuario.visualizarNotificacoes();
