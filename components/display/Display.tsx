import { StyleSheet, Text } from 'react-native';

type DisplayProps = {
  value: string;
};

export default function Display({ value }: DisplayProps) {
  return (
    <Text style={styles.display} numberOfLines={1} ellipsizeMode="head">
      {value}
    </Text>
  );
}

const styles = StyleSheet.create({
  display: {
    width: '100%',
    minHeight: 64,
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: 'right',
    fontSize: 48,
    color: '#000',
    overflow: 'hidden',
  },
});
