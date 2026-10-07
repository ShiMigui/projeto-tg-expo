import { Alert } from 'react-native';

export type UnidadeTemperatura = 'C' | 'F' | 'K';

const SUFIXO_UNIDADE: Record<UnidadeTemperatura, string> = {
  C: '°C',
  F: '°F',
  K: 'K',
};

function paraCelsius(valor: number, de: UnidadeTemperatura): number {
  switch (de) {
    case 'C':
      return valor;
    case 'F':
      return ((valor - 32) * 5) / 9;
    case 'K':
      return valor - 273.15;
  }
}

function deCelsius(valor: number, para: UnidadeTemperatura): number {
  switch (para) {
    case 'C':
      return valor;
    case 'F':
      return (valor * 9) / 5 + 32;
    case 'K':
      return valor + 273.15;
  }
}

class MathUtils {
  static funcaoCalculo(number1: string, number2: string, acao: string): void {
    let resultado = NaN;
    switch (acao) {
      case '+':
        resultado = parseFloat(number1) + parseFloat(number2);
        break;
      case '-':
        resultado = parseFloat(number1) - parseFloat(number2);
        break;
      case '*':
        resultado = parseFloat(number1) * parseFloat(number2);
        break;
      case '/':
        resultado = parseFloat(number1) / parseFloat(number2);
        break;
      default:
        break;
    }
    if (Number.isNaN(resultado)) {
      Alert.alert('Por favor, insira números válidos.');
    } else {
      Alert.alert(`A soma é: ${resultado}`);
    }
  }

  static calculaIMC(
    peso: string,
    altura: string,
    setImc: (value: string) => void,
    setMensagem: (value: string) => void,
  ): void {
    if (!altura || !peso) {
      setImc('Erro: Insira valores válidos');
      return;
    }
    const alturaMetros = parseInt(altura, 10) / 100;
    const imc = parseFloat(peso) / (alturaMetros * alturaMetros);
    setImc(imc.toFixed(2));
    setMensagem(this.statusIMC(imc));
  }

  static statusIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 24) {
      return 'Normal';
    } else if (imc < 30) {
      return 'SobrePeso grau 1';
    } else if (imc < 40) {
      return 'Obesidade grau 2';
    } else {
      return 'Obsidade Grave grau 3';
    }
  }

  static calculaBaskara(
    a: string,
    b: string,
    c: string,
    setResultado: (value: string) => void,
    setMensagem: (value: string) => void,
  ): void {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (!a || !b || !c || Number.isNaN(aNum) || Number.isNaN(bNum) || Number.isNaN(cNum)) {
      setResultado('');
      setMensagem('Erro: insira valores válidos para a, b e c');
      return;
    }

    if (aNum === 0) {
      setResultado('');
      setMensagem('Não é equação do 2º grau: a precisa ser diferente de 0');
      return;
    }

    const delta = bNum * bNum - 4 * aNum * cNum;

    if (delta < 0) {
      setResultado('');
      setMensagem(`Sem raízes reais: Δ = ${delta.toFixed(2)}`);
      return;
    }

    const x1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
    const x2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
    setResultado(`x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
    setMensagem(`Δ = ${delta.toFixed(2)}`);
  }

  static converterTemperatura(
    valor: string,
    de: UnidadeTemperatura,
    para: UnidadeTemperatura,
  ): { resultado: string; mensagem: string } {
    const numero = parseFloat(valor);
    if (Number.isNaN(numero)) {
      return { resultado: '', mensagem: 'Erro: insira um valor válido' };
    }

    const convertido = deCelsius(paraCelsius(numero, de), para);
    return { resultado: `${convertido.toFixed(2)} ${SUFIXO_UNIDADE[para]}`, mensagem: '' };
  }
}

export default MathUtils;
