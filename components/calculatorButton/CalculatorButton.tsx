import type { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

type Variant = 'primary' | 'secondary' | 'tertiary';

type CalculatorButtonProps = {
  variant?: Variant;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export default function CalculatorButton({
  variant = 'primary',
  onPress,
  style,
  children,
}: CalculatorButtonProps) {
  const textVariant = variant === 'primary' ? styles.textPrimary : styles.textSecondary;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styles[variant], style]}>
      <Text style={[styles.text, textVariant]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#4169e1',
  },
  secondary: {
    backgroundColor: '#ffffff',
  },
  tertiary: {
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 40,
  },
  textPrimary: {
    color: '#ffffff',
  },
  textSecondary: {
    color: '#4169e1',
  },
});
