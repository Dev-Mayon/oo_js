// Classe abstrata (conceito base)
class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  emitirSom() {
    console.log(`${this.nome} emitiu um som.`);
  }

  apresentar() {
    console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Classe herdeira: Cachorro
class Cachorro extends Animal {
  emitirSom() {
    console.log(`${this.nome} latiu: Au au!`);
  }
}

// Classe herdeira: Gato
class Gato extends Animal {
  emitirSom() {
    console.log(`${this.nome} miou: Miau!`);
  }
}

// Instâncias
const cachorro1 = new Cachorro("Rex", 5);
const cachorro2 = new Cachorro("Bolt", 3);
const gato1 = new Gato("Mimi", 2);

// Testando as instâncias
cachorro1.apresentar(); // Eu sou Rex e tenho 5 anos.
cachorro1.emitirSom();  // Rex latiu: Au au!

cachorro2.apresentar(); // Eu sou Bolt e tenho 3 anos.
cachorro2.emitirSom();  // Bolt latiu: Au au!

gato1.apresentar();     // Eu sou Mimi e tenho 2 anos.
gato1.emitirSom();      // Mimi miou: Miau!
