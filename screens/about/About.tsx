import { StyleSheet, Text } from 'react-native';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import Logo from '../../components/logo/Logo';

export default function About() {
  return (
    <Card style={styles.card}>
      <Logo />
      <Title>Sobre</Title>
      <Text style={styles.text}>
        Aplicação de estudos desenvolvida com React, TypeScript e Vite.
      </Text>
      <Text style={styles.text}>
        Contém cálculos das quatro operações básicas, IMC e equação do segundo grau
        (Bhaskara).
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 520,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: '#000',
  },
});
