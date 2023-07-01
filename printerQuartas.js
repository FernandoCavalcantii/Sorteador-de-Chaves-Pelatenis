import centralizadorDeString from './centralizadorDeString.js';

const printerQuartas = (jogos) => {
  const tituloQuartas = centralizadorDeString(
    '##### Tabela Quartas de Final Pelatênis Open Cup II #####\n'
  );

  console.log(tituloQuartas);

  for (let i = 0; i < jogos.length; i += 1) {
    console.log(centralizadorDeString(`----- Jogo ${i + 1} -----\n`));
    console.log(centralizadorDeString(`${jogos[i][0]} x ${jogos[i][1]}\n`));
  }
};

export default printerQuartas;
