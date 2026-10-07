import { useState } from 'react';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import Message from '../../components/message/Message';
import MathUtils from '../../services/MathUtils';

export default function Baskara() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <Card scroll>
      <Title>Equação do 2º Grau (Bhaskara)</Title>
      <TextInputBox
        value={a}
        onChangeText={setA}
        placeholder="Digite o valor de a"
        keyboardType="numeric"
      />
      <TextInputBox
        value={b}
        onChangeText={setB}
        placeholder="Digite o valor de b"
        keyboardType="numeric"
      />
      <TextInputBox
        value={c}
        onChangeText={setC}
        placeholder="Digite o valor de c"
        keyboardType="numeric"
      />
      <Button
        title="Calcular"
        onPress={() => MathUtils.calculaBaskara(a, b, c, setResultado, setMensagem)}
      />
      <Message>
        {resultado ? resultado : 'Insira os coeficientes a, b e c para calcular'}
      </Message>
      <Message>{mensagem}</Message>
    </Card>
  );
}
