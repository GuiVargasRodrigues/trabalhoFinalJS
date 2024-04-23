// objetos para os aspirantes a ninja
const Naruto = {
  nome: "Naruto",
  nivelChakra: 50,
  habilidadesNinjas: ["Rasengan", "Jutsu Clones das Sombras"],
  missoesConcluidas: 0
};

const Sasuke = {
  nome: "Sasuke",
  nivelChakra: 55,
  habilidadesNinjas: ["Chidori", "Sharingan"],
  missoesConcluidas: 0
};

const Sakura = {
  nome: "Sakura",
  nivelChakra: 45,
  habilidadesNinjas: ["Soco", "Jutsu de Cura"],
  missoesConcluidas: 0
};

// Função para treinar o chakra
function treinarChakra(aspirante) {
  const aumentoChakra = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  aspirante.nivelChakra += aumentoChakra;
  console.log(`${aspirante.nome} treinou seu chakra e ganhou ${aumentoChakra} pontos.`);
  exibirProgresso(aspirante);
}

// adiciona novas habilidades ninja
function adicionarHabilidade(aspirante, novaHabilidade) {
  aspirante.habilidadesNinjas.push(novaHabilidade);
  console.log(`${aspirante.nome} aprendeu uma nova habilidade ninja: ${novaHabilidade}.`);
  exibirProgresso(aspirante);
}

// Função para concluir missões ninja
function concluirMissao(aspirante) {
  aspirante.missoesConcluidas++;
  const recompensaChakra = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
  aspirante.nivelChakra += recompensaChakra;
  console.log(`${aspirante.nome} concluiu uma missão e ganhou ${recompensaChakra} pontos de chakra.`);
  exibirProgresso(aspirante);
}

// exibe o progresso de um aspirante
function exibirProgresso(aspirante) {
  console.log(`Nome: ${aspirante.nome}`);
  console.log(`Nível de Chakra: ${aspirante.nivelChakra}`);
  console.log(`Habilidades Ninjas: ${aspirante.habilidadesNinjas.join(", ")}`);
  console.log(`Missões Concluídas: ${aspirante.missoesConcluidas}`);
  
}

// determina o ninja mais habilidoso
function determinarMaisHabilidoso(aspirantes) {
  let maisHabilidoso = aspirantes[0];
  for (let i = 1; i < aspirantes.length; i++) {
    if (aspirantes[i].nivelChakra + aspirantes[i].habilidadesNinjas.length > maisHabilidoso.nivelChakra + maisHabilidoso.habilidadesNinjas.length) {
      maisHabilidoso = aspirantes[i];
    }
  }
  console.log(`O ninja mais habilidoso é: ${maisHabilidoso.nome}`);
}

// ações para os aspirantes
treinarChakra(Naruto);
adicionarHabilidade(Sasuke);
concluirMissao(Sakura);
treinarChakra(Naruto);
treinarChakra(Sasuke);
concluirMissao(Naruto);
concluirMissao(Sasuke);
adicionarHabilidade(Sakura, "Byakugou no Jutsu");

// Determinar o ninja mais habilidoso
determinarMaisHabilidoso([Naruto, Sasuke, Sakura]);
