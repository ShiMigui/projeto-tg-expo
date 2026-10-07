import type { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

type TitleProps = {
  children: ReactNode;
};

export default function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
});
