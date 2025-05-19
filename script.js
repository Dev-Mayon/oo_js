// Classe base (abstração)
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    return `${this.nome} está em silêncio...`;
  }
}

// Classe filha 1
class Cachorro extends Animal {
  falar() {
    return `${this.nome} diz: Au au! 🐶`;
  }
}

// Classe filha 2
class Gato extends Animal {
  falar() {
    return `${this.nome} diz: Miau! 🐱`;
  }
}

// Função chamada ao clicar no botão
function criarAnimal() {
  const nome = document.getElementById("nomeAnimal").value.trim();
  const tipo = document.getElementById("tipoAnimal").value;
  const saida = document.getElementById("saidaTexto");

  if (!nome) {
    saida.innerText = "Por favor, digite um nome!";
    return;
  }

  let animal;

  if (tipo === "cachorro") {
    animal = new Cachorro(nome);
  } else if (tipo === "gato") {
    animal = new Gato(nome);
  }

  saida.innerText = animal.falar();
}
