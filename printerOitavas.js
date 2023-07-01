import centralizadorDeString from './centralizadorDeString.js';

const printerOitavas = (jogo) => {
  console.log(
    '\n',
    centralizadorDeString('##### Jogo qualificatória de Oitavas #####\n')
  );

  console.log(centralizadorDeString(`${jogo[0]} x ${jogo[1]}\n`));
  console.log(
    centralizadorDeString('=============================================\n')
  );
};

export default printerOitavas;
