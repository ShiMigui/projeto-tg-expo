import { StyleProp, StyleSheet, TextInput, TextStyle } from 'react-native';

type TextInputBoxProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: 'numeric' | 'decimal-pad' | 'default';
  style?: StyleProp<TextStyle>;
};

export default function TextInputBox({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  style,
}: TextInputBoxProps) {
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
});
