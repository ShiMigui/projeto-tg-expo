import type { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

type MessageProps = {
  children: ReactNode;
};

export default function Message({ children }: MessageProps) {
  return <Text style={styles.message}>{children}</Text>;
}

const styles = StyleSheet.create({
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
});
