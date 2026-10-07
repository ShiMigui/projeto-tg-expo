import TextInputBox from '../../components/textInputBox/TextInputBox';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import Message from '../../components/message/Message';
import { useState } from 'react';
import MathUtils from '../../services/MathUtils';

export default function Imc() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <Card>
      <Title>IMC</Title>
      <TextInputBox
        value={altura}
        onChangeText={setAltura}
        placeholder="Digite sua Altura em cm"
        keyboardType="numeric"
      />
      <TextInputBox
        value={peso}
        onChangeText={setPeso}
        placeholder="Digite o peso em kg"
        keyboardType="numeric"
      />
      <Button
        title="Calcular"
        onPress={() => MathUtils.calculaIMC(peso, altura, setImc, setMensagem)}
      />
      <Message>{imc ? `Seu IMC é: ${imc}` : 'Insira seus dados para calcular o IMC'}</Message>
      <Message>{mensagem}</Message>
    </Card>
  );
}
