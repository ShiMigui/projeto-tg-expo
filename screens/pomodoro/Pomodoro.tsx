import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import Time from '../../components/time/Time';

const DURATION_SECONDS = 20 * 60;

export default function Pomodoro() {
  const [seconds, setSeconds] = useState(DURATION_SECONDS);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) {
      return;
    }
    const id = setInterval(() => {
      setSeconds((value) => Math.max(0, value - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (!running || seconds > 0) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setRunning(false);
      Alert.alert('Pomodoro finalizado!');
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [running, seconds]);

  return (
    <Card>
      <Time seconds={seconds} done={seconds === 0} />
      <View style={styles.buttons}>
        <Button
          title={running ? 'Pausar' : 'Iniciar'}
          onPress={() => setRunning((value) => !value)}
        />
        <Button
          title="Reiniciar"
          onPress={() => {
            setRunning(false);
            setSeconds(DURATION_SECONDS);
          }}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
});
