import { Image, StyleSheet } from 'react-native';

export default function Logo() {
  return <Image style={styles.logo} source={require('../../assets/images/logo.jpg')} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
    shadowColor: '#1e90ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 5,
  },
});
