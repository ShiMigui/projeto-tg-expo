import { StyleSheet, Text } from 'react-native';

type TimeProps = {
  seconds: number;
  done?: boolean;
};

export default function Time({ seconds, done = false }: TimeProps) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const rest = (seconds % 60).toString().padStart(2, '0');

  return <Text style={[styles.time, done && styles.done]}>{`${minutes}:${rest}`}</Text>;
}

const styles = StyleSheet.create({
  time: {
    fontSize: 56,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#000',
  },
  done: {
    color: '#1e90ff',
  },
});
