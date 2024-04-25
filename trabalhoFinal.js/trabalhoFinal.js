const readline = require('readline-sync');

let array = [];

function adicionarNinja() {
  let nomeNinja = readline.question("Digite o nome do ninja: ");
  let quantChakra = Number(readline.question("Digite a quantidade de chakra do personagem: "));

  array.push({nome: nomeNinja, chakra: quantChakra, habilidades: [], missoesConcluidas: 0});

  console.log(`${nomeNinja} foi adicionado como um novo aspirante a ninja.`);
}

function treinarChakra(index) {
  const aumentoChakra = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  array[index].chakra += aumentoChakra;
  console.log(`${array[index].nome} treinou seu chakra e ganhou ${aumentoChakra} pontos.`);
  exibirProgresso(index);
}

function adicionarHabilidadeNinja(index) {
  let novaHabilidade = readline.question("Digite a nova habilidade ninja: ");
  array[index].habilidades.push(novaHabilidade);
  console.log(`${novaHabilidade} foi adicionada como uma nova habilidade ninja para ${array[index].nome}.`);
  exibirProgresso(index);
}

function concluirMissaoNinja(index) {
  array[index].missoesConcluidas++;
  const recompensaChakra = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
  array[index].chakra += recompensaChakra;
  console.log(`${array[index].nome} concluiu uma missão e ganhou ${recompensaChakra} pontos de chakra.`);
  exibirProgresso(index);
}

function exibirProgresso(index) {
  let ninja = array[index];
  console.log(`Nome: ${ninja.nome}`);
  console.log(`Nível de Chakra: ${ninja.chakra}`);
  console.log(`Habilidades Ninjas: ${ninja.habilidades.join(", ")}`);
  console.log(`Missões Concluídas: ${ninja.missoesConcluidas}`);
  
}

function exibirTodosNinjas() {
  console.log("Informações de todos os ninjas:");
  array.forEach((ninja, index) => {
    console.log(`Índice: ${index}`);
    console.log(`Nome: ${ninja.nome}`);
    console.log(`Nível de Chakra: ${ninja.chakra}`);
    console.log(`Habilidades Ninjas: ${ninja.habilidades.join(", ")}`);
    console.log(`Missões Concluídas: ${ninja.missoesConcluidas}`);
    
  });
}

function selecionarNinja() {
  let index = Number(readline.question("Digite o índice do ninja: "));
  if (isNaN(index) || index < 0 || index >= array.length) {
    console.log("Índice inválido.");
    return -1;
  }
  return index;
}

function determinarMaisHabilidoso() {
  let maisHabilidoso = array.reduce((maisHabilidoso, ninja) => {
    const totalChakra = ninja.chakra + ninja.habilidades.length;
    const maisHabilidosoTotal = maisHabilidoso.chakra + maisHabilidoso.habilidades.length;
    return totalChakra > maisHabilidosoTotal ? ninja : maisHabilidoso;
  }, array[0]);
  console.log(`O ninja mais habilidoso é: ${maisHabilidoso.nome}`);
}

// Menu
let opcao;
while (opcao !== 8) {
  console.log("Escolha uma ação:");
  console.log("1. Criar um novo aspirante a ninja");
  console.log("2. Treinar Chakra");
  console.log("3. Adicionar Habilidade Ninja");
  console.log("4. Concluir Missão Ninja");
  console.log("5. Exibir Progresso de um Aspirante");
  console.log("6. Exibir Informações de Todos os Ninjas");
  console.log("7. Determinar o Ninja Mais Habilidoso");
  console.log("8. Sair");
  opcao = Number(readline.question("Opção: "));
  switch (opcao) {
    case 1:
      adicionarNinja();
      break;
    case 2:
      treinarChakra(selecionarNinja());
      break;
    case 3:
      adicionarHabilidadeNinja(selecionarNinja());
      break;
    case 4:
      concluirMissaoNinja(selecionarNinja());
      break;
    case 5:
      let index = selecionarNinja();
      if (index !== -1) {
        exibirProgresso(index);
      }
      break;
    case 6:
      exibirTodosNinjas();
      break;
    case 7:
      determinarMaisHabilidoso();
      break;
    case 8:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
  }
}
