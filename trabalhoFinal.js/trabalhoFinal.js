const readline = require('readline-sync');

let array = [];

function adicionarNinja() {
  let nomeNinja = readline.question("Digite o nome do ninja: ");
  let quantChakra = Number(readline.question("Digite a quantidade de chakra do personagem: "));

  array.push({nome: nomeNinja, chakra: quantChakra, habilidades: [], missoesConcluidas: 0});

  console.log(`${nomeNinja} foi adicionado como um novo aspirante a ninja.`);
}

function treinarChakra() {
  let nomeNinja = selecionarNinja();
  if (nomeNinja !== "") {
    const aumentoChakra = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    array.find(ninja => ninja.nome === nomeNinja).chakra += aumentoChakra;
    console.log(`${nomeNinja} treinou seu chakra e ganhou ${aumentoChakra} pontos.`);
    exibirProgresso(nomeNinja);
  }
}

function adicionarHabilidadeNinja() {
  let nomeNinja = selecionarNinja();
  if (nomeNinja !== "") {
    let novaHabilidade = readline.question("Digite a nova habilidade ninja: ");
    array.find(ninja => ninja.nome === nomeNinja).habilidades.push(novaHabilidade);
    console.log(`${novaHabilidade} foi adicionada como uma nova habilidade ninja para ${nomeNinja}.`);
    exibirProgresso(nomeNinja);
  }
}

function concluirMissaoNinja() {
  let nomeNinja = selecionarNinja();
  if (nomeNinja !== "") {
    let ninja = array.find(ninja => ninja.nome === nomeNinja);
    ninja.missoesConcluidas++;
    const recompensaChakra = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    ninja.chakra += recompensaChakra;
    console.log(`${nomeNinja} concluiu uma missão e ganhou ${recompensaChakra} pontos de chakra.`);
    exibirProgresso(nomeNinja);
  }
}

function exibirProgresso(nomeNinja) {
  let ninja = array.find(ninja => ninja.nome === nomeNinja);
  console.log(`Nome: ${ninja.nome}`);
  console.log(`Nível de Chakra: ${ninja.chakra}`);
  console.log(`Habilidades Ninjas: ${ninja.habilidades.join(", ")}`);
  console.log(`Missões Concluídas: ${ninja.missoesConcluidas}`);
  console.log("---------------------------------------");
}

function exibirTodosNinjas() {
  console.log("Informações de todos os ninjas:");
  array.forEach(ninja => {
    console.log(`Nome: ${ninja.nome}`);
    console.log(`Nível de Chakra: ${ninja.chakra}`);
    console.log(`Habilidades Ninjas: ${ninja.habilidades.join(", ")}`);
    console.log(`Missões Concluídas: ${ninja.missoesConcluidas}`);
    console.log("---------------------------------------");
  });
}

function selecionarNinja() {
  let nomeNinja = readline.question("Digite o nome do ninja: ");
  if (!array.some(ninja => ninja.nome === nomeNinja)) {
    console.log("Ninja não encontrado.");
    return "";
  }
  return nomeNinja;
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
while (opcao !== 7) {
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
      treinarChakra();
      break;
    case 3:
      adicionarHabilidadeNinja();
      break;
    case 4:
      concluirMissaoNinja();
      break;
    case 5:
      let nomeNinja = selecionarNinja();
      if (nomeNinja !== "") {
        exibirProgresso(nomeNinja);
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
