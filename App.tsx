import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/home/Home';
import Ferramentas from './screens/ferramentas/Ferramentas';
import Conversao from './screens/conversao/Conversao';
import Timers from './screens/timers/Timers';
import Calculator from './screens/calculator/Calculator';
import About from './screens/about/About';

const Drawer = createDrawerNavigator();

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#1e90ff',
    background: '#111',
    card: '#111',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#111' },
          headerTintColor: '#fff',
          drawerStyle: { backgroundColor: '#111' },
          drawerActiveTintColor: '#1e90ff',
          drawerInactiveTintColor: '#fff',
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Ferramentas" component={Ferramentas} />
        <Drawer.Screen name="Conversão" component={Conversao} />
        <Drawer.Screen name="Timers" component={Timers} />
        <Drawer.Screen name="Calculadora" component={Calculator} />
        <Drawer.Screen name="Sobre" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
