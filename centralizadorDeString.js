const centralizadorDeString = (string) => {
  const consoleWidth = process.stdout.columns;
  const padding = Math.floor((consoleWidth - string.length) / 2);
  const mensagemCentralizada = ' '.repeat(padding) + string;

  return mensagemCentralizada;
};

export default centralizadorDeString;
