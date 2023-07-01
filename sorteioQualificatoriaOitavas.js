import geradorDeNumeroRandomico from './geradorDeNumeroRandomico.js';
import objJogadoresNumerados from './objJogadoresNumerados.js';
import printerOitavas from './printerOitavas.js';

const sorteioQualificatoriaOitavas = (jogadores) => {
  let jogo = [];
  let jogadoresNumerados = objJogadoresNumerados(jogadores);
  let jogadoresRestantes = jogadores;

  while (Object.keys(jogadoresNumerados).length > 0) {
    const numeroRandomico = geradorDeNumeroRandomico(jogadores.length);
    const jogador = jogadoresNumerados[numeroRandomico];

    if (!jogador) continue;

    jogo.push(jogador);
    delete jogadoresNumerados[numeroRandomico];
    jogadoresRestantes = jogadoresRestantes.filter((jog) => jog !== jogador);

    if (jogo.length === 2) {
      break;
    }
  }

  printerOitavas(jogo);

  return jogadoresRestantes;
};

export default sorteioQualificatoriaOitavas;
