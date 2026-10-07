import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import Time from '../../components/time/Time';

export default function Cronometro() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) {
      return;
    }
    const id = setInterval(() => {
      setElapsed((value) => value + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  return (
    <Card>
      <Time seconds={elapsed} />
      <View style={styles.buttons}>
        <Button
          title={running ? 'Pausar' : 'Iniciar'}
          onPress={() => setRunning((value) => !value)}
        />
        <Button
          title="Zerar"
          onPress={() => {
            setRunning(false);
            setElapsed(0);
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
