const objJogadoresNumerados = (jogadores) => {
  let jogadoresNumerados = {};

  for (let i = 0; i < jogadores.length; i += 1) {
    jogadoresNumerados[i + 1] = jogadores[i];
  }

  return jogadoresNumerados;
};

export default objJogadoresNumerados;
