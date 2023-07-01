import objJogadoresNumerados from './objJogadoresNumerados.js';
import geradorDeNumeroRandomico from './geradorDeNumeroRandomico.js';
import printerQuartas from './printerQuartas.js';

const sorteioQuartas = (jogadores) => {
  const numeroDeJogadores = jogadores.length;
  let jogadoresNumerados = objJogadoresNumerados(jogadores);

  if (numeroDeJogadores < 8) throw Error('Menos de 8 jogadores inscritos.');

  let chaves = [];
  let jogo = [];

  while (Object.keys(jogadoresNumerados).length > 0) {
    const numeroRandomico = geradorDeNumeroRandomico(numeroDeJogadores);
    const jogador = jogadoresNumerados[numeroRandomico];

    if (!jogador) continue;

    jogo.push(jogador);
    delete jogadoresNumerados[numeroRandomico];

    if (jogo.length === 2) {
      chaves.push(jogo);
      jogo = [];
    }
  }

  printerQuartas(chaves);
};

export default sorteioQuartas;
