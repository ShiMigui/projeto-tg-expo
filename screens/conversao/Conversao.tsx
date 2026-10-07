import { useState } from 'react';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import Button from '../../components/button/Button';
import Select from '../../components/select/Select';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import Message from '../../components/message/Message';
import MathUtils, { UnidadeTemperatura } from '../../services/MathUtils';

const UNIDADES: { label: string; value: UnidadeTemperatura }[] = [
  { label: 'Celsius (°C)', value: 'C' },
  { label: 'Fahrenheit (°F)', value: 'F' },
  { label: 'Kelvin (K)', value: 'K' },
];

export default function Conversao() {
  const [de, setDe] = useState<UnidadeTemperatura>('C');
  const [para, setPara] = useState<UnidadeTemperatura>('F');
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');

  const unidadesDe = UNIDADES.filter((unidade) => unidade.value !== para);
  const unidadesPara = UNIDADES.filter((unidade) => unidade.value !== de);

  function converter() {
    const { resultado: res, mensagem: msg } = MathUtils.converterTemperatura(valor, de, para);
    setResultado(res);
    setMensagem(msg);
  }

  return (
    <Card>
      <Title>Conversão de Temperatura</Title>
      <Select label="de:" value={de} options={unidadesDe} onChange={setDe} />
      <Select label="para:" value={para} options={unidadesPara} onChange={setPara} />
      <TextInputBox
        value={valor}
        onChangeText={setValor}
        placeholder="Digite o valor"
        keyboardType="numeric"
      />
      <Button title="Converter" onPress={converter} />
      <Message>
        {resultado ? `Resultado: ${resultado}` : 'Escolha as unidades e digite o valor'}
      </Message>
      <Message>{mensagem}</Message>
    </Card>
  );
}
