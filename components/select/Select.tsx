import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';

type Option<T extends string> = {
  label: string;
  value: T;
};

type SelectProps<T extends string> = {
  value: T;
  options: readonly Option<T>[];
  onChange: (value: T) => void;
  label?: string;
};

export default function Select<T extends string>({
  value,
  options,
  onChange,
  label,
}: SelectProps<T>) {
  const picker = (
    <Picker
      selectedValue={value}
      style={styles.picker}
      onValueChange={(itemValue) => onChange(String(itemValue) as T)}
    >
      {options.map((option) => (
        <Picker.Item key={option.value} label={option.label} value={option.value} />
      ))}
    </Picker>
  );

  if (!label) {
    return <View style={styles.container}>{picker}</View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {picker}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
  label: {
    width: 55,
    fontSize: 16,
    color: '#000',
  },
  picker: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
