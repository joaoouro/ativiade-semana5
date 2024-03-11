class Funcionario { // classe funcionário
  constructor(nome,idade, salarioBase) { // construtor com os atributos nome, idade e salarioBase
    this.nome = nome;
    this.salarioBase = salarioBase;
    this.idade = idade;
  }

  calcularSalario(){ // método para calcular o salário
    return this.salario;
  }
  
}
class Professor extends Funcionario { // classe professor que herda os atributos da classe funcionário
  constructor(nome,idade, salarioBase, disciplina, horasAulaSemana) { // construtor com os atributos nome, idade, salarioBase, disciplina e horasAulaSemana
    super(nome,idade, salarioBase);
    this.disciplina = disciplina;
    this.horasAulaSemana = horasAulaSemana;
  }

  calcularSalario(){ // método para calcular o salário do professor
    let valorHora = 50; // valor da hora aula
    let salarioProfessor = this.horasAulaSemana * valorHora; // cálculo do salário do professor
    return salarioProfessor;
  }
}

let professor1 = new Professor('paulo', 30, 1000, 'Matemática', 40); // instanciando um objeto professor 1
let professor2 = new Professor('marcos', 35, 1500, 'Português', 30); // instanciando um objeto professor 2

console.log('salário do professor 1 é: ' + professor1.calcularSalario()); // exibindo o salário do professor 1
console.log('salário do professor 2 é: ' + professor2.calcularSalario()); // exibindo o salário do professor 2