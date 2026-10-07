import { useState } from 'react';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import Button from '../../components/button/Button';
import Select from '../../components/select/Select';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import MathUtils from '../../services/MathUtils';

const OPERADORES: { label: string; value: string }[] = [
  { label: 'Somar', value: '+' },
  { label: 'Subtrair', value: '-' },
  { label: 'Multiplicar', value: '*' },
  { label: 'Dividir', value: '/' },
];

export default function Operacoes() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [selectedValue, setSelectedValue] = useState('+');

  return (
    <Card scroll>
      <Title>Soma de Dois Números</Title>
      <TextInputBox
        value={number1}
        onChangeText={setNumber1}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
      />
      <Select value={selectedValue} options={OPERADORES} onChange={setSelectedValue} />
      <TextInputBox
        value={number2}
        onChangeText={setNumber2}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
      />
      <Button
        title="Calcular"
        onPress={() => MathUtils.funcaoCalculo(number1, number2, selectedValue)}
      />
    </Card>
  );
}
