import objJogadoresNumerados from './objJogadoresNumerados.js';
import sorteioQualificatoriaOitavas from './sorteioQualificatoriaOitavas.js';
import sorteioQuartas from './sorteioQuartas.js';

const jogadores = [
  'Pedro Liao',
  'Fernando Cavalcanti',
  'Filipe Jordão',
  'Pedro Lucena',
  'Marina Pessoa',
  'Hilton Pintor',
  "Sofia D'barssoles",
  'Matheus Rodrigues',
  'Augusto Barbosa',
];

// const jogadoresNumerados = objJogadoresNumerados(jogadores);

const jogadoresRestantes = sorteioQualificatoriaOitavas(jogadores);

for (let i = 1; i <= 9; i += 1) {
  if (!jogadoresRestantes[i]) {
    jogadoresRestantes[i] = 'Vencedor das Oitavas';
    break;
  } else {
    continue;
  }
}

sorteioQuartas(jogadoresRestantes);
